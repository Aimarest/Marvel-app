import React from 'react';
import HeroeItem from './HeroeItem';

const HeroesList = (props) => {
    const heroes = props.list.filter(heroe =>{
        return !heroe.image.includes('image_not_available')
    })
    .map((heroe)=>{
     
        return (
            <li key={heroe.id} className="card">
              <HeroeItem heroe={heroe} />  
            </li>
        ) 
    })  
    return (
        
            <section className="heroes">
                <ul className='list'>
                    {heroes}
                </ul>

            </section>
       
    );
}

export default HeroesList;
