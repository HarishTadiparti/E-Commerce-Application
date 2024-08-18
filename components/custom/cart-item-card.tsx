'use client'
import { Heart, Trash2 } from "lucide-react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { useDispatch } from "react-redux";
import { removeCartItem, updateCartItem } from "@/redux/cartSlice";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { useToast } from "../ui/use-toast";


interface CartItemCardType {
    id: number
    title: string,
    category: string,
    size: string,
    quantity: string,
    price: string,
    imageURL: string
}
export default function CartItemCard({ id, title, category, size, quantity, price, imageURL }: CartItemCardType) {
    const dispatch = useDispatch()
    const [isLoading, setIsLoading] = useState(true)
    const { toast } = useToast()

    useEffect(() => {
        setIsLoading(false)
    }, [])


    const handleQuantityValueChange = (value: string) => {
        dispatch(updateCartItem({ id: id, quantity: value }))
        toast({
            variant: 'success',
            title: "Your cart has been successfully updated"
        })
    }
    const handleDeleteCartItem = () => {
        dispatch(removeCartItem({ id: id }))
        toast({
            variant: 'success',
            title: "The item was successfully removed from your cart"
        })
    }
    return (
        !isLoading && (<div className="pb-4 grid grid-cols-3">
            <img
                className="w-full h-52 object-cover"
                src={`/products/${imageURL}`}
                alt="Product Image"
            />
            <div className="pl-2 col-span-2 flex flex-col justify-between">
                <div>
                    <h1 className="font-semibold text-lg">{title}</h1>
                    <p className="text-muted-foreground">{category}</p>
                    <div className="pt-2 flex items-center gap-2">
                        <div>
                            <Select defaultValue={size} >
                                <SelectTrigger className="w-20">
                                    <SelectValue placeholder="Size" />
                                </SelectTrigger>
                                <SelectContent >
                                    <SelectItem value='6'>6 UK</SelectItem>
                                    <SelectItem value='7'>7 UK</SelectItem>
                                    <SelectItem value='8'>8 UK</SelectItem>
                                    <SelectItem value='9'>9 UK</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div>
                            <Select defaultValue={quantity} onValueChange={handleQuantityValueChange}>
                                <SelectTrigger className="w-24">
                                    <SelectValue placeholder="Quantity" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="1">1</SelectItem>
                                    <SelectItem value="2">2</SelectItem>
                                    <SelectItem value="3">3</SelectItem>
                                    <SelectItem value="4">4</SelectItem>

                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    <p className="pt-2">&#8377; {price.toLocaleString()}</p>
                </div>
                <div className="pb-1 flex items-center">
                    <Button size='icon' variant='ghost'>
                        <Heart className="w-5 h-5" />
                    </Button>
                    <Button size='icon' variant='ghost' onClick={handleDeleteCartItem}>
                        <Trash2 className="w-5 h-6" />
                    </Button>

                </div>
            </div>
        </div>)
    )
}