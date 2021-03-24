

const unknownSample = () => {
   const number: unknown = 10;
   console.log(typeof number,number)

   const isFoo = number === 'toro';
   console.log(typeof isFoo,isFoo)

// unkown型なので下記の文はエラーが表示される→unkown型の特徴
// APIで叩きたいときはif文を使って処理を切りわける必要がある
   //    const sum = number + 109

   if(typeof number === 'number'){
      // 数値型と指定することでnumberを使用することができる
        const sum = number + 10
        console.log(sum)
   }
}

export default unknownSample
