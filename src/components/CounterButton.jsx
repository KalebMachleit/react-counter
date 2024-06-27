import './CounterButton.css'

const CounterButton = (props) => {

    return (
        <>
            <button id='countButton' onClick={props.func}>{props.text}</button>
        </>
    )
};

export default CounterButton;