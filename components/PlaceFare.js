import React, { useState } from "react";
import roads from "../public/data";

const PlaceFare = () => {
  // const [places, setPlaces] = useState([]);
  let places = [];

  // find all place all places
  roads.map((road) => {
    let temp = false;
    temp = places.find((place) => place === road.name);
    if (!temp) {
      places = [...places, road.name];
    }
  });
  places = places.sort();
  const handleSubmit = (e) => {
    console.log(e.target);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label className="label">
          <span className="label-text">Select start point</span>
        </label>
        <select
          name="start_point"
          className="select select-bordered w-full max-w-xs"
        >
          <option disabled selected>
            Pick one
          </option>
          {places.map((place, index) => (
            <option value={place} key={index}>
              {place}
            </option>
          ))}
        </select>
        <input className="btn btn-success my-5" type="submit" value="submit" />
      </form>
      {/* {places && places.map((place, index) => <li key={index}>{place}</li>)} */}
    </div>
  );
};

export default PlaceFare;
