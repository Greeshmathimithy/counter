import { createSlice } from "@reduxjs/toolkit"

const CounterSlice = createSlice({
    name:"counterApp",
    initialState :{
        value:0
    },
    //actions are created inside this reducers key
    reducers:{
        //logic to update state

        //function to increment
        increment:(state,action)=>{
            state.value += action.payload           
        },
        //function to decrement
        decrement:(state,action)=>{
            state.value -= action.payload
        },
        //function to reset
        reset:(state)=>{
            state.value = 0
        }
    }
})

//action is requires by component in order to update state
export const{increment ,decrement,reset} = CounterSlice.actions

//reducer is required to store to change the state value
export default CounterSlice.reducer