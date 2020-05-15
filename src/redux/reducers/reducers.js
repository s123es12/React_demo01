import {USER_REGISTER,USER_LOGIN,CHECK_USER_LOGIN} from '../actions/action_type'
import { combineReducers } from 'redux';
const userAccount=[
    {user_id:'000',username:'admin',password:'admin',email:'admin@abc.com',isLogin:false},
    {user_id:'001',username:'a',password:'a',email:'a@abc.com',isLogin:false}
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
        case USER_LOGIN:
            var newState = JSON.parse(JSON.stringify(userAccount));
            for(var i=0;i<userAccount.length;i++){
                if(action.values.username===userAccount[i].username){
                    if(action.values.password === userAccount[i].password){
                        newState[i].isLogin = true;
                        return newState;
                    }
                }
            }
        
           
        
        default:
            return [...state];
    }
}



export default combineReducers({
    userReducers
})
