import {createSlice} from "@reduxjs/toolkit"

const initialState={
    name: "",
    email: "",
    photo: "",
};

const userSlice=createSlice({
    name: "user",
    initialState,
    reducers:{
        setUserLoginDetails:(state,action)=>{
            console.log(action);
            state.name= action.payload.name;
            state.email=action.payload.email;
            state.photo=action.payload.photo;
        },
        setSignOutState: state=>{
            state.name=null;
            state.email=null;
            state.photo=null;
        }
    }
});

// export all the actions so that you can use it in your react app
export const {setUserLoginDetails,setSignOutState}=userSlice.actions;
//state.user because our reducer's name is user,,, we can also destructure it 
// as const {name}=(state)=>state.user
// we have to this to export all of our state variables
export const selectUserName = (state)=> state.user.name;
export const selectUserEmail = (state)=> state.user.email;
export const selectUserPhoto = (state)=> state.user.photo;


export default userSlice.reducer;