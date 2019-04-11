import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import axios from 'axios';
import { composeWithDevTools } from 'redux-devtools-extension';

const initialState = {
    products: [],
    managers: []
};

//action types
const SET_DATA = 'SET_DATA';

//action creators
export const setData = (products, managers) => ({
    type: SET_DATA,
    products,
    managers
})

// THUNK
export const getProducts = () => {
    return (async dispatch => {
        const productsResponse = await axios.get('/api/products');
        const products = productsResponse.data;
        const managersResponse = await axios.get('/api/users');
        const managers = managersResponse.data;
        const action = setData(products, managers)
        dispatch(action)
    })
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DATA: return { ...state, products: action.products, managers: action.managers }
        default: return state
    }
}

export default createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
    )
);

