import { CreateSlice, createSlice } from "@reduxjs/toolkit"; 
import { shallowEqual } from "react-redux";

const uiSlice=createSlice({
    name : 'ui',
    initialState :{ cartIsVisibale : false,notification : null},
    reducers : {
       toggle(state){
        state.cartIsVisibale=!state.cartIsVisibale;
       },
       showNotification(state,action){
   state.notification={status: action.payload.status, message : action.payload.message,}
       }
    }
});


export const uiActions=uiSlice.actions;
export default uiSlice;