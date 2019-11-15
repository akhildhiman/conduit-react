import { createStore } from "redux"

const user = {
    "username": "",
    "email": "",
    "password": ""
}

function reducer(state = user, action) {
    switch(action.type) {
        case "USER":
            return {...state, user: action.payload}
        default:
            return state
    }
}


const store = createStore(reducer)


export default store

