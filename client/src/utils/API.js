import axios from "axios";

export default {
    getUser: function (UserData) {
        return axios.get("/api/users", UserData);
    },
    signupUser: function (UserData) {
        return axios.post("/api/users", UserData);
    },
    deleteBook: function (id) {
        return axios.delete("/api/books/" + id);
    },
    getBook: function (id) {
        return axios.get("/api/books/" + id);
    }
}