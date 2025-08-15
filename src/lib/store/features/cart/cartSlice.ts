// for Creating Slice -->Snippet

import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

//TS THING
export interface CartState {
  items:string[]  //product id 
}

//INITIAL STATE 
const initialState: CartState = {
  items:[],
}

export const cartSlice = createSlice({
  name: 'cart', //NAME
  initialState, //INITIAL STATE

  reducers: {
    add:(state,action)=>{
      state.items.push(action.payload);
    }
    ,
    // remove:(state,action)=>{
    //   state.items.filter()
    // }
  },
})


export const { add} = cartSlice.actions;   //action return

export default cartSlice.reducer;         //reducer return 