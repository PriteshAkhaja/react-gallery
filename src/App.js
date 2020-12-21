import React, { useState, useEffect } from 'react';

import { Heading } from './components/Heading';
import { Search } from './components/Search';
import { UnsplashImage } from './components/UnsplashImage';
import { Loader } from './components/Loader';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


// Style
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: sans-serif;
  }
`;

const WrapperImages = styled.section`
  max-width: 90rem;
  margin: 4rem auto;
  display: grid;
  grid-gap: 1em;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-auto-rows: 400px;
`;

function App() {
  const [sera, setSera] = useState([]);
  const [ser, setSer] = useState([]);
  const [ser1, setSer1] = useState([]);

  console.log(sera);
  useEffect(() => {
    serData();
  }, [])

  const serData = (data) =>{
    
    const apiRoot1 = "https://api.unsplash.com";
    const accessKey1 = "pzT1c3QIwZRM9CUYkPjS2BpAPLnLaL8MVC4KTYgykNw";


    axios
      .get(`${apiRoot1}/search/photos/?client_id=${accessKey1}&query=${"a new "+data}`)
      .then(res2 => {
        setSera(res2.data.results);
      }) 

      axios
      .get(`${apiRoot1}/search/photos/?client_id=${accessKey1}&query=${"best "+data}`)
      .then(res2 => {
        setSer(res2.data.results);
      }) 

      axios
      .get(`${apiRoot1}/search/photos/?client_id=${accessKey1}&query=${"the old "+data}`)
      .then(res3 => {
        setSer1(res3.data.results);
      }) 
    
  }

  const [images, setImage] = useState([]);
  useEffect(() => {
    fetchImages();
  }, [])

  const fetchImages = (count = 20) => {
    const apiRoot = "https://api.unsplash.com";
    const accessKey = "pzT1c3QIwZRM9CUYkPjS2BpAPLnLaL8MVC4KTYgykNw";

    axios
      .get(`${apiRoot}/photos/random?client_id=${accessKey}&count=${count}`)
      .then(res => {
        setImage([...images, ...res.data]);
      })
  }

  return (
    <div>

      <Heading />
      <div className="div">
        <Search serData={serData} />
      </div>
      <GlobalStyle />
      <InfiniteScroll
        dataLength={images.length}
        next={fetchImages}
        hasMore={true}
        loader={<Loader />}
      >

          <WrapperImages>
              {sera.map((se,i) => ( 
                i !== 9 ? <UnsplashImage url={se.urls.small} key={se.id} /> : null
              ))}
            </WrapperImages>
            <WrapperImages>
              {ser.map((ser,i) => ( 
                i !== 9 ? <UnsplashImage url={ser.urls.small} key={ser.id} /> : null
              ))}
            </WrapperImages>
            <WrapperImages>
              {ser1.map((ser1,i) => ( 
                i !== 9 ? <UnsplashImage url={ser1.urls.small} key={ser1.id} /> : null
              ))}
            </WrapperImages>
            <WrapperImages>
              {images.map(image => (
                <UnsplashImage url={image.urls.small} key={image.id} />
              ))}
            </WrapperImages> 
           
        
      </InfiniteScroll>
      
      </div>
  );
}

export default App;
