type Suji = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
type Dan = "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9";

type Player = "first" | "second";

// 駒の位置を表すクラス
class Position {
  constructor(private suji: Suji, private dan: Dan) {}
  // p
  distanceFrom(position: Position, player: Player) {
    //  先手と後手に分ける理由は進む方向が違う為分ける必要がある。先手は上。後手は下
    if (player === "first") {
      return {
        //  Math.absは数値の絶対値を返す
        // Numberとすることでnumber型に変換することができる→だからdanは文字列にしていた（漢数字ではなく）
        // position.sujiはdistanceFromに与得られた数字で、this.sujiが現在の場所
        suji: Math.abs(position.suji - this.suji),
        dan: Math.abs(Number(position.dan) - Number(this.dan)),
      };
    } else {
      return {
        suji: Math.abs(position.suji - this.suji),
        // 段（縦）の進む方向が違う為先頭にマイナスをつけることで正負反転することができる
        dan: -(Math.abs(Number(position.dan) - Number(this.dan))),
      };
    }
  }
}

// 駒を表すクラス
// abstractをつけることで抽象化クラスにすることができる
// 抽象化することでインスタンスを作成することはできないが、継承でサブクラスに具体性を持たせることができる
// 抽象化しないと、Pieceクラスに具体的なコマの性能を記載する必要があり、再利用がしづらくなる！

abstract class Piece {
  // クラスを型として定義する
  //   Pieceとサブクラスのみ使用することができる
  protected position: Position;

  constructor(private readonly player: Player, suji: Suji, dan: Dan) {
    this.position = new Position(suji, dan);
  }

  //   メソッド
  // コマの移動用メソッド
  noveTo(position: Position) {
    this.position = position;
  }
  // 移動できるかを判定するメソッド
  // abstractを指定することでここでは深く関数の中身を指定せず、各々のサブクラスで指定する
  // なので何を返すのかだけを記載する→今回で言うとbooleanだけを記載することができる
  abstract canMoveTo(position: Position, player: Player): boolean;
}

class Osho extends Piece{
    // 王将のcanMoveToを具体的に実装する必要がある
    canMoveTo(position: Position, player: Player):boolean{
        const distance = this.position.distanceFrom(position,player);
        return (distance.suji < 2 && distance.dan < 2)
    }
}

class Game{
    private pieces = Game.makePieces()
    private static makePieces(){
        return [
            new Osho('first',5,'1'),
            new Osho('second',5,'9')
        ]
    }
}