export const state = () => ({
    contacts: []
})

export const mutations = {
    async fetch() {
        this.contacts = await fetch(
        'https://jsonplaceholder.typicode.com/users'
      ).then(res => res.json())
    }
}

export const getters = {
    getContactByName: (state) => (name) => {
        return state.contacts.find(contact => contact.name === name)
    },
    getContactsByCompanyBs: (state) => (bs) => {
        return state.contacts.find(contact => contact.company.bs === bs)
    },
    getContactById: (state) => (id) => {
        return state.contacts.find(contact => contact.id == id)
    }
}

