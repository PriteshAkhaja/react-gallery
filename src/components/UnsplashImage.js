import React from 'react';
import styled from 'styled-components';
import  '../App.css'
import axios from 'axios';

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const UnsplashImage = ({ url, key }) => {
  
  const download = (e) => {
    // console.log(e.target.href);
    axios({
        url: url,
        method: "GET",
        responseType:'blob'
    })
      .then(response => {
          const url = window.URL.createObjectURL(new Blob([response.data]));
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", "image.jpg"); //or any other extension
          document.body.appendChild(link);
          link.click();
      });   
  }
  return (
    <>
      <div className="container" key={key}>
          <Img  src={url} alt="" />
          <div className="overlay1"></div>
          <div><button className="button" onClick={download}>Get it..!</button></div>
      </div>
    </>
  )
}
