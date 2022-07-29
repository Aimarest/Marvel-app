import React from 'react';

const HeroeItem = (props) => {
 function errorDescription (){
    if(props.heroe.description === ""){
 return <p>Sorry, character description is not available </p>
     }
 }   
    
    return (    
   
        <div className="card">
    
            <h2 className='heroe_title'>{props.heroe.name}</h2>
            <h3 className='description'> {props.heroe.description} {errorDescription()}</h3>
           
            <img className='image' src={props.heroe.image} alt={`Imagen de ${props.heroe.name}`} title={`Imagen de ${props.heroe.name}`} />
        </div>
    );
}

export default HeroeItem;
