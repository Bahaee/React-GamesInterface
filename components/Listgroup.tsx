import { useState } from "react";

interface ListGroupProps {
  cities: string[];
  heading: string;
  onSelectItem: (city: string) => void;
}

function ListGroup(props: ListGroupProps) {
  const [selectedIndex, setSelectedIndex] = useState(-2);

  return (
    <>
      <h1>Cities I visited </h1>
      {props.cities.length === 0 && <p>We didn't find any city</p>}
      <ul className="list-group">
        {props.cities.map((city, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={city}
            onClick={() => {
              setSelectedIndex(index);
              props.onSelectItem(city);
            }}
          >
            {city}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
