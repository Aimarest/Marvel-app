import React, { useState } from 'react';

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
            <label className="filterName_label">

                <input onChange={handleInput} value={inputName} className="filterName__input" type="text" placeholder="Write a name" aria-label="Label" />

            </label>

            <button onClick={handleSearch} className=" filterName__button ">
                Filter
            </button>

        </div>
    )


}

export default FilterName;
