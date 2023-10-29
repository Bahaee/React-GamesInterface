import Message from "./Message";
import ListGroup from "../components/Listgroup";
let cities = ["Rabat", "Casablanca", "Tangier", "Agadir"];
function App() {
  return (
    <div>
      <ListGroup
        cities={cities}
        heading="Cities"
        onSelectItem={(city: string) => console.log(city)}
      />
    </div>
  );
}

export default App;
