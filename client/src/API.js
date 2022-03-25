import axios from 'axios'

const server = 'http://localhost:5000';

const API = {
    getUser: function(){
        return axios.get(`${server}/users`)
    },
    createUser: function (user){
        return axios.post(`${server}/users`, user)
    },
    updateUser: function (user){
        return axios.put()
    },
    deleteUser: function(user){
        return axios.delete()
    },
}

export default API;