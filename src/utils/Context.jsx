
import axios from "axios";
import { createContext, useContext, useEffect, useReducer} from "react";
import { reducer } from "../reducers/reducer";

const dentistFavs = JSON.parse(localStorage.getItem("favs")) || [];

export const DentistStates  = createContext();

export const initialState = {
   list: [],
   favs: dentistFavs,
   theme: "light"
}



export const ContextProvider = ({ children }) => {
   
   const [state, dispatch] = useReducer(reducer, initialState); 
   
   const url = "https://jsonplaceholder.typicode.com/users";

   useEffect(() => {
       axios(url).then((res) => {
          console.log(res.data);
          dispatch ({type: "GET_CHARS", payload: res.data})
       });
   }, []);
  
   useEffect(() => {
    localStorage.setItem("favs", JSON.stringify(state.favs));
  }, [state.favs]);

  return (
    <DentistStates.Provider  value={{ state, dispatch }}>
      {children}
    </DentistStates.Provider>
  );
};

export const useDentistStates = () => {
  return useContext(DentistStates);
};

