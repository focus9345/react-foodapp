'use client'
// import { useActionState } from "react";
import { useFormState } from 'react-dom';
import { RiArrowGoBackFill } from "react-icons/ri";
import { Link, Input, Textarea, Button } from "@nextui-org/react";
import MenuImagePicker from "@/components/menu/menu-imagepicker";
import { shareMeal } from "@/library/actions";
import MenuFormSubmit from "@/components/menu/menu-formsubmit";

interface MealFormState {
  message: string;
}

const initialState: MealFormState = {
  message: ''
};

// Modify the shareMeal action to match expected types
async function shareMealAction(prevState: MealFormState, formData: FormData): Promise<MealFormState> {
  // Existing shareMeal logic
  const result = await shareMeal(prevState, formData);
  return {
    message: result?.message || 'Success!'
  };
}

const MenuSharePage: React.FC = () => {
  const [state, formAction] = useFormState<MealFormState, FormData>(shareMealAction, initialState);
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
        <form action={formAction}>
          {state.message &&
            <div className="bg-red-800 text-center rounded-md my-3 p-2"><p>{state.message}</p></div>}
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-2 gap-4">
              <Input
                isRequired
                type="text"
                label="Full Name"
                name="fullname" />
            </div>
            <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-2 gap-4">
              <Input isRequired type="email" label="Email" name="email" />
            </div>

          </div>
          <div className="grid md:grid-cols-2 md:gap-6">

            <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-2 gap-4">
              <Input isRequired type="number" label="Calories" name="calories" step="50" />
            </div>
            <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-2 gap-4">
              <Input isRequired type="number" label="Servings" name="servings" />
            </div>
          </div>
          <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-2 gap-4">
            <Input isRequired type="text" label="Title" name="title" />
          </div>
          <MenuImagePicker name="image" />
          <Textarea
            label="Recipe Summary"
            placeholder="Enter your description"
            className="w-full mb-6 md:mb-2"
            name="summary"
          />
          <Textarea
            label="Recipe Instructions"
            placeholder="Enter your description"
            className="w-full mb-6 md:mb-2"
            name="instructions"
          />
          <MenuFormSubmit />
        </form>
      </main>
    </>
  );
}
export default MenuSharePage;