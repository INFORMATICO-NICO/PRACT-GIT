import {useState} from 'react';
import PropTypes from "prop-types";

export const Counter = ({ value }) => {

    const [ counter, setCounter] = useState( value );

    const handleAdd = () =>{
        //setCounter(counter+1);
        setCounter((c)=>c+1);
    }
    
    const handleSubtract = ()=> setCounter((c)=>c-1);
    const handReset = () => setCounter(value);    


    
  return (
    <>
      <h1>CounterApp</h1>
      <h2> { counter } </h2>
      <button onClick={ handleAdd }>+1 </button>
      <button onClick={ handleSubtract }>-1</button>
      <button onClick={ handReset }>reset</button>
    </>
  );
};

Counter.propTypes = {// se valida el value
  value: PropTypes.number.isRequired,
};
