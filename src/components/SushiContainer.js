import React, {useState} from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({sushi, changeMoneyAndPlates, moneyLeft}) {
  const [firstSlice, setFirstSlice] = useState(0)
  const [secondSlice, setSecondSlice] = useState(4)
  const sushiChunk = sushi.slice(firstSlice, secondSlice)

  function changeDisplay() {
    setFirstSlice((firstSlice) => firstSlice + 4);
    setSecondSlice((secondSlice) => secondSlice + 4);
  }

  return (
    <div className="belt">
      {sushiChunk.map((roll) => <Sushi moneyLeft={moneyLeft} changeMoneyAndPlates={changeMoneyAndPlates} key={roll.id} name={roll.name} img={roll.img_url} price={roll.price} />)}
      <MoreButton changeDisplay={changeDisplay} />
    </div>
  );
}

export default SushiContainer;
