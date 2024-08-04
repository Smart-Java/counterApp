export default function CounterButton({ currentCounter, setCounter, forIncrement }) {
    function increment() {
        setCounter(currentCounter + 1);
    }
    function decrement() {
        setCounter(currentCounter - 1);
    }
    return (
        <button onClick={forIncrement ? increment : decrement} className="counter-btn">{forIncrement ? '+' : '-'}</button>
    );
}