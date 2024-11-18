import sql from 'better-sqlite3';
import slugify from 'slugify';
import xss from 'xss';
import fs from 'node:fs';
import { MenuItemType } from "@/types/types";

const db = sql('menu.db');

// Unique ID string
// Used to prevent images from being overwritten
function uniqueName(length: number) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charlength = characters.length;
    let counter = 0;
    while(counter < length) {
        result += characters.charAt(Math.floor(Math.random() * charlength));
        counter ++;
    }
    return result;
}

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

export async function saveMeal(meal): Promise<any> {
    meal.slug = slugify(meal.title, {lower: true});
    meal.instructions = xss(meal.instructions);
    const imageid = uniqueName(4);
    const extention = meal.image.name.split('.').pop();
    const filename = `${meal.slug}-${imageid}.${extention}`;
    console.log(filename);

    const stream = fs.createWriteStream(`public/menu/${filename}`);
    const bufferedImage = await meal.image.arrayBuffer();
    stream.write(Buffer.from(bufferedImage), (error) => {
        if (error) {
            throw new Error('Saving Image Failed!');
        }
    });
    meal.image = `/menu/${filename}`;
// better sqlite will extract values and still protect from sql attacks
    db.prepare(`
        INSERT INTO meals
            (title, summary, instructions, creator, creator_email, image, slug, date, calories, servings)
        VALUES (
            @title,
            @summary,
            @instructions,
            @creator,
            @creator_email,
            @image,
            @slug,
            @date,
            @calories,
            @servings  
        )
    `).run(meal);
};