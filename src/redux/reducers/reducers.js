import {USER_REGISTER,USER_LOGIN,CHECK_USER_LOGIN} from '../actions/action_type'

import { combineReducers } from 'redux';
const userAccount=[
    {user_id:'000',username:'admin',password:'admin',email:'admin@abc.com'},
    {user_id:'001',username:'a',password:'a',email:'a@abc.com'}
];

const userReducers = (state = userAccount, action)=>{
    
    switch(action.type){
        case USER_REGISTER:
            console.log(action)
            return [...state, {
                user_id:'00'+userAccount.length,
                username:action.values.username,
                password:action.values.password,
                email:action.values.email
            }]
        
        
           
        
        default:
            return [...state];
    }
}



export default combineReducers({
    userReducers
})
