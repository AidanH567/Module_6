function Address(props) {
  return (
    <div className="City componentBox">
      <strong>{props.address}</strong> is in {props.state}, {props.country}
    </div>
  );
}

export default Address;
