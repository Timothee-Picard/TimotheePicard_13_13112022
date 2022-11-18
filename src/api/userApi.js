import axios from "axios";

const baseURL = "http://localhost:3001/api/v1"

export const login = (email, password) => {
    return new Promise((resolve, reject) =>{
        axios.post(`${baseURL}/user/login`, {
            email: email,
            password: password
        })
            .then(response => {
                resolve(response.data.body.token)
            })
            .catch(e => {
                reject(e)
            })
    })
}

export const getUser = (token) => {
    return new Promise((resolve, reject) =>{
        //Bearer token
        axios.post(`${baseURL}/user/profile`, {}, {
            headers: {
                Authorization: `Bearer ${token}`
            }})
            .then(response => {
                resolve(response.data.body)
            })
            .catch(e => {
                reject(e)
            })
    })
}

export const updateUser = (token, firstname, lastname) => {
    return new Promise((resolve, reject) =>{
        axios.put(`${baseURL}/user/profile`, {
            firstName: firstname,
            lastName: lastname
        }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }})
            .then(response => {
                resolve(response.data.body)
            })
            .catch(e => {
                reject(e)
            })
    })
}