'use client'
import { useFormStatus } from "react-dom";
import { Button } from "@nextui-org/button";

const MenuFormSubmit: React.FC = () => {
    const { pending } = useFormStatus();
    return (
      <>
        <Button 
        disabled={pending}
        type="submit" 
        color="primary">
            {pending ? 'Submitting...' : 'Share Meal'}
            </Button>
      </>
    )
}
export default MenuFormSubmit;