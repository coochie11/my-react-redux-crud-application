export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

export const increment = () =>{
    return{
        type: INCREMENT
    }
}

// リファクタリングした方
export const decrement = () =>({
    type: DECREMENT
})


