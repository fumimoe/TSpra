

export const aliesSample = () => {
   type Country ={
        name : string,
        language : string,
        location : string,
        age: number
   }

   const japan: Country={
    name : '東京',
    language : '日本語',
    location : 'アジア',
    age : 100
   }

   console.log(japan);

//    合併型（unicon）と交差型(intersection)
type Knight = {
    hp:number,
    sp:number,
    weapon:string,
    swordSkill:string
}
type Wiard = {
    hp:number,
    mp:number,
    weapon:string,
    magicSkill:string
}

// アドベンチャーは合併型
type Adventurer = Knight | Wiard;

// 交差型
type Paladin = Knight & Wiard;

const adventurer1: Adventurer = {
    hp:120,
    sp:20,
    weapon:'木の剣',
    swordSkill:'三連斬り',
    magicSkill:'ファイヤーボール'
}

const adventurer2: Adventurer = {
    hp:100,
    mp:40,
    weapon:'木の枝',
    magicSkill:'ファイヤーボール'
}


const adventurer3: Paladin = {
    hp:100,
    sp:20,
    mp:40,
    weapon:'木の枝',
    magicSkill:'ファイヤーボール',
    swordSkill:'三連斬り'
}

console.log(adventurer1)
console.log(adventurer2)
console.log(adventurer3)


type hero = {
    hp:number,
    attack:number,
    swordSkill:string,
}

type badGuy = {
    hp:number,
    damage:number,
    attack:number,
    magicSkill:string,
}

type Adventurers = hero | badGuy
type crossing = hero & badGuy

const adventurer4:Adventurers = {
    hp:100,
    attack:200,
    swordSkill:'鬼斬'
}

const adventurer5:Adventurers = {
    hp:600,
    damage:192,
    attack:100,
    magicSkill:'サーペンソーティア',
}
console.log(adventurer4)
console.log(adventurer5)

const adventurer6:crossing = {
    hp:100,
    attack:200,
    swordSkill:'鬼斬',
    damage:192,
    magicSkill:'サーペンソーティア',
}

const adventurer7:crossing = {
    hp:100,
    attack:200,
    swordSkill:'鬼斬',
    damage:192,
    magicSkill:'サーペンソーティア',
}

}


