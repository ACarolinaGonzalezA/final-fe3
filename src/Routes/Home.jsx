
import React from 'react';
import Card from '../Components/Card';

import { useDentistStates } from "../utils/Context";
import '../Styles/home.css'; 

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const { state } = useDentistStates();

  return (
    <main className={state.theme}>
      <h1>Home</h1>
      <div className='card-grid'>
        {state.list.map(dentist => (
          <Card key={dentist.id} dentist={dentist} />
        ))}
      </div>
    </main>
  );
};

export default Home
