import './App.css';
import Header from './Header';
import weblogo from "./Images/preview.jpg"
function App() {


  let displayData = () => {

    alert("Welcome to My Website")
  }

  let addData = (a,b) => {

   // console.log(a+b)
   alert(a+b)
  }

  return (


    <div className='App'>
      <Header />

      <button className='bg-[yellow] p[10px] mr-4' onClick={()=>addData(20,15)}>ParameterizeEvent</button>
      <button className='bg-[red] p[10px]' onClick={displayData}>Save</button>
      <img width={100} src={weblogo} />
      <h1 className='text-[60px] text-black-900 font-bold'>Hello</h1>


    </div>

  );

}

export default App;
