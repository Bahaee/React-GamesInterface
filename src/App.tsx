import ListGroup from "../components/Listgroup";
import Alert from "../components/Alert";
import Button from "../components/Button";
import { useState } from "react";

let cities = ["Rabat", "Casa", "Grenoble", "Paris"];

function App() {
  const [alertVisibility, setAlertVisibility] = useState(false);
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
    </div>
  );
}

export default App;
