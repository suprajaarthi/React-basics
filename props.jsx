function Button(props) {
  const handleClick = () => props.onClickFunction(props.increment);
	return (
      	<button onClick={handleClick}>
      +{props.increment}
    </button>
  );
}

function Display(props) {
	return (
  	<div>{props.message}</div>
  );
}

function App() {
	const [counter, setCounter] = useState(0);
  const incrementCounter = (increment) => setCounter(counter+increment);
	return (
    <div>
      <Button onClickFunction={incrementCounter} increment={1} />
      <Button onClickFunction={incrementCounter} increment={5} />
      <Button onClickFunction={incrementCounter} increment={10} />
      <Button onClickFunction={incrementCounter} increment={100} />
      <Display message={counter}/>
    </div>  
  );
}

ReactDOM.render(
  <App />, 
  document.getElementById('mountNode'),
);

// *** The React 18 way:
// root.render(
//   <App />,
// );
