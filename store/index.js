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
    },
    getContactByName: (state) => (name) => {
        return state.contacts.find(contact => contact.name === name)
    },
    getContactsByCompanyBs: (state) => (bs) => {
        return state.contacts.find(contact => contact.company.bs === bs)
    },
    getContactById: (state) => (id) => {
        return state.contacts.find(contact => contact.id === id)
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
