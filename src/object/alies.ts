

export const aliesSample = () => {
   type Country ={
        name : string,
        language : string,
        location : string
   }

   const japan: Country={
    name : 'japan',
    language : '日本語',
    location : 'Asia'
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
    swordSkill:'三連斬り'
}

const adventurer2: Adventurer = {
    hp:100,
    mp:40,
    weapon:'木の枝',
    magicSkill:'ファイヤーボール'
}

console.log(adventurer1)
console.log(adventurer2)


}


