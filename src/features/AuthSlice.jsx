import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    username :'',
    email: '',
    password: '',
    isLoggedIn: false,
    isAdmin:'',
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers:{
        addUser:(state,action)=>{
            const {username,email,password} = action.payload
            state.username = username
            state.email = email
            state.password = password
        },
        delUser:(state)=>{
            state.username = ''
            state.email = ''
            state.password = ''
        }
    }
})
export const {addUser,delUser} = authSlice.actions
export default authSlice.reducer