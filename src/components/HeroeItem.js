import React from 'react';

const HeroeItem = (props) => {
    
    return (
        <div>
    
            <h2 className='heroe__title'>{props.heroe.name}</h2>
            <p className='heroe__description'>{props.heroe.description}</p>
            <img className='heroe__image' src={props.heroe.image} alt={`Imagen de ${props.heroe.name}`} title={`Imagen de ${props.heroe.name}`} />
        </div>
    );
}

export default HeroeItem;
