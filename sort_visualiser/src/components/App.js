// import logo from '../logo.svg';
import {useState, useEffect} from "react";
import './css/App.css';
import Navigation from './Navigation'
import Visualiser from './Visualiser'


function App() {






  const [make_random, setmake_random] = useState(true)
  const [arraySize, setArraySize] = useState(10)
  const [randomArray, setRandomArray] = useState([]);
 
  useEffect(() => {
    generateRandomArray();
  }, [])


  function generateRandomArray(){
    function getRandomInt(max){
      return Math.floor(Math.random()*Math.floor(max))+5;
    }
  
    const array = Array(arraySize).fill(0).map(()=>getRandomInt(arraySize*3));
    setRandomArray(array);
  }

  const sleep = (time) => {
    return new Promise((resolve) => setTimeout(resolve, time))
  }
  async function sort(){
    let arr = randomArray.slice();
    for(let i=0; i<arr.length; i++){
        for(let j=i; j<arr.length; j++){
            if(arr[i]>arr[j]){
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
                setRandomArray(arr);
                await sleep(1000);
            }
        }
    }
    console.log(randomArray);
}

  return (
    <div>
      <Navigation onGenerateRandomArray={generateRandomArray} />
      <Visualiser array={randomArray}  sort={sort}/>
    </div>
  );
}

export default App;
