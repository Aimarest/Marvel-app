import React from 'react';

const HeroeItem = (props) => {
 function errorDescription (){
    if(props.heroe.description === ""){
 return <p>'Descripción del personaje no disponible' </p>
     }
 }   
    
  
    return (    
   
        <div className="heroe__card">
    
            <h2 className='heroe__title'>{props.heroe.name}</h2>
            <p className='heroe__description'> {props.heroe.description} {errorDescription()}</p>
           
            <img className='heroe__image' src={props.heroe.image} alt={`Imagen de ${props.heroe.name}`} title={`Imagen de ${props.heroe.name}`} />
        </div>
    );
}

export default HeroeItem;
