
import '../styles/App.scss';
import { useState, useEffect } from "react";
import getHeroes from '../services/HeroesApi';
import HeroesList from './HeroesList';
import ls from '../services/ls';
import FilterName from './FilterName';
function App() {
//Variables de estado:
const [list, setList] = useState( ls.get("heroes", []));
const [filterName, setFilterName] = useState('');

//UseEffect para realizar el fetch al cargar la página:

  useEffect(() => {
    if (list.length === 0) {
      getHeroes().then((data) => {
        setList(data);
        ls.set("heroes", data);
        console.log(data)
      })

    }
  }, []); 

// Función que filtra por nombre:
function filterByName(props){

}
  return (
    <div className='App'>
    <h1>Marvel</h1>
    <FilterName filterName={filterName} filterByName={filterByName}/>
  <HeroesList list = {list}/>
  </div>
  )
}
export default App;
