

// export const isUserSignedIn = (userId:number,name?:string):boolean => {
//    if(userId === 1){
//        console.log(name);
//        return true
//    }else{
//        console.log('no')
//        return false
//    }
// }

export const isUserSignedIn = (userId:number,name?:string):boolean => {
    if(userId === 1){
        console.log(name)
        return true
    }else{
        console.log('noName')
        return false
    }
}

export const isUserSignedIn2 = (userId:number,name="suzuki"):boolean => {
    if(userId === 1){
        console.log(name)
        return true
    }else{
        console.log(name)
        return false
    }
}

export const value = (...num:number[]) => {
    console.log(num)
}

// type messageSignenecher = {
//     (message :string):void
// }

type messageSignenecher = (message:string) =>  void

export const logMeesage :messageSignenecher = (message) => {
    console.log(message);
}



// export const isUserSignedIn2 = (userId:number,name = 'noname'):boolean => {
//     if(userId === 1){
//         console.log(name);
//         return true
//     }else{
//         console.log('no')
//         return false
//     }
//  }
 
// //  レストパラメーター
//  export const sumNumber = (...price:number[]):number => {
//     return price.reduce((prevTotal,currentPrice) => {
//         return prevTotal + currentPrice
//     },0)
//  }
 
// //  呼び出しシグネチャ
// type logMessage = (message:string) => void
// export const logMeeages6: logMessage = (message) => {
//     console.log(message);
// } 
 
// type fullLogMessage = {
//     (message:string) :void
// }

// export const logMeeages7: fullLogMessage = (message) => {
//     console.log(message);
// } 