

export const genelicsSample = () => {
    // ジェネリック型を定義しない場合
    const stringReducer = (array:string[],initilValue:string):string => {
        let result = initilValue;
        for(let i = 0; i < array.length; i++) {
            result += array[i];
        }

        return result
    }

    const resultValue = stringReducer(['satou','takeda','yamada'],"")
    console.log(resultValue)

// number型を定義
    const numberReducer = (array:number[],initilValue:number):number => {
        let result = initilValue;
        for(let i = 0; i < array.length; i++) {
            result += array[i];
        }

        return result
    }

    const resultValue2 = numberReducer([100,200,300],1000)
    console.log(resultValue2)

    // もし2つをまとめるとしたら
    type Reduce = {
        (array:string[],initilValue:string):string,
        (array:number[],initilValue:number):number
    }

    // ジェネリック型の定義
    type GenericReduce<T> ={
        (array:T[], initilValue:T): T
    }
    
    const genericStingReduce:GenericReduce<string> = (array,initilValue) => {
        let result = initilValue;
        for(let i = 0; i < array.length; i++) {
            result += array[i];
        }

        return result
    }

    console.log(genericStingReduce(['phson','java','php'],""))



    // いろいろなジェネリック型の定義方法
    // ①完全な呼び出しシグネチャ

    type GenericReduce2 = {
        <T>(array:T[],initilValue:T):T
        <U>(array:U[],initilValue:U):U
    }

    // 呼び出しシグネチャの省略記法
    type GenericReduce3<T> = (array:T[],initilValue:T) => T
    type GenericReduce4 = <T>(array:T[],initilValue:T) => T


    // 
    }


   



