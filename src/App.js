import {  useState } from 'react';
import './App.css';
import Header from './Header';
import weblogo from "./Images/preview.jpg"
function App() {


  let template = '';

  let [count, setCount] = useState(1);

  let [pshow, setPshow] = useState(true);

  if (pshow) {
   
    template = (
      <>
        <button className="bg-[red] p-4" onClick={() => setPshow(!pshow)}>Hide</button>
        <p>Welcome to my React App</p>
      </>
    );
   

  }

  else {
    template = <button className='bg-[red] p-4' onClick={() => setPshow(!pshow)}>Show</button>

  }

  let displayData = () => {

    alert("Welcome to My Website")
  }

  let addData = (a, b) => {

    setCount(count + 1);
    console.log(a + b)
 
  }

  return (

    <div className='App'>

 <div>
 {template}
 </div>    

      <Header />
      {count}
      <button className='bg-[yellow] p[10px] mr-4' onClick={() => addData(20, 15)}>ParameterizeEvent</button>
      <button className='bg-[red] p[10px]' onClick={displayData}>Save</button>
      <img width={100} src={weblogo} />
      <h1 className='text-[60px] text-black-900 font-bold'>Hello</h1>


    </div>

  );

}

export default App;
