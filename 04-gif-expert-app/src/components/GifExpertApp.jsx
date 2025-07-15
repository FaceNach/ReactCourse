import {useState} from "react";
import {AddCategory} from "./AddCategory.jsx";

const apiKey = '30sY6PVOWTph7CprqSM4vEmuUAwMJX2E'

export const GifExpertApp = () => {

    const[categories, setCategories] = useState(['One Punch', 'Dragon Ball'])

    const onAddCategory = () => {
        //setCategories(cat => [...cat,"Testing"]); another way to add
        setCategories([ "Testing",...categories,] );
    }

    console.log(categories)

    return (
        <>
            <h1>Hello from GifExpertApp</h1>

            <AddCategory setCategories = {setCategories} />


            <ol>
                {categories.map(category =>{
                    return <li key={category}>{category}</li>
                } )}


            </ol>
        </>


    );
}