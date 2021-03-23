

export const tapleSample = () => {
   let country:[number,string] = [1,'japan']
   
   country = [2,'usa']
   console.log(country)

//    country = ['aaa','usa']→1つ目がstring型のためエラー
// country = ['aada','dafgarf']

// 3つ目の型定義がされてないためエラー
// country = [2,'aada','dafgarf']


// レストパラメータで定義する
let gilefriend:[number,...string[]] = [3,'efaa','efsfa','rgsrg'];
console.log(gilefriend);
}


