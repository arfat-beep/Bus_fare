import React, { useState } from "react";
import Select from "react-select";
import roads from "../public/data";

const PlaceFare = () => {
  const [pickError, setPickError] = useState(false);
  const [selectedRoad, setSelectedRoad] = useState([]);
  // const [places, setPlaces] = useState([]);
  let places = [];

  // select custom style
  // find all place all places
  roads.map((road) => {
    const temp = places.find((place) => place === road.name);
    if (!temp) {
      places = [...places, road.name];
    }
  });
  const options = places.map((place) => {
    return { value: place, label: place };
  });
  places = places.sort();
  const handleSubmit = (e) => {
    e.preventDefault();
    const start = e.target.start_point.value;
    const end = e.target.end_point.value;
    console.log(typeof start, end);
    let hash = [];
    if (start && end) {
      roads.map((road) => {
        if (road.name === start) {
          roads.map((route) => {
            if (road.road_no === route.road_no) {
              if (route.name === end) {
                hash = [...hash, route, road];
              }
            }
          });
        }
      });
    } else {
      setPickError(true);
      setInterval(() => {
        setPickError(false);
      }, 3000);
    }
    let tempRoad = [];
    hash.map((road) => {
      const temp = tempRoad.find((selectRoad) => selectRoad == road.road_no);
      if (!temp) {
        tempRoad = [...tempRoad, road.road_no];
      }
    });
    setSelectedRoad(tempRoad);
  };

  return (
    <div className="max-w-lg bg-gray-200 p-5 rounded-md mt-10 ">
      <form onSubmit={handleSubmit}>
        <label className="label">
          <span className="label-text">Select start point</span>
        </label>
        {/* <select
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
        </select> */}
        <Select name="start_point" options={options} />
        <label className="label">
          <span className="label-text">Select end point</span>
        </label>
        {/* <select
          name="end_point"
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
        </select> */}

        <Select name="end_point" options={options} />
        {pickError && (
          <p style={{ color: "red" }}>Please Select Start and end place</p>
        )}
        <input className="btn btn-success my-5" type="submit" value="submit" />
      </form>
      {selectedRoad[0] ? (
        <span>
          apni jesob bus e kore jete parben:{" "}
          {selectedRoad.map((selectRoad, index) => (
            <span key={index}>{selectRoad} ,</span>
          ))}
        </span>
      ) : (
        ""
      )}
      {/* {places && places.map((place, index) => <li key={index}>{place}</li>)} */}
    </div>
  );
};

export default PlaceFare;
