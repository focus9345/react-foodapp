import { getMeal } from "@/library/menudata";
import { Link, Image, Button } from "@nextui-org/react";
//import Image from "next/image";
import { notFound } from "next/navigation";
import { MenuItemType } from "@/types/types";

/*
export async function generateMetadata({ params }) {
  const meal: <MenuItemType> = getMeal(params.mealSlug);
  console.log(meal.title);
  if (!meal) {
    notFound();
  }
  return {
    title: meal.title,
    description: meal.summary,
  };
}; */

const MenuItemPage: React.FC = async ({ params }) => {
  const meal: MenuItemType = await getMeal(params?.mealSlug as string);
  if (!meal) {
    notFound();
  }
  meal.instructions = meal.instructions.replace(/\n/g, '<br>');
  const markup = {__html: meal.instructions};
    return (
      <>
      <header>
        <h1>{ meal.title }</h1>
      </header>
      <main className="grid grid-cols-2 gap-6">
        <div>
        <Image
                        alt={meal.title}
                        width="300"
                        radius="sm"
                        src={meal.image.src}
                        fallbackSrc="https://placehold.co/300x500"
                        
                    />
        </div>
        <div>
          <p>{ meal.summary }</p>
          <p>{ meal.instructions }</p>
          <p>Calories: { meal.calories }<br />
          Servings: { meal.servings } <br />
          Author: { meal.creator } <br />
          Posted: { meal.date }
          </p>
        </div>
      </main>
      <footer>
        <Link href="../">
           <Button color="secondary">
            Back to the Menu
          </Button>
          </Link>
      </footer>
      </>
    );
  }
  export default MenuItemPage;