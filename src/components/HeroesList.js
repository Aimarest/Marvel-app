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
        <div>
            <section className="heroes">
                <ul className='heroe__list'>
                    {heroes}
                </ul>

            </section>
        </div>
    );
}

export default HeroesList;
