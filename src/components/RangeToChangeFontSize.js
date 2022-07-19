import React from 'react';

const RangeToChangeFontSize = () => {
    return (
        <div className='inputFontSize'>
        <label className="inputFontSize__label" htmlFor='rangeFontSize'>Cambia el tamaño de fuente</label>
            <input id="rangeFontSize" data-sizing="px" name="fontSize" type="range" className='inputFontSize__range'></input>
        </div>
    );
}

export default RangeToChangeFontSize;
