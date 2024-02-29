import { useState } from 'react'; 
import PropTypes from 'prop-types';

export const CounterApp = ({ value }) =>{

    console.log('render');
    
    const [ counter, setCounter ] = useState( value );//hook

    const handleAdd = ( ) => {
        // console.log(event)
        // setCounter( ( c ) => c+1 );
        setCounter ( counter + 1);
    }

    const handleRest = () =>{
        // setCounter( ( c ) => c-1 );
        setCounter ( counter - 1);
    }
    const Reset = () =>{
        setCounter( value );
    }

    return (
        <>
            <h1>CounterApp</h1>
            <h2> { counter } </h2>

            <button onClick={ handleAdd }> +1 </button>
            <button onClick={ handleRest }> -1 </button>
            <button onClick={ Reset }> Reset </button>
        </>
    )
}
CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}