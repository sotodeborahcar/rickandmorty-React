import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [personajes, setPersonajes] = useState([]);
  const [value, setValue] = useState("");
  const [busqueda, setBusqueda] = useState(0);
  const [gender, setGender] = useState("");
  // como el valor inicial que me pasa es un objeto pongo ({})

  // const [valorDelFetch, setValorDelFetch] = useState(
  //   "https://rickandmortyapi.com/api/character"
  // );

  // efectos: manera de controlar la informacion en mi componente
  // la accion dentro del efecto se ejecuta solo en determinados momentos

  useEffect(() => {
    // console.log("Si estoy adentro del efecto", valorDelFetch);

    fetch(
      `https://rickandmortyapi.com/api/character/?name=${value}&gender=${gender}`
    )
      .then((res) => res.json())
      .then((data) => {
        setPersonajes(data.results);
      });
    // array de dependencias:
    // si esta vacio, el efecto solo se ejecuta en el primer render
    // si tiene alguna variable, el efecto se ejecuta toda vez que esa variable cambie
    // si no existe (MALA IDEA), el efecto se ejecuta cada vez que se hace un nuevo render.
  }, [busqueda, value, gender]); // como el array esta vacio este efecto se va a renderizar 1 sola vez

  // const handleClick = () => {
  //   setValorDelFetch("hola coco");
  // };

  // console.log("No estoy adentro del efecto", valorDelFetch);

  // EFECTOS
  // una manera de ejecutar acciones solo en momentos especificos

  // useEffect => es un hook, y la puede usar como una funcion similar a "useState"

  const handleChangeSearch = (e) => {
    setValue(e.target.value);
  };
  const handleClickSearch = () => {
    setBusqueda(busqueda + 1);
  };
  const handleChangeGenero = (e) => {
    setGender(e.target.value);
  };

  console.log(gender);
  return (
    <div className="App">
      <input onChange={handleChangeSearch} value={value} />
      <label for="genero">Genero</label>
      <input
        onChange={handleChangeGenero}
        type="radio"
        value="female"
        name="genero"
      />
      Female
      <input
        onChange={handleChangeGenero}
        type="radio"
        value="male"
        name="genero"
      />
      Male
      <input
        onChange={handleChangeGenero}
        type="radio"
        value="unknown"
        name="genero"
      />
      Unknown
      <input
        onChange={handleChangeGenero}
        type="radio"
        value="genderless"
        name="genero"
      />
      Genderless
      <button onClick={handleClickSearch}>Buscar</button>
      {personajes.map((personaje) => (
        <div>
          <h2>{personaje.name}</h2>
          <img src={personaje.image} />
        </div>
      ))}
      {/* <button onClick={handleClick}>
        Cambiar valor de la variable valorDelFetch
      </button> */}
    </div>
  );
}

export default App;
