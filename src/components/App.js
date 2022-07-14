
import '../styles/App.css';
import { useState, useEffect } from "react";
import getHeroes from '../services/HeroesApi';
import HeroesList from './HeroesList';
import ls from '../services/ls';
function App() {
//Variables de estado:
const [list, setList] = useState( ls.get("heroes", []));

//UseEffect para realizar el fetch al cargar la página:

  useEffect(() => {
    if (list.length === 0) {
      getHeroes().then((data) => {
        setList(data);
        ls.set("heroes", data);
      })

    }
  }, []); 

  return (
    <div className='App'>
    <h1>Marvel</h1>
  <HeroesList list = {list}/>
  </div>
  )
}
export default App;
