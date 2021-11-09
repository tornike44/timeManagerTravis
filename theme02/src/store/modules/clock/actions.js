import axios from "axios";

export default {
    getClock({ commit }, id) {
        return new Promise((resolve, reject) => {
            try {
                axios.get(`http://localhost:4000/api/clocks/${id}`).then((response) => {
                    commit('setClock', response.data.data[0]);
                    resolve(response.data.data[0]);
                }).catch((error) => {
                    reject(error);
                });
            } catch (error) {
                reject(error);
            }
        });
    },
    postClock({ commit }, id) {
        return new Promise((resolve, reject) => {
            try {
                axios.post(`http://localhost:4000/api/clocks/${id}`).then((response) => {
                    commit('setClock', response.data.data);
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