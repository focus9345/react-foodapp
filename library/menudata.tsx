import sql from 'better-sqlite3';

const db = sql('menu.db');

export async function getAllMeals(): Promise<any[]> {
    /* adds loading time to check the loading function in pages that call the database */
    await new Promise((resolve) => setTimeout(resolve, 2500));
    return db.prepare('SELECT * FROM meals').all();
}

export async function getMeal(slug: string): Promise<any> {
    /* adds loading time to check the loading function in pages that call the database */
    await new Promise((resolve) => setTimeout(resolve, 2500));
    return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug as string);
}