import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data.js";

function App() {
  // creating a var to store result of the mapped data and returning a component with the props.
  const cards = data.map((card) => {
    return (
      <Card
        key={card.id}
        // use {...card} to spread and call the title as props.title
        card={card}
      /> 
    );
  });
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <section className="card-list">{cards}</section>
    </div>
  );
}

export default App;
