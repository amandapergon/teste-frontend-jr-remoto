import axios from 'axios'

const state = { 
    contacts: {}
};

const getters = { 
    contactsList: state => state.contacts
};

const actions = { 
    async fetchContacts({commit}){
      const response = await axios.get("https://jsonplaceholder.typicode.com/users");
      commit("setContacts", response.data)
    }
};

const mutations = { 
    setContacts: (state, contacts) => (
        state.contacts = contacts
    )
};

export default {
    state,
    getters,
    actions,
    mutations
}
