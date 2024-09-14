//Hasta las 19_06
//import React from "react";
//import { useEffect, useState } from "react";
import React from "react";
import { useDentistStates } from "../utils/Context";
//import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Card = ({ dentist }) => {
  const { state, dispatch } = useDentistStates();

  const addFav = () => {
    const isFavoriteAlready = state.favs.some(fav => fav.id === dentist.id);
    if (!isFavoriteAlready) {
      dispatch({ type: "ADD_FAV", payload: dentist });
    }
  };

  const removeFav = () => {
    dispatch({ type: "REMOVE_FAV", payload: dentist });
  };

  const isFavorite = state.favs.some(fav => fav.id === dentist.id);

  return (
    <div className="card">
      <img src="/images/doctor.jpg" alt="Dentista" />
      <Link to={`/detail/${dentist.id}`}>
        <h2>{dentist.name}</h2>
      </Link>
      <p>{dentist.username}</p>
      {!isFavorite ? (
        <button onClick={addFav}>Add favs</button>
      ) : (
        <button onClick={removeFav}>Remove Favs</button>
      )}
    </div>
  );
};

export default Card;