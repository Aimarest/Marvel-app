import React , {useState} from 'react';

const InputColor = (props) => {
const [colorValue, setColorValue] = useState('black');

function handleChangeColor(ev){
    setColorValue(ev.target.value);
    props.handleChangeInput(ev);
}

    return (
        <div>
             <div className='inputFontColor'>
        <label className="inputFontColor__label" htmlFor='inputFontColor'>Cambia el color de fuente</label>
            <input id="inputFontColor" name='color' value={colorValue} onChange={handleChangeColor} type="color" className='inputFontColor__palette'></input>
        </div>
        </div>
    );
}

export default InputColor;
