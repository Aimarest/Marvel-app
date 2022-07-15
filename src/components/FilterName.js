import React from 'react';

const FilterName = () => {
   return (  <div>
            <label className="mdc-text-field mdc-text-field--filled">
                <span className="mdc-text-field__ripple"></span>
                <span className="mdc-floating-label" id="my-label-id">Filtra por nombre</span>
                <input className="mdc-text-field__input" type="text" aria-labelledby="my-label-id"/>
                    <span className="mdc-line-ripple"></span>
            </label>
        </div>)
      
 
}

export default FilterName;
