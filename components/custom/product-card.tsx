import { Plus } from "lucide-react"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { Button } from "../ui/button"
interface ProductCardType {
    title: string,
    price: number,
    category: string,
    imageURL: string
}
export default function ProductCard({ title, price, category, imageURL }: ProductCardType) {

    return (
        <div className="p-2 border rounded-md">
            <img
                className="w-full h-56 object-cover rounded-md"
                src={`/products/${imageURL}`}
                alt="Product Image"
            />
            <h1 className="pt-2 font-semibold text-lg">{title}</h1>
            <p className="text-muted-foreground">{category}</p>
            <div className="flex justify-between">
                <p className="pt-2">&#8377; {price.toLocaleString()}</p>
                <TooltipProvider>
                    <Tooltip delayDuration={100}>
                        <TooltipTrigger asChild>
                            <Button size='icon' className="h-8 w-8">
                                <Plus className="w-5 h-5 text-white" />
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Add to Cart</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </div>
        </div>
    )
}