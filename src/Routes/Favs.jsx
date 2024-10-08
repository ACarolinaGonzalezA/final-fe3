import React from 'react';
import Card from "../Components/Card";
import { useDentistStates }  from "../utils/Context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const { state, dispatch } = useDentistStates();

  const removeFav = (dentist) => {
    dispatch({ type: "REMOVE_FAV", payload: dentist });
  };

  if (state.favs.length === 0) {
    return <h2>Aún no tienes odontólogos en tus favoritos</h2>;
  }

  return (
    <div className={`favs-container ${state.theme}`}>
      <h1>Favorite Dentists</h1>
      <div className="card-grid">
        {state.favs.map((dentist, index) => (
          <Card key={index} dentist={dentist}>
            <button onClick={() => removeFav(dentist)}>Remover de Favoritos</button>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Favs;
