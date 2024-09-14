import React from 'react';
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import '../Styles/detail.css'; 

import { useDentistStates } from "../utils/Context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const { state } = useDentistStates();
  const [detail, setDetail] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => setDetail(res.data));
  }, [id]);

  return (
    <div className={`card ${state.theme}`}>
      <h1>Detail Dentist id</h1>
      <img className="avatar" src="/images/doctor.jpg" alt="Foto Doctor" />
      <p>Name: {detail.name}</p>
      <p>Email: {detail.email}</p>
      <p>Phone: {detail.phone}</p>
      <p>Website: {detail.website}</p>
    </div>
  );
};
export default Detail