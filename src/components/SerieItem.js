import React from 'react';

const SerieItem = (props) => {

    
    return (
        <div className="serie__card ">
    
            <h2 className='serie__title'>{props.serie.title}</h2>
            <img className='serie__image' src={props.serie.image} alt={`Imagen de ${props.serie.title}`} title={`Imagen de ${props.serie.title}`} />
        </div>
    );
}

export default SerieItem;