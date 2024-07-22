// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   return (
//     <h1>Hello Word</h1>
//   )
// }

// export default App


// ES6

import "./assets/style.css"

const App = () => {
  const sum = (a, b) => {
    return (a + b)
  };

  const url_img = "./Bamboo-Salt-Himalaya-Pinksalt-Brightening-Floral-100g-1.jpg"

  const handleAlert = () => {
    alert("Xin cha0")
  };

  return (
    <>
      <h1 className="description">Hi You</h1>
      <h2>How are you</h2>
      <img src={url_img} alt="" />
      <h1>{sum(1, 2)}</h1>
      <button onClick={handleAlert}> Alert</button>
      <button onClick={() => alert("123")}> Alert2</button>
    </>
  );
};

export default App