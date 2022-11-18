import { createSlice } from '@reduxjs/toolkit'
import {getUser, login, updateUser} from "../../api/userApi.js";

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        token: null,
        firstName: "default firstname",
        lastName: "default lastname"
    },
    reducers: {
        setToken: (state, action) => {
            state.token =  action.payload
        },
        setUser: (state, action) => {
            state.firstName =  action.payload.firstName
            state.lastName = action.payload.lastName
        },
    },
})

// Action creators are generated for each case reducer function
export const { setToken, setUser } = userSlice.actions

export const tokenAsync = (username, password) => (dispatch) => {
    return new Promise((resolve, reject) =>{
        login(username, password)
            .then(response => {
                dispatch(setToken(response))
                resolve()
            })
            .catch(e => {
                console.log(e.message)
                reject(e)
            })
    })
}

export const getUserAsync = (token) => (dispatch) => {
    return new Promise((resolve, reject) => {
        getUser(token)
            .then((res) => {
                dispatch(setUser(res))
                resolve()
            })
            .catch((e) => {
                console.log(e)
                reject(e)
            })
    })
}

export const updateUserAsync = (token, firstname, lastname) => (dispatch) => {
    return new Promise((resolve, reject) => {
        updateUser(token, firstname, lastname)
            .then((res) => {
                dispatch(setUser(res))
                resolve()
            })
            .catch((e) => {
                console.log(e)
                reject(e)
            })
    })
}

export const selectToken = (state) => state.user.token

export const selectUser = (state) => {
    return {
        firstName: state.user.firstName,
        lastName: state.user.lastName
    }
}

export default userSlice.reducer