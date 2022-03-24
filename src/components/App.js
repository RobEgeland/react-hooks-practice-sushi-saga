import React, {useEffect, useState} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushi, setSushi] = useState([])
  const [moneyLeft, setMoneyLeft] = useState(100)
  const [plates, setPlates] = useState([])

  function changeMoneyAndPlates(price, name) {
    setMoneyLeft(moneyLeft - price);
    const newPlatesArr = [...plates, name]
    setPlates(newPlatesArr)
  
  }


  useEffect(() => {
    fetch(API)
    .then(res => res.json())
    .then(sushi => setSushi(sushi))
  },[])

  return (
    <div className="app">
    <SushiContainer moneyLeft={moneyLeft} changeMoneyAndPlates={changeMoneyAndPlates} sushi={sushi} />
      <Table plates={plates} moneyLeft={moneyLeft} />
    </div>
  );
}

export default App;
