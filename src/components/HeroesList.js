import React from 'react';
import HeroeItem from './HeroeItem';

const HeroesList = (props) => {
    const heroes = props.list.map((heroe)=>{
     
        return (
            <li key={heroe.id} className="heroe__card">
              <HeroeItem heroe={heroe} />  
            </li>
        ) 
    })  
    return (
        
            <section className="heroes">
                <ul className='heroe__list'>
                    {heroes}
                </ul>

            </section>
       
    );
}

export default HeroesList;
