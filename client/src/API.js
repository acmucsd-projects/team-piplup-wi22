import axios from 'axios'

const server = 'http://localhost:5000';

const API = {
    getUser: function(){
        return axios.get(`${server}/users`)
    },
    createUser: function (user){
        return axios.post(`${server}/users`, user)
    },
    checkUser: function(user){
        return axios.post(`${server}/users/login`, user)
    },
    updateUser: function (user){
        return axios.put(`${server}/users`, user)
    },
    deleteUser: function(user){
        return axios.delete()
    },
}

export default API;