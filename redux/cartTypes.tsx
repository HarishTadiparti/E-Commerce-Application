
export interface RootState {
    cart: {
        cartItems: CartItemType[]
    }
}

export interface CartItemType {
    id: number,
    title: string,
    category: string,
    size: string,
    quantity: string,
    price: string,
    imageURL: string
}

export interface CartInitialState {
    cartItems: CartItemType[]
}