import React ,  { useState} from 'react';

function FilterName(props) {
 
const [inputName, setInputName] = useState('');
    function handleInput(ev) {
        setInputName(ev.target.value);
        props.resetError();
    }
    function handleSearch() {   
    props.filterByName(inputName);
    }

    return (
        <div className='filterName'>
<label className="mdc-text-field mdc-text-field--filled mdc-text-field--no-label">
  <span className="mdc-text-field__ripple"></span>
  <input onChange={handleInput} value = {inputName} className="mdc-text-field__input" type="text" placeholder="Escribe el nombre" aria-label="Label"/>
  <span className="mdc-line-ripple"></span>
</label>
            <div className="mdc-touch-target-wrapper">
                <button onClick={handleSearch} className="mdc-button mdc-button--raised">
                    <span className="mdc-button__label">Filtrar</span>
                </button>
            </div>
        </div>
    )


}

export default FilterName;
