import { Link } from "@nextui-org/link";
import { Divider, Image } from "@nextui-org/react";
import MenuGrid from "@/components/menu/menu-grid";
import { getAllMeals } from '@/library/menudata';
import { MenuItemType } from "@/types/types";

// import menuImage from "@/assets/menu/pexels-bananamade-2762942.jpg";
const MenuPage: React.FC = async () => {
  const meals: MenuItemType[] = await getAllMeals();
  
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
            {meals.length === 0 && <p>Curently there are no meals to show.</p>}
            {meals.length > 0 &&
            <MenuGrid {...meals} />
            }
      </main>
      </>
    );
  }

  export default MenuPage;