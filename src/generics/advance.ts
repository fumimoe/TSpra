

export const advanceSample = () => {
//   map関数のシグネチャ

type Map<T,U> = (array:T[],fn:(item:T) => U) => U[];

const mapStirngToNumber:Map<string,number> = (array,fn) => {
    let result = [];
    for(let i = 0; i < array.length; i++){
        // itemに格納する
        const item = array[i]
        // それをfnの関数に渡してstirng型からnumber型に置き換える
        // それをresultのi番目に格納する
        result[i] =  fn(item)
    }

    return result
}

// 第二引数にはitemを受け取って Number(item)とすることでstringからnumber型に変更する処理を書いてる
const numbers = mapStirngToNumber(['123','324','2342'],(item) => Number(item))
console.log(numbers);
}


