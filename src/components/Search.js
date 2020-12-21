import React,{useState} from "react";
import SearchIcon from '@material-ui/icons/Search';
import  '../App.css'

export const Search = (props) => {
    const [set,setSet] = useState(); 

    const inputData = (event) =>{
        setSet(event.target.value);
    }
    const setClick = (event) =>{
        props.serData(set);
        event.preventDefault();
    }

  return (
    <div className="overlay">
        <div className="overlay-content">
            <form >
            <input type="text" placeholder="what you like to search..." name="search" onChange={inputData} /> 
            <button onClick={setClick}><SearchIcon fontSize="large" color="action"/></button>
            </form>
        </div>
    </div>
  );
}

