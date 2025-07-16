import {useState} from "react";
import {AddCategory} from "./AddCategory.jsx";
import {GifGrid} from "./GifGrid.jsx";

const apiKey = '30sY6PVOWTph7CprqSM4vEmuUAwMJX2E'

export const GifExpertApp = () => {

    const[categories, setCategories] = useState(['One Punch'])

    const onAddCategory = (newCategory) => {

        if (categories.includes(newCategory) ) return;

        setCategories([ newCategory ,...categories,] );
    }

    return (
        <>
            <h1>Hello from GifExpertApp</h1>

            <AddCategory
                onNewCategory = {(value) => onAddCategory(value)}
            />

            {categories.map((category) => (
                <GifGrid
                    key = {category}
                    category = {category}
                />
                ))
            }

        </>
    );
}