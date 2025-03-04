// create your App component here

import React, { useState , useEffect } from "react";
 
function App () {
   const [ image, setImage] = useState ([]);
   const [ isLoaded, setIsLoaded] = useState(false)

   useEffect ( () => {
       fetch ("https://dog.ceo/api/breeds/image/random")
       .then(response => response.json())
       .then(data => {
           console.log(data)
           setImage(data.message)
           setIsLoaded(true)
       })
   }, []);

   if (!isLoaded) {
    return <h2>Loading...</h2>
   }

   return (
       
      <>  
        <p>Oscar</p>
        <img src={image} alt = "A Random Dog"/>
      </>
   )
  }
 
export default App;
