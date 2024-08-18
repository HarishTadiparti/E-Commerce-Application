'use client'
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import { ShoppingCart } from "lucide-react"
import Link from "next/link"
import { useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { RootState } from "@/redux/cartTypes"
export default function Navbar() {
    const { cartItems } = useSelector((state: RootState) => state.cart)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(false)
    }, [])

    return (
        !isLoading && (<div className="max-w-5xl mx-auto px-2 py-4 flex items-center justify-between">
            <Link href='/' className="font-semibold text-xl">Shopping<span className="text-blue-700">Cart</span></Link>
            <div className="flex items-center gap-4">
                <Button variant='secondary' size='icon' className="relative" asChild>
                    <Link href='/cart'>
                        <ShoppingCart className="w-5 h-5 text-zinc-800" />
                        <div className="-bottom-1 -right-1 absolute bg-zinc-800 h-5 w-5 flex items-center justify-center rounded-full text-white text-xs">{cartItems.length}</div>
                    </Link>
                </Button>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant='ghost' className='relative h-8 w-8 rounded-full'>
                            <Avatar>
                                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                <AvatarFallback>TU</AvatarFallback>
                            </Avatar>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className='w-32' align='end' forceMount>
                        <DropdownMenuGroup>
                            <DropdownMenuItem>
                                Sign In
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                Sign Up
                            </DropdownMenuItem>
                        </DropdownMenuGroup>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>)
    )
}