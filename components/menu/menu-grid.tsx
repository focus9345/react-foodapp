
import { MenuItemType } from "@/types/types";
import { MenuItem } from "./menu-item";
import { Suspense } from 'react';
import Loading from '@/src/app/loading';

const MenuGrid: React.FC<MenuItemType[]> = (props) => {
    return (
        <section className="p-5 dark:bg-slate-800 border-1 border-zinc-500">
            <div className="grid grid-rows-4 grid-flow-col gap-4">
            <Suspense fallback={<Loading />} >
                {props.map((menuitem) => (
                    <div key={menuitem.id}>
                        <MenuItem {...menuitem}/>
                    </div>
                ))}
                </Suspense>
            </div>
        </section>
    );
}
export default MenuGrid;