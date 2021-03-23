


export const arryaSample = () => {
    const color:string[] = ['red','blue'];
    // const color:Array<string> = ['red','blue'];
    color.push('yellow')
    

    console.log(color);
    
    // 合併型→配列にいれこむ
    const person:(string | number)[] = ['red',133];
    console.log(person)
    person.push(34232)
    person.push('aef')
    console.log(person)

    // 配列の型推論

    const anyArray = () => {
        // ここではany型定義される
        const someArray = [];

        someArray.push('aaaaa');
        // 勝手にstringとnumberの型推論がされる(string | number)[]
        someArray.push(434);
        // someArray.push(false);

        return someArray

    }

   const someArray= anyArray();
   console.log(someArray)

//    booleran型は定義されてないためエラーが表示される→最初からboolean型を定義すればいい
//    someArray.push(true)
//    console.log(someArray)



// イミュータブルな配列を作る

// ミュータブルな状態→書き換えが可能
const numberArray:number[]  = [1,2,3,4];
console.log(numberArray)
numberArray[3] = 5
console.log(numberArray)

// 書き換えが不可能にする→readonlyを使用する

const name:readonly string[] = ['tanaka','takeda','satou']
// 他の書き方紹介
// const county:ReadonlyArray<string> = ['aaa','dddd','wwww'];
// const county:Readonly<string[]> = ['aaa','dddd','wwww'];

// イミュータブルな状態のため、書き換えや追加は不可能
// name.psuh('aaaa')

}


