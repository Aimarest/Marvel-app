import React from 'react';

const SerieItem = (props) => {

    
    return (
        <div className="card ">
    
            <h2 className='serie_title'>{props.serie.title}</h2>
            <img className='image' src={props.serie.image} alt={`Imagen de ${props.serie.title}`} title={`Imagen de ${props.serie.title}`} />
        </div>
    );
}

export default SerieItem;