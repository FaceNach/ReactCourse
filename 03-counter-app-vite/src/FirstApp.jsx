import Proptypes from 'prop-types';
// export const OtherWayFirstApp = () => 
//     {
//         return (
//             <h1>The other way First app!</h1>
//         )
//     }

// export const Firstapp = () => <div>First App!</div>
const newMessage =
{
    message : 'Hola Mundo',
    title : 'Fernando'
}
//always outside the functional component. Memory improvements.
const newPerson = () => 
    {
        return (
            {
                nombre : 'Ignacio',
                apellido : 'Gunst',
                edad : '30',
                ciudad : 'Parana'
            }
        )
    };

    // const newPerson = 
    // {
    //     nombre : 'Ignacio',
    //             apellido : 'Gunst',
    //             edad : '30',
    //             ciudad : 'Parana'
    // }

export const FirstApp = ({title, subtitle, name}) => 
    {
        return (
            <>
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
            <h1>{name}</h1>
            {/* <code>{JSON.stringify(newPerson())}</code> way to express and object */}
             <h1>Hola Mundo</h1>
            {/* <code>{ JSON.stringify(newMessage)}</code> */}
            <p>Soy un subtitulo</p>
            </>
        )
    }

    FirstApp.propTypes = {
        title : Proptypes.string.isRequired,
        subtitle: Proptypes.string.isRequired
    }

    FirstApp.defaultProps = 
    {
        name : 'Fernando Herrera',
        subtitle: 'No hay subtitulo',
        title : 'No hay titulo'
    }