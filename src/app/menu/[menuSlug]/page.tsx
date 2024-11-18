import { getMeal } from "@/library/menudata";
import { Link, Image, Button } from "@nextui-org/react";
import NextImage from "next/image";
//import Image from "next/image";
import { notFound } from "next/navigation";
import { MenuItemType } from "@/types/types";
import { RiArrowGoBackFill } from "react-icons/ri";
import {ScrollShadow} from "@nextui-org/react";
import Scroll from "@/components/layout/scrolltrigger";
import defaultImage from "@/public/menu/default.jpg"


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

const MenuItemPage = async ({ params }: { params: MenuItemType }) => {

  const meal: MenuItemType = await getMeal(params?.menuSlug as string);

  if (!meal) {
    notFound();
  }
  meal.instructions = meal.instructions.replace(/\n/g, '<br />');
  const markup: any | null = { __html: meal.instructions };
  return (
    <>
    <Scroll>
      <header className="mb-8 mt-4">
        <h1>{meal.title}</h1>
      </header>
      <main className="grid grid-cols-2 gap-6">
        <div>
          <Image
            as={NextImage}
            alt={meal.title}
            width={400}
            height={400}
            radius='sm'
            src={meal.image}
            fallbackSrc={defaultImage.src}
            removeWrapper={true}

          />
        </div>
        <ScrollShadow className="w-[300px] h-[400px]">
        <div>
          <p>{meal.summary}</p>
          <p dangerouslySetInnerHTML={ markup }></p>
          <div className="border-t-4 border-cyan-800 my-6 min-h-1"></div>
          <p><strong>Calories:</strong> {meal.calories}<br />
          <strong>Servings:</strong> {meal.servings} <br />
          <strong>Author:</strong> {meal.creator} <br />
          <strong>Posted:</strong> {meal.date}
          </p>
        </div>
        </ScrollShadow>
      </main>
      <footer className="mt-6 grid place-items-end">
        <Link href="../menu/">
          <Button 
          
          color="secondary"
         
          >
            <RiArrowGoBackFill />
            Back to the Menu
          </Button>
        </Link>
      </footer>
      </Scroll>
    </>
  );
}
export default MenuItemPage;