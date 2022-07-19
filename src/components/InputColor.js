import React from 'react';

const InputColor = () => {
    return (
        <div>
             <div className='inputFontColor'>
        <label className="inputFontColor__label" htmlFor='rangeFontColor'>Cambia el color de fuente</label>
            <input id="rangeFontColor" type="color" className='inputFontColor__palette'></input>
        </div>
        </div>
    );
}

export default InputColor;
