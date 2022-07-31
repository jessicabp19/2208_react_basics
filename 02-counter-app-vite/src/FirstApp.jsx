//import { Fragment} from 'react'
import PropTypes from 'prop-types';

//Siempre debemos regresar un nodo padre

//Async func no se renderiza directamente por que devuelve un obj(promesa)
const getResult = () => { 
    return "Hola! Mundo!"
} 
const obj = {
    messaje: 'Hola mundo',
    title: 'Titulo'
};

export const FirstApp = ( {title, subtitle} ) => { 
    
    //console.log(props);

    return (
    // <Fragment>
    //     <h1>Jessica</h1>
    //     <p>Soy un parrafo</p>    
    // </Fragment>


    <>
        <h1>{title}</h1>
        <h2>{subtitle+1}</h2>
        {/* <code>{JSON.stringify(obj)}</code> */}
        {/* <p>{getResult()}</p>     */}
    </>
  )
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.number.isRequired
}

FirstApp.defaultProps = {
    name: 'Jessica',
    title: 'No hay titulo',
    subtitle: 'No hay subtitulo'
}