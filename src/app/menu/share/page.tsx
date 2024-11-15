
import { RiArrowGoBackFill } from "react-icons/ri";
import { Link, Input, Textarea, Button } from "@nextui-org/react";
import MenuImagePicker from "@/components/menu/menu-imagepicker";

const MenuSharePage: React.FC = () => {

  return (
    <>
      <header className="mb-8 md:mb-4">
        <div className="grid grid-cols-2 gap-4">
          <div><h1>Share Your Meal Recipe</h1></div>
          <div className="place-self-end">
            <Link href="menu/">
          <Button
            color="secondary"
          >
            <RiArrowGoBackFill />
            Back to the Menu
          </Button>
        </Link></div>
        </div>
      </header>
      <main>
        <form>
          <div className="grid md:grid-cols-2 md:gap-6">
          <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-2 gap-4">
            <Input 
            isRequired
            type="text" 
            label="Full Name" />
          </div>
          <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-2 gap-4">
            <Input isRequired type="email" label="Email" />
          </div>

          </div>
          <div className="grid md:grid-cols-2 md:gap-6">

          <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-2 gap-4">
            <Input isRequired type="number" label="Calories Total" step="50" />
          </div>
          <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-2 gap-4">
            <Input isRequired type="number" label="Servings" />
          </div>
          </div>
          <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-2 gap-4">
            <Input isRequired type="email" label="Title" />
          </div>
          

          <MenuImagePicker name="image" />
          
          <Textarea 
      label="Recipe Summary"
      placeholder="Enter your description"
      className="w-full mb-6 md:mb-2"
    />

          <Textarea 
      label="Recipe Instructions"
      placeholder="Enter your description"
      className="w-full mb-6 md:mb-2"
    />

    <Button type="submit" color="primary">Share Meal</Button>

        </form>
      </main>
    </>
  );
}

export default MenuSharePage;