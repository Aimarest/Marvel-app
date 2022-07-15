import React ,  { useState} from 'react';

const FilterName = (props) => {
 
    const [filterName, setFilterName] = useState('');
    function handleInput(ev) {
        setFilterName(ev.target.value)
    }
    function handleSearch() {
        debugger;
        props.filterByName(filterName);
    }

    return (
        <div>
            <label className="mdc-text-field mdc-text-field--filled">
                <span className="mdc-text-field__ripple"></span>
                <span className="mdc-floating-label" id="my-label-id">Filtra por nombre</span>
                <input onChange={handleInput} className="mdc-text-field__input" value={filterName} type="text" aria-labelledby="my-label-id" />
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
