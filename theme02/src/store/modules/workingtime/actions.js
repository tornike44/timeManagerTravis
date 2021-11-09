import axios from "axios";

export default {
    getWorkingTimesList({ commit }, userId) {
        return new Promise((resolve, reject) => {
            try {
                axios.get(`http://localhost:4000/api/workingtimes/${userId}`).then((response) => {
                    commit('setWorkingTimesList', response.data.data);
                    resolve(response.data.data);
                }).catch((error) => {
                    reject(error);
                });
            } catch (error) {
                reject(error);
            }
        });
    },
    deleteWorkingTime({ commit }, ids) {
        return new Promise((resolve, reject) => {
            try {
                axios.delete(`http://localhost:4000/api/workingtimes/${ids[0]}`).then(() => {
                    axios.get(`http://localhost:4000/api/workingtimes/${ids[1]}`).then((response) => {
                        commit('setWorkingTimesList', response.data.data);
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
    getWorkingTime({ commit }, workingtimeIds) {
        return new Promise((resolve, reject) => {
            try {
                axios.get(`http://localhost:4000/api/workingtimes/${workingtimeIds[0]}/${workingtimeIds[1]}`).then((response) => {
                    commit('setWorkingTimeById', response.data.data);
                    resolve(response.data.data);
                }).catch((error) => {
                    reject(error);
                });
            } catch (error) {
                reject(error);
            }
        });
    },
    updateWorkingTime({ commit }, workingtime) {
        return new Promise((resolve, reject) => {
            try {
                axios.put(`http://localhost:4000/api/workingtimes/${workingtime[0]}`, workingtime[1]).then((response) => {
                    commit('setWorkingTimeById', response.data.data);
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