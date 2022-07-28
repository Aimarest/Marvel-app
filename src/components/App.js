
import '../styles/App.css';
import React  , { useState, useEffect } from "react";
import getHeroes from '../services/HeroesApi';
import HeroesList from './HeroesList';
import ls from '../services/ls';
import FilterName from './FilterName';
import Switch from './Switch';
import RangeToChangeFontSize from "./RangeToChangeFontSize";
import InputColor from './InputColor';
function App() {
//Variables de estado:
const [list, setList] = useState( ls.get("heroes", []));
const [errorEmptyFilterName, setErrorEmptyFilterName] = useState('');
const [errorNoHeroes, setErrorNoHeroes] = useState('');
const [theme, setTheme] = useState('light');

//UseEffect para realizar el fetch al cargar la página:

  useEffect(() => {
    if (list.length === 0) {
      getHeroes().then((data) => {
        setList(data);
        ls.set("heroes", data);
      })

    }
  }, []); 



  //Función que cambia el tema de la app:

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }

// Función que filtra por nombre:

  function filterByName(props) {
    setErrorEmptyFilterName('');
    setErrorNoHeroes('');
    if (props.length !== 0) {
      const heroesFiltered = list.filter(heroe => heroe.name.toLowerCase().includes(props.toLowerCase()));
      setList(heroesFiltered)
      if (heroesFiltered.length === 0) {
        setErrorNoHeroes('No hay héroes con ese nombre en nuestra lista')
      }

    } else {
      return setErrorEmptyFilterName('Debes ingresar un nombre para filtrar la lista de héroes')
    }

}

//Función que limpia los errores cuando cambia el valor del input de nombre:

function resetError(){
  setErrorEmptyFilterName('');
  setErrorNoHeroes('');
  setList(ls.get('heroes'))
}


//Función que actualiza el valor de las variables al cambiar el de los inputs:

function handleChangeInput(ev) {

 const px = ev.target.dataset.sizing || '';
 const element = ev.target;
 const property = ev.target.name;
  const value = ev.target.value;
element.style.getPropertyValue(`--${property}`)
 document.documentElement.style.setProperty(`--${property}`, ` ${value}${px}`);
}

  return (
    <div className='App' data-theme = {theme}>
    <h1 className='title'>Marvel</h1>
    <Switch switchTheme={switchTheme} theme={theme}/>
    <RangeToChangeFontSize handleChangeInput={handleChangeInput}/>
    <InputColor handleChangeInput={handleChangeInput}/>
    <FilterName  filterByName = {filterByName} resetError={resetError}/>
    {errorEmptyFilterName}
  <HeroesList list = {list}/>
  {errorNoHeroes}
  </div>
  )
}
export default App;
