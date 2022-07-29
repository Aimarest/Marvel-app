import React from 'react';

const HeroeItem = (props) => {
 function errorDescription (){
    if(props.heroe.description === ""){
 return <p>Sorry, character description not available </p>
     }
 }   
    
    return (    
   
        <div className="heroe__card">
    
            <h2 className='heroe__title'>{props.heroe.name}</h2>
            <h3 className='heroe__description'> {props.heroe.description} {errorDescription()}</h3>
           
            <img className='heroe__image' src={props.heroe.image} alt={`Imagen de ${props.heroe.name}`} title={`Imagen de ${props.heroe.name}`} />
        </div>
    );
}

export default HeroeItem;
