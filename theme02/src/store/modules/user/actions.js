import axios from "axios";

export default {
    getUsersList({ commit }) {
        return new Promise((resolve, reject) => {
            try {
                axios.get(`http://localhost:4000/api/users_all`).then((response) => {
                    commit('setUsersList', response.data.data);
                    resolve(response.data.data);
                }).catch((error) => {
                    reject(error);
                });
            } catch (error) {
                reject(error);
            }
        });
    },
    deleteUser({ commit }, id) {
        return new Promise((resolve, reject) => {
            try {
                axios.delete(`http://localhost:4000/api/users/${id}`).then(() => {
                    axios.get(`http://localhost:4000/api/users_all`).then((response) => {
                        commit('setUsersList', response.data.data);
                        resolve(response.data.data);
                    }).catch((error) => {
                        reject(error);
                    });
                }).catch((error) => {
                    reject(error);
                });
            } catch (error) {
                reject(error);
            }
        });
    },
    getUser({ commit }, id) {
        return new Promise((resolve, reject) => {
            try {
                axios.get(`http://localhost:4000/api/users/${id}`).then((response) => {
                    commit('setUser', response.data.data);
                    resolve(response.data.data);
                }).catch((error) => {
                    reject(error);
                });
            } catch (error) {
                reject(error);
            }
        });
    },
    updateUser({ commit }, user) {
        return new Promise((resolve, reject) => {
            try {
                axios.put(`http://localhost:4000/api/users/${user[0]}`, user[1]).then((response) => {
                    commit('setUser', response.data.data);
                    resolve(response.data.data);
                }).catch((error) => {
                    reject(error);
                });
            } catch (error) {
                reject(error);
            }
        });
    },
    postUser({ commit }, user) {
        return new Promise((resolve, reject) => {
            try {
                axios.post(`http://localhost:4000/api/users`, user).then((response) => {
                    commit('setUser', response.data.data);
                    resolve(response.data.data);
                }).catch((error) => {
                    reject(error);
                });
            } catch (error) {
                reject(error);
            }
        });
    },
}