import axios from 'axios'

const server = 'http://localhost:5000';

const API = {
    getUsers: function(){
        return axios.get(`${server}/users`)
    },
    getUser: async function(id){
        const data = await axios.get(`${server}/users/${id}`);
        return data;
    },
    createUser: function (user){
        return axios.post(`${server}/users`, user)
    },
    checkUser: function(user){
        return axios.post(`${server}/users/login`, user)
    },
    updateUser: function (id, user){
        return axios.put(`${server}/users/${id}`, user)
    },
    updateUserProfile: function(id, file){
        return axios.put(`${server}/users/${id}/picture`, file)
    },
    getUserEvents: function(id){
        return axios.get(`${server}/users/${id}/events`)
    },
    getEvents: function(){
        return axios.get(`${server}/events`)
    },
    createEvent: function(event){
        return axios.post(`${server}/events`,event)
    },
    getEvent: function(id){
        return axios.get(`${server}/events/${id}`)
    },
    joinEvent: function(id, userID){
        return axios.post(`${server}/events/${id}/attendance/${userID}`)
    }
}

export default API;