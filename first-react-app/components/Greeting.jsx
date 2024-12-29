function Greeting(props) {
  return (
    <div>{props.name ? <p>Hello {props.name}</p> : <p>Hello World</p>}</div>
  );
}
export default Greeting;
