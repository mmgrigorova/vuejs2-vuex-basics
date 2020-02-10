import Vue from 'vue';

export const store = Vue.observable({
    state:{
        registrations: [],
        users: [
            {id: 1, name: 'Max', registered: false},
            {id: 2, name: 'Anna', registered: false},
            {id: 3, name: 'Chris', registered: false},
            {id: 4, name: 'Sven', registered: false}
        ]
    }
});

export const mutations = {
    unregister(registration) {
        const user = store.state.users.find(user => {
            return user.id == registration.userId;
        });
        user.registered = false;
        store.state.registrations.splice(store.state.registrations.indexOf(registration), 1);

    }
}