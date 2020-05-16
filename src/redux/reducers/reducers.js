import {
    USER_REGISTER,
    ADD_PRODUCT,
    ADD_COUNT,
    DOWN_COUNT,
    CLEAR_CERT,
    DELETE_PRODUCT
} from '../actions/action_type'

import { combineReducers } from 'redux';

const userAccount=[
    {user_id:'000',username:'admin',password:'admin',email:'admin@abc.com'},
    {user_id:'001',username:'a',password:'a',email:'a@abc.com'}
];

const userReducers = (state = userAccount, action)=>{
    switch(action.type){
        case USER_REGISTER:
            
            return [...state, {
                user_id:'00'+userAccount.length,
                username:action.values.username,
                password:action.values.password,
                email:action.values.email
            }]
        default:
            return state;
    }
}

const shopCert = []
const shopCertReducers=(state=shopCert,action)=>{
    switch(action.type){
        case ADD_PRODUCT:
        {
            let add_product = JSON.parse(JSON.stringify(state));
            
            add_product= [...add_product,{
                product:action.data.selectedName,
                price:action.data.selectedPrice,
                description:action.data.selectedDescription,
                count:1
            }]
            return add_product;
            
        }
        case ADD_COUNT:
        {
            let newProduct = JSON.parse(JSON.stringify(state));
            newProduct.map((item)=>{
                if(item.product===action.data){
                    item.count++;
                }
            })
            return  newProduct;
        }
        case DOWN_COUNT:
        {
            let newProduct = JSON.parse(JSON.stringify(state));
            newProduct.map((item)=>{
                if(item.product===action.data){
                    if(item.count>1){
                        item.count--;
                    }
                }
            })
            return newProduct;
        }
        case DELETE_PRODUCT:
        {
            let newProduct = JSON.parse(JSON.stringify(state));
            newProduct = newProduct.filter(product=>product.product!==action.data)
            return newProduct;
        }
            
        case CLEAR_CERT:
            return [];
        default:
            return state;
    }
}


export default combineReducers({
    userReducers,
    shopCertReducers
})
