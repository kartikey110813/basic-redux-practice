import React from "react";
import './App.css'
import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber } from "./actions";

const App = () => {

  const myState = useSelector((state) => state.changeTheNumber);
 const dispatch = useDispatch();
  return (
    <>
      <div className="container">
        <h1> Increment/Decrement Counter</h1>
        <h4>using React and Redux</h4>

        <div className="quantity">
          <a className="quantity__minus" title="Decrement" onClick={() => dispatch(decNumber())}>
            <span>-</span>
          </a>
          <input
            type="text"
            name="quantity"
            className="quantity__input"
            value={myState}
          />
          <a className="quantity__plus" title="Increment" onClick={() => dispatch(incNumber())}>  
            <span>+</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default App;
