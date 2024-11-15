import { MenuItemType } from "@/types/types";
import MenuItem from "./menu-item";




const MenuGrid: React.FC<MenuItemType[]> = (props) => {
    /* converting the menu grid from object to array of objects */
    const menus = Object.values(props);



   
    return (
        <section className="p-5 dark:bg-slate-900 dark:bg-opacity-10 border-1 border-zinc-700 rounded-md">
            <div className="grid grid-rows-3 grid-flow-col gap-3">
                {menus.map((menuitem) => (
                     
                    <div key={menuitem.id}>
                        <MenuItem {...menuitem}/>
                    </div>
                ))}
            </div>
        </section>
    );
}
export default MenuGrid;