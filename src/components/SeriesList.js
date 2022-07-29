import React  from 'react';
import SerieItem from './SerieItem';

const SeriesList = (props) => {
    const series = props.list.filter(serie => {
        return !serie.image.includes('image_not_available')
    }).map((serie)=>{
       
        return ( 
            <li key={serie.id} className={`card`}>
              <SerieItem serie={serie} />  
            </li>
        ) 
    })

    return (
        
            <section className="series">
                <ul className='list'>
                    {series}
                </ul>

            </section>
    
    );
}

export default SeriesList;
