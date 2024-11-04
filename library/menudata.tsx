import sql from 'better-sqlite3';
import { MenuItemType } from "@/types/types";
const db = sql('menu.db');

export async function getAllMeals(): Promise<any[]> {
    await new Promise((resolve) => setTimeout(resolve, 2500));
    return db.prepare('SELECT * FROM meals').all();
}