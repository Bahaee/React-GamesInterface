import ListGroup from "../components/Listgroup";
import Alert from "../components/Alert";
import Button from "../components/Button";
import { useState } from "react";

let cities = ["Rabat", "Casa", "Grenoble", "Paris"];

function App() {
  const [alertVisibility, setAlertVisibility] = useState(false);
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "Riyad",
      lastName: "Pouzani",
    },
  });

  const handleClick = () => {
    setGame({ ...game, player: { ...game.player, name: " Bahae" } });
    console.log(game);
  };

  return (
    <div>
      <ListGroup
        cities={cities}
        heading="Cities"
        onSelectItem={(city: string) => console.log(city)}
      />
      {alertVisibility && (
        <Alert onClose={() => setAlertVisibility(false)}>
          Hehe ha Alerte khdama
        </Alert>
      )}
      <Button
        onClick={() => {
          setAlertVisibility(true);
        }}
      >
        My Button
      </Button>
      <Button onClick={handleClick}>Exercice button</Button>
    </div>
  );
}

export default App;
