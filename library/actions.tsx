'use server';
import { redirect } from "next/navigation";
import { saveMeal } from "@/library/menudata";
import { revalidatePath } from "next/cache";

const dateNow = new Date().toDateString();
function isInvalidText(text: any) {
    console.log(typeof(text) + ' : ' + text);
    if( typeof text === 'string') {
        return !text || text.length === 0 || text === null || text.trim().length === 0;
    } else {
        return console.warn(text);
    }
    
}

export async function shareMeal(prevState, formData) {
    const meal = {
        title: formData.get('title'),
        image: formData.get('image'),
        summary: formData.get('summary'),
        instructions: formData.get('instructions'),
        creator: formData.get('fullname'),
        creator_email: formData.get('email'),
        date: dateNow,
        calories: formData.get('calories'),
        servings: formData.get('servings')
    }

    if (
        isInvalidText(meal.title) || 
        isInvalidText(meal.summary) || 
        isInvalidText(meal.calories) || 
        isInvalidText(meal.servings) || 
        isInvalidText(meal.instructions) || 
        isInvalidText(meal.image) || 
        isInvalidText(meal.creator) || 
        isInvalidText(meal.creator_email) ||
        !meal.creator_email.includes('@') ||
        !meal.image ||
        meal.image.size === 0
        ) {
            //throw new Error ('Invalid Input');
            return { message: 'Invalid input!' };     
        }

    //console.log(meal);
    await saveMeal(meal);
    revalidatePath('/menu', 'layout');
    redirect('/menu');
}