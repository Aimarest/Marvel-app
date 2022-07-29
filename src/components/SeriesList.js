import React from 'react';
import SerieItem from './SerieItem';

const SeriesList = (props) => {
    const series = props.list.map((serie)=>{
     
        return (
            <li key={serie.id} className="serie__card">
              <SerieItem serie={serie} />  
            </li>
        ) 
    })  
    return (
        <div>
            <section className="series">
                <ul className='series__list'>
                    {series}
                </ul>

            </section>
        </div>
    );
}

export default SeriesList;
