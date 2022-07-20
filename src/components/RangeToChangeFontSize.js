import React , {useState} from 'react';

const RangeToChangeFontSize = (props) => {
    const [size, setSize] = useState('14');
    function handleChangeSize(ev){
        setSize(ev.target.value)
        props.handleChangeInput(ev);

    }
    return (
        <div className='inputFontSize'>
        <label className="inputFontSize__label" htmlFor='rangeFontSize'>Cambia el tamaño de fuente</label>
            <input id="rangeFontSize" data-sizing="px" value={size} name="fontSize" type="range" className='inputFontSize__range' onChange={handleChangeSize}></input>
        </div>
    );
}

export default RangeToChangeFontSize;
