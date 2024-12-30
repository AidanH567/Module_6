import AddCatForm from "./AddCatForm";
import SingleCat from "./SingleCat";
import { useState } from "react";
AddCatForm;

const cats = [
  {
    key: 0,
    name: "Cheetah",
    latinName: "Acinonyx jubatus",
    img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FTabby_cat&psig=AOvVaw1LIVUZT-d1J4K5eQiBrJL6&ust=1735604107491000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCLirp6SbzooDFQAAAAAdAAAAABAE",
  },
  {
    key: 1,
    name: "Cougar",
    latinName: "Puma concolor",
    img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FTabby_cat&psig=AOvVaw1LIVUZT-d1J4K5eQiBrJL6&ust=1735604107491000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCLirp6SbzooDFQAAAAAdAAAAABAE",
  },
  {
    key: 2,
    name: "Jaguar",
    latinName: "Panthera onca",
    img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FTabby_cat&psig=AOvVaw1LIVUZT-d1J4K5eQiBrJL6&ust=1735604107491000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCLirp6SbzooDFQAAAAAdAAAAABAE",
  },
  {
    key: 3,
    name: "Leopard",
    latinName: "Panthera pardus",
    img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FTabby_cat&psig=AOvVaw1LIVUZT-d1J4K5eQiBrJL6&ust=1735604107491000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCLirp6SbzooDFQAAAAAdAAAAABAE",
  },
  {
    key: 4,
    name: "Lion",
    latinName: "Panthera leo",
    img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FTabby_cat&psig=AOvVaw1LIVUZT-d1J4K5eQiBrJL6&ust=1735604107491000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCLirp6SbzooDFQAAAAAdAAAAABAE",
  },
  {
    key: 5,
    name: "Snow leopard",
    latinName: "Panthera uncia",
    img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FTabby_cat&psig=AOvVaw1LIVUZT-d1J4K5eQiBrJL6&ust=1735604107491000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCLirp6SbzooDFQAAAAAdAAAAABAE",
  },
  {
    key: 6,
    name: "Tiger",
    latinName: "Panthera tigris",
    img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FTabby_cat&psig=AOvVaw1LIVUZT-d1J4K5eQiBrJL6&ust=1735604107491000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCLirp6SbzooDFQAAAAAdAAAAABAE",
  },
];

function BigCats() {
  const [currentCats, setCurrentCats] = useState(cats);

  const catItems = currentCats.map((cat) => (
    <SingleCat
      key={cat.key}
      name={cat.name}
      latinName={cat.latinName}
      img={cat.img}
    />
  ));
  const handleReverseCats = () => {
    // first clone the original, so we don’t mutate it
    let newCats = [...currentCats];
    newCats.reverse(); // 2. modify the clone
    setCurrentCats(newCats); // 3. set updated clone in state
  };

  const handleSortCats = () => {
    // first clone the original, so we don’t mutate it
    let sortedCats = [...currentCats];
    sortedCats.sort((a, b) => a.name.localeCompare(b.name)); // 2. modify the clone
    setCurrentCats(sortedCats); // 3. set updated clone in state
  };
  const handleAddCat = (newCat) => {
    newCat.id = currentCats.length + 1; // unreliable but succinct
    setCurrentCats([...currentCats, newCat]);
  };
  return (
    <div className="catsList">
      <h1>Here is the Cats Array</h1>
      {catItems}
      <button onClick={handleReverseCats}>Reverse List</button>
      <button onClick={handleSortCats}>Sort Alphabetically</button>
      <AddCatForm onAddCat={handleAddCat} />
    </div>
  );
}
export default BigCats;
