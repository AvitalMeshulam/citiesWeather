import axios from 'axios';
import { connect } from 'react-redux';
import { actions } from './redux/actions'
import store from './redux/store'

export async function login(user) {
    let success;
    await axios.post('http://localhost:8080/login', user).then(
        res => {
            success = true
            console.log("user ", res.data.user._id);
            store.dispatch(actions.signInUser(res.data.user));
            getUserHistories(res.data.user._id)
        },
        err => {
            success = false
        }

    )
    return success
}

export async function createUser(user) {
    let success;
    await axios.post('http://localhost:8080/createUser', user).then(
        res => {
            success = true
            console.log("user ", res.data.user._id);
            store.dispatch(actions.signInUser(res.data.user));
        },
        err => {
            success = false
        }
    )
    return success
}

export async function getUserHistories(userId) {
    console.log("userId: ", userId)
    await axios.get('http://localhost:8080/getUserHistories/' + userId).then(
        res => {
            console.log("getUserHistories work " + JSON.stringify(res.data))
            console.log("history: ", res)
            res = res.data
            res.histories.map((hist) => {
                console.log("hist: ", hist);
                store.dispatch(actions.addNewHistory(hist));
            })
        },
        err => {
            console.log("i am at errrrrr ")

            console.log("error getUserHistories :" + err)
        }
    )
}


export async function createNewHistory(history, userId){
    await axios.post('http://localhost:8080/createNewHistory/'+userId ,history).then(
        res=>{
            console.log("createNewHistory work "+JSON.stringify(res.data))
        },
        err=>{
            console.log("error createUser:"+err)
        }
    )
}

