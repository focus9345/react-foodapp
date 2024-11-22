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
        return true; // Return true for non-string values
    }
    
}

export async function shareMeal(prevState: any, formData: FormData) {
    const meal = {
        title: formData.get('title') as string,
        image: formData.get('image') as string,
        summary: formData.get('summary') as string,
        instructions: formData.get('instructions') as string,
        creator: formData.get('fullname') as string,
        creator_email: formData.get('email') as string,
        date: dateNow,
        calories: parseInt(formData.get('calories') as string) as number,
        servings: parseInt(formData.get('servings') as string) as number
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
        (typeof meal.creator_email === 'string' && !meal.creator_email.includes('@')) || // Ensure creator_email is a string before checking
        !meal.image
        ) {
            //throw new Error ('Invalid Input');
            return { message: 'Invalid input!' };     
        }

    //validatain passes now save the meal
    await saveMeal(meal);
    revalidatePath('/menu', 'layout');
    redirect('/menu');
}