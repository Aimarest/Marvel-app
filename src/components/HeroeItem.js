import React from 'react';

const HeroeItem = (props) => {
    
    return (
        <div>
    
            <h2>{props.heroe.name}</h2>
            <img src={props.heroe.image} alt={`Imagen de ${props.heroe.name}`} title={`Imagen de ${props.heroe.name}`} />
        </div>
    );
}

export default HeroeItem;
