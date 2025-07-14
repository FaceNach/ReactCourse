import {useState} from "react";

const apiKey = '30sY6PVOWTph7CprqSM4vEmuUAwMJX2E'

export const GifExpertApp = () => {

    const[categories, setCategories] = useState(['One Punch', 'Dragon Ball'])

    console.log(categories)

    return (
        <>
            <h1>Hello from GifExpertApp</h1>


            <ol>
                {categories.map(category =>{
                    return <li key={category}>{category}</li>
                } )}


            </ol>
        </>


    );
}