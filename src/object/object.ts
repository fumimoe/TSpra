

export const objectSample = () => {
//   オブジェクトリテラル
 let country : {
     launguage : string,
     name : string
 }={
    launguage : 'japanese',
    name : 'japan'
 }
 console.log(country);

 country = {
    launguage : 'english',
    name : 'USA'
 }
 console.log(country);
}


// オプショナルとreadonly

export const human = () => {
    let person : {
        age : number,
        lastName : string,
        readonly firstName : string,
        gender? : string
    }
    person = {
        age : 43,
        lastName : 'kenshi',
        firstName : 'takada',
    }
    console.log(person);

    person.gender = 'male'
    person.lastName = 'masa'
    

console.log(person);
}

// インデックスシグネチャ
// keyにも型定義することができるkyeはstringかnumberのみ
// 複数値が入る可能性を示すのがインデックスシグネチャ

export const indexsig = () => {
    let capitals : {
        [countryName:string]:string
    }
    capitals = {
        2 : 'fuji',
        usa : 'mount' 
    }

    capitals.korea = 'cook'
    capitals.china = 'siruku'

    console.log(capitals);

}

