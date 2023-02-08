import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data.js";
import Joke from "./components/Joke";
import joke from "./components/JokesData"

function App() {
  // creating a var to store result of the mapped data and returning a component with the props.
 const cards = data.map((cards) => {
  return (
    <Card key={cards.id} {...cards}/>
  )
 })

 const jokess = joke.map((jokes) => {
    return <Joke 
      key={jokes.setup}
      {...jokes}
    />
 })
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <section className="card-list">{cards}</section>
      {/* <section className="card-list">{jokess}</section> */}
    </div>
  );
}

export default App;
