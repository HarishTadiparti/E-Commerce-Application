import { createSlice } from "@reduxjs/toolkit";
import { CartInitialState, CartItemType } from "./cartTypes";
import Cookies from 'js-cookie'


const initialState: CartInitialState = {
    cartItems: Cookies.get('cart-item') !== undefined ? JSON.parse(Cookies.get('cart-item') || '') : []
}
export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addCartItem: (state, action) => {
            if (state.cartItems.length > 0) {
                const isItem = state.cartItems.filter((object) => object.id === action.payload.id)
                if (isItem.length > 0) {
                    state.cartItems = state.cartItems.map((object) => {
                        if (object.id === action.payload.id) {
                            return { ...object, quantity: (parseInt(object.quantity) + 1).toString() }
                        }
                        else {
                            return { ...object }
                        }
                    })
                }
                else {
                    state.cartItems.push({ ...action.payload, size: '7', quantity: '1' })
                }
            }
            else {
                state.cartItems.push({ ...action.payload, size: '7', quantity: '1' })
            }
            Cookies.set('cart-item', JSON.stringify(state.cartItems))
        },
        updateCartItem: (state, action) => {
            state.cartItems = state.cartItems.map((object: CartItemType) => {
                if (action.payload.id === object.id) {
                    return { ...object, quantity: action.payload.quantity }
                }
                else {
                    return { ...object }
                }
            })
            Cookies.set('cart-item', JSON.stringify(state.cartItems))
        },
        removeCartItem: (state, action) => {
            state.cartItems = state.cartItems.filter((object: CartItemType) => action.payload.id !== object.id)
            Cookies.set('cart-item', JSON.stringify(state.cartItems))
        }
    }
})

export const { addCartItem, updateCartItem, removeCartItem } = cartSlice.actions
export default cartSlice.reducer