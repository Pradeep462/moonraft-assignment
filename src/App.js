
import { useEffect, useState } from 'react';
import './App.css';
import { data } from './data.js';
import Details from './components/Details.js';


function App() {

  //const [data, setData] = useState([]);


  // useEffect(() => {
  //   getData();
  // }, []);
  console.log(data);

  return (
    <div className="">

      {
        data && data.map((d, idex) => {
          return <div>
            <Details d={d} />
          </div>
        })
      }
    </div>
  );
}

export default App;
