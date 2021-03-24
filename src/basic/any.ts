

const any = () => {
  let name: any = 'aaaa'
  console.log(typeof name, name);
  name=25
  console.log(typeof name, name);
 }
 
 
 export default any
 

//  anyとunkownの違い
// anyはどんな型も許容する
// unkownは代入された値によって型が変わる

export const anySample = () => {
  let name:any = 'aaaa'
  // string型が表示される
  console.log(typeof name,name);
  name = 25
  // number型表示される
  console.log(typeof name,name);

}