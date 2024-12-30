function SingleCat(props) {
  return (
    <div className="singleCat">
      <h1>{props.name}</h1>
      <h3>{props.latinName}</h3>
      <img src={props.img} alt={props.name}></img>
    </div>
  );
}
export default SingleCat;
