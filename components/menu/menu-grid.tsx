import { MenuItemType } from "@/types/types";
import MenuItem from "./menu-item";

interface MenuGridProps {
    menus: MenuItemType[];
}

const MenuGrid: React.FC<MenuGridProps> = ({ menus }) => {
    /* converting the menu grid from object to array of objects */
    const menuItems = Object.values(menus);

    return (
        <section className="p-5 dark:bg-slate-900 dark:bg-opacity-10 border-1 border-zinc-700 rounded-md">
            <div className="grid grid-rows-3 grid-flow-col gap-3">
                {menuItems.map((menuitem) => (
                    <div key={menuitem.id}>
                        <MenuItem {...menuitem} slug={menuitem.slug || ''} />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default MenuGrid;