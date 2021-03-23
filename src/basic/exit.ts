

const exit = () => {
   let name = null
   console.log(typeof name)

   if(name){
    console.log(`私の名前は${name}だ`)
   }else{
       console.log('私に名前はない')
   }
}

export default exit
