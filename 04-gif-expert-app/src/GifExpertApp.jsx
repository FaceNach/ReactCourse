import { useState } from "react"
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () =>
{
    const [categories, setCategories] = useState(['Dragon Ball', 'One Punch']);
    
    const onAddCategory = (newCategory) =>
        {
            if(categories.includes(newCategory)) return;
            //console.log(newCategory);
            setCategories([newCategory, ...categories]);
            // setCategories(cat => [...cat, 'Valorant']);
        };

    return (
        <>
        <h1>GifExpert</h1>
        < AddCategory 
            //setCategories={setCategories}
            onNewCategory = {event => onAddCategory(event) }
         />
        {
        categories.map( (category) => (
            <GifGrid key ={category} category={category}/>
        ))
        }

        </>
    )
}