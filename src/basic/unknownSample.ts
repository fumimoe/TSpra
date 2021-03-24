

// const unknownSample = () => {
//    const number: unknown = 10;
//    console.log(typeof number,number)

//    const isFoo = number === 'toro';
//    console.log(typeof isFoo,isFoo)

// // unkown型なので下記の文はエラーが表示される→unkown型の特徴
// // APIで叩きたいときはif文を使って処理を切りわける必要がある
//    //    const sum = number + 109

//    if(typeof number === 'number'){
//       // 数値型と指定することでnumberを使用することができる
//         const sum = number + 10
//         console.log(sum)
//    }
// }

// export default unknownSample


export const  unknownSample = () => {
      let number: unknown = 10;
      // number型が表示される
      console.log(typeof number,number)

      // この書き方はエラーが表示されます　→　オブジェクト型は 'unknown' です。
   //   const sum = number + 10

   if(typeof number === 'number'){
          // number型と指定することで使用することができる
            const sum = number + 10
            console.log(sum)
       }
}
