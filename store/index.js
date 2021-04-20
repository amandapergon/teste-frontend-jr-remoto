import axios from 'axios'

const api = 'https://jsonplaceholder.typicode.com/users' 

const state = { 

    contacts: []
};

const mutations = { 

    setContacts: (state, payload) => (
        state.contacts = payload
    )
}; 

const getters = { 

    getContactsList: (state) => (contacts) => {
        return state.contacts
    }
};

const actions = { 

    async setContacts({ commit }){
        const response = await axios.get(api)
        commit('setContacts', response.data)
    },
    async getContacts({ dispatch }){
        await dispatch('setContacts')
    }
};
  

export default {
    state,
    mutations,
    getters,
    actions
}
