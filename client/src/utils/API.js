import axios from "axios";

export default {
    getUser: function (UserData) {
        return axios.get("/api/users/"+ UserData);
    },
    getEmail: function (UserData) {
        return axios.get("/api/users/email/"+ UserData);
    },
    getPassword: function (UserData) {
        return axios.get("/api/users/password/"+ UserData);
    },
    signupUser: function (UserData) {
        return axios.post("/api/users", UserData);
    }
}