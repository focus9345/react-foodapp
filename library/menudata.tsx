import sql from 'better-sqlite3';

const db = sql('menu.db');

export function getAllMeals() {
    db.prepare('SELECT * FROM menu').
}