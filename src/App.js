import React, {useState, useEffect} from "react";
import Header from "./components/Header";
import Income from "./components/Income";
import Expenselist from "./components/Expenselist";


function App() {
  const [income, setIncome] = useState([]);
  const [totalIncome, setTotalIncome] = useState(0);

  useEffect(() =>{
    let temp = 0;
    for( let i=0; i< income.length;i++){
      temp += parseInt(income[i].price);
    }

    setTotalIncome(temp);
  }, [income])
  return (
    <div className="App">
     <Header totalIncome={totalIncome} />
     <Income income={income} setIncome={setIncome}/>
     <Expenselist income={income} setIncome={setIncome}/>
    </div>
  );
}

export default App;
