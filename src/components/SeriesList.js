import React  from 'react';
import SerieItem from './SerieItem';

const SeriesList = (props) => {
    const series = props.list.filter(serie => {
        return !serie.image.includes('image_not_available')
    }).map((serie)=>{
       
        return ( 
            <li key={serie.id} className={`serie__card`}>
              <SerieItem serie={serie} />  
            </li>
        ) 
    })

    console.log(series)
    return (
        
            <section className="series">
                <ul className='series__list'>
                    {series}
                </ul>

            </section>
    
    );
}

export default SeriesList;
