import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { useToast } from "../ui/use-toast";

export default function CouponCodeInput({ handleCouponValid }: { handleCouponValid: Function }) {

    const [value, setValue] = useState('')
    const [isError, setIsError] = useState(false)
    const { toast } = useToast()

    const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsError(false)
        setValue(e.target.value)
    }
    const handleSubmit = () => {
        if (value !== 'GET20') {
            handleCouponValid(false)
            return setIsError(true)
        }
        toast({
            variant: 'success',
            title: 'Coupon applied! Your discount has been added to the total'
        })
        handleCouponValid(true)
    }
    return (
        <div className="pb-3">
            <Label>Coupon Code</Label>
            <div className="flex gap-1">
                <Input placeholder="Enter Coupon Code" value={value} onChange={handleValueChange} />
                <Button onClick={handleSubmit}>Apply Coupon</Button>
            </div>
            {
                isError && <p className="pt-1 text-xs text-destructive">Invalid Coupon</p>
            }
            <p className="pt-1 text-xs text-muted-foreground">Use code 'GET20' to get 20% OFF</p>
        </div>
    )
}