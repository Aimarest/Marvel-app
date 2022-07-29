
import '../styles/App.css';
import React  , { useState, useEffect } from "react";
import getHeroes from '../services/HeroesApi';
import getSeries from '../services/SeriesApi';
import HeroesList from './HeroesList';
import SeriesList from './SeriesList';
import ls from '../services/ls';
import FilterName from './FilterNameHeroes';
import Switch from './Switch';
import RangeToChangeFontSize from "./RangeToChangeFontSize";
import InputColor from './InputColor';
function App() {
//Variables de estado:
const [heroesList, setHeroesList] = useState( ls.get("heroes", []));
const [errorEmptyFilterName, setErrorEmptyFilterName] = useState('');
const [errorNoHeroes, setErrorNoHeroes] = useState('');
const [theme, setTheme] = useState('light');
const [seriesList,setSeriesList] = useState(ls.get("series",[]));

//UseEffect para realizar el fetch de la lista de héroes al cargar la página:

  useEffect(() => {
    if (heroesList.length === 0) {
      getHeroes().then((data) => {
        setHeroesList(data);
        ls.set("heroes", data);
      })

    }
  }, []); 

//UseEffect para realizar el fetch de la lista de series al cargar la página:

useEffect(() => {
  if (seriesList.length === 0) {
    getSeries().then((data) => {
      setSeriesList(data);
      ls.set("series", data);
    })

  }
}, []); 


  //Función que cambia el tema de la app:

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }

// Función que filtra por nombre del héroe:

  function filterByName(props) {
    setErrorEmptyFilterName('');
    setErrorNoHeroes('');
    if (props.length !== 0) {
      const heroesFiltered = heroesList.filter(heroe => heroe.name.toLowerCase().includes(props.toLowerCase()));
      setHeroesList(heroesFiltered)
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
  setHeroesList(ls.get('heroes'))
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
    <div className='App' data-theme={theme}>
      <h1 className='title'>Marvel</h1>
      <Switch switchTheme={switchTheme} theme={theme} />
      <RangeToChangeFontSize handleChangeInput={handleChangeInput} />
      <InputColor handleChangeInput={handleChangeInput} />
      <section className='lists'>
      <h2 className='subtitle'> Heroes</h2>
      <FilterName filterByName={filterByName} resetError={resetError} />
      {errorEmptyFilterName}
      <HeroesList list={heroesList} />
      {errorNoHeroes}
      <h2 className='subtitle'> Series</h2>
      <SeriesList list={seriesList} />
      </section>
    </div>
  )
}
export default App;
