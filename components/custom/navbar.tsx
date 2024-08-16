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
export default function Navbar() {

    return (
        <div className="max-w-5xl mx-auto py-4 flex items-center justify-between">
            <h1 className="font-semibold text-xl">Shopping<span className="text-blue-700">Cart</span></h1>
            <div className="flex items-center gap-4">
                <Button variant='secondary' size='icon' className="relative">
                    <ShoppingCart className="w-5 h-5 text-zinc-800" />
                    <div className="-bottom-1 -right-1 absolute bg-zinc-800 h-5 w-5 flex items-center justify-center rounded-full text-white text-xs">0</div>
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
                    <DropdownMenuContent className='w-56' align='end' forceMount>
                        <DropdownMenuLabel className='font-normal'>
                            <div className='flex flex-col space-y-1'>
                                <p className='text-sm font-medium leading-none'>test</p>
                                <p className='text-xs leading-none text-muted-foreground'>
                                    test@gmail.com
                                </p>
                            </div>
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuGroup>
                            <DropdownMenuItem>
                                Profile
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                Settings
                            </DropdownMenuItem>
                        </DropdownMenuGroup>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                            Log out
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    )
}