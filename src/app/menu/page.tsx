import { Suspense } from 'react';
import { Link } from "@nextui-org/link";
import { Divider } from "@nextui-org/react";
import MenuGrid from "@/components/menu/menu-grid";
import { getAllMeals } from '@/library/menudata';
import { MenuItemType } from "@/types/types";
import LoadingSkeleton from '@/components/layout/loadskeleton';

async function Meals() {
  const meals: MenuItemType[] = await getAllMeals(); 
  if (meals.length === 0) {
    return <p>Curently there are no meals to show.</p>
  } else if (meals.length > 0) {
    return <MenuGrid {...meals} />
  } else {
    return <p>Meals are unable to show at this time.</p>
  }
}

const MenuPage: React.FC = () => {
  
    return (
      <>
      <header>
        <h1>Delicious meals, created{' '}
        <span className="">by you</span>
        </h1>
        <p>Choose your favorate recipe and cook it yourself. It is easy any one can do it.</p>
        <p className="">
          <Link href="menu/share" color="secondary">Share your favorate Recipe</Link>
        </p>
      </header>
      <Divider />
      <main>
            <h1>Menu</h1>
            <Suspense fallback={<LoadingSkeleton label="Loading Meals..." />} >
              <Meals />
            </Suspense>
      </main>
      </>
    );
  }

  export default MenuPage;