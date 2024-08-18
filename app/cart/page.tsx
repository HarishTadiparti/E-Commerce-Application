'use client'
import CartItemCard from "@/components/custom/cart-item-card";
import CouponCodeInput from "@/components/custom/coupon-code-input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { CartInitialState, CartItemType, RootState } from "@/redux/cartTypes";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";



export default function CartPage() {
    const { cartItems } = useSelector((state: RootState) => state.cart)

    const [isCouponValid, setIsCouponValid] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(false)
    }, [])

    let price = 0
    cartItems.map((object: CartItemType) => {
        let strToPrice = parseInt(object.price)
        let strToQty = parseInt(object.quantity)
        price = (strToPrice * strToQty) + price
    })

    const handleCouponValid = (value: boolean) => {
        setIsCouponValid(value)
    }
    return (
        !isLoading && (<div className="pt-1 px-2 max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="col-span-2">
                    <h1 className="pb-3 text-xl font-semibold text-zinc-800">Bag</h1>
                    {
                        cartItems.length > 0 ? cartItems.map((object: CartItemType, idx: number) => (
                            <CartItemCard
                                key={idx}
                                id={object.id}
                                title={object.title}
                                category={object.category}
                                size={object.size}
                                quantity={object.quantity}
                                price={object.price}
                                imageURL={object.imageURL}
                            />

                        )) : <p className="text-muted-foreground text-center md:text-left">Cart is empty</p>
                    }
                </div>
                <div>
                    <h1 className="pb-3 text-xl font-semibold text-zinc-800">Summary</h1>
                    <CouponCodeInput handleCouponValid={handleCouponValid} />
                    <Separator />
                    <div className="pt-4 space-y-1">
                        <div className="pb-2 flex items-center justify-between">
                            <p>Subtotal</p>
                            <p>&#8377; {price.toLocaleString()}</p>
                        </div>
                        {
                            price > 0 && isCouponValid && <div className="pb-2 flex items-center justify-between text-blue-700">
                                <p>Discount</p>
                                <p>- &#8377; {((20 / 100) * price).toLocaleString()}</p>
                            </div>
                        }

                        <Separator />
                        <div className="py-2 flex items-center justify-between">
                            <p className="font-semibold">Total</p>
                            <p className="font-semibold">&#8377; {isCouponValid ? (price - ((20 / 100) * price)).toLocaleString() : price.toLocaleString()}</p>
                        </div>
                        <Button className="w-full bg-blue-700 hover:bg-blue-800">Checkout</Button>
                    </div>
                </div>
            </div>
        </div>)
    )
}