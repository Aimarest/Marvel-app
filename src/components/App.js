
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
import FilterSeriesName from './FilterSeriesName';
function App() {
//Variables de estado:
const [heroesList, setHeroesList] = useState( ls.get("heroes", []));
const [errorEmptyFilterName, setErrorEmptyFilterName] = useState('');
const [errorNoHeroes, setErrorNoHeroes] = useState('');
const [theme, setTheme] = useState('light');
const [seriesList,setSeriesList] = useState(ls.get("series",[]));
const [errorSeriesName,setErrorSeriesName] = useState('');
const [errorEmptySeriesName, setErrorEmptySeriesName] = useState('');
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
        setErrorNoHeroes('There are no heroes with that name on our list')
      }

    } else {
      return setErrorEmptyFilterName('You must enter a name to filter the list of heroes')
    }

}

//Función que filtra la lista de series por nombre:
function filterSeriesByName(props) {
  setErrorSeriesName('');
  setErrorEmptySeriesName('');
  if (props.length !== 0) {
    const seriesFiltered = seriesList.filter(serie => serie.title.toLowerCase().includes(props.toLowerCase()));
    setSeriesList(seriesFiltered)
    if (seriesFiltered.length === 0) {
      setErrorSeriesName('There are no series with that name on our list')
    }

  } else {
    return setErrorEmptySeriesName('You must enter a name to filter the list of series')
  }

}


//Función que limpia los errores cuando cambia el valor del input de nombre:

function resetError(){
  setErrorEmptyFilterName('');
  setErrorNoHeroes('');
  setHeroesList(ls.get('heroes'))
}

//Función que limpia los errores cuando cambia el valor del input de filtrado de series:
function resetErrorSeries(){
  setErrorEmptySeriesName('');
  setErrorSeriesName('');
  setSeriesList(ls.get('series'))
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
      <p className='error'>{errorEmptyFilterName}</p> 
      <p className='error'>{errorNoHeroes}</p> 
      <HeroesList list={heroesList} />
    
      <h2 className='subtitle'> Series</h2>
      <FilterSeriesName filterSeriesByName={filterSeriesByName} resetErrorSeries={resetErrorSeries}/>
      <p className='error'>{errorSeriesName}</p>
      <p className='error'>{errorEmptySeriesName}</p>
      <SeriesList list={seriesList} />
     
      </section>
    </div>
  )
}
export default App;
