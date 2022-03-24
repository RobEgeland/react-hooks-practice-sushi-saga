import React, {useState} from "react";

function Sushi({name, img, price, changeMoneyAndPlates, moneyLeft}) {
  const [eaten, setEaten] = useState(false)

  function handleClick() {
    if(price > moneyLeft) {
      return null
    }else {
      changeMoneyAndPlates(price, name);
      setEaten(true)
    }
  }

  return (
    <div className="sushi">
      <div className="plate" onClick={handleClick}>
        {eaten ? null : (
          <img
            src={img}
            alt={name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
