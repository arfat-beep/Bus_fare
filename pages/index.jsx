import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import roads from "../public/data";

///////////////////////////////////////////////////////////////////////////////////

export default function Home() {
  const selectBusNumberArr = ["1", "2", "3", "4", "5", "6", "7", "8", "10"];

  const [busNumber, setBusNumber] = useState("");
  const [placeName, setPlaceName] = useState([]);
  const [roadStartKM, setRoadStartKM] = useState(0);
  const [roadEndKM, setRoadEndKM] = useState(0);
  const [totalDistance, setTotalDistance] = useState(0);
  const [busFareCost, setBusFareCost] = useState(0);
  useEffect(() => {
    const calculateBusFare = (totalDistance) => {
      if ((totalDistance <= 4) & (totalDistance >= 0)) {
        setBusFareCost(10);
      } else if (totalDistance >= 5) {
        setBusFareCost(Math?.round(totalDistance * 2.5));
      }
    };
    calculateBusFare(totalDistance);
  }, [totalDistance]);
  /*   console.log("distance", totalDistance);
  console.log("vara", busFareCost);
  console.log("calculation ", Math?.ceil(totalDistance * 2.5));
  console.log("road start", roadStartKM, "road end", roadEndKM);
  console.log("place name", placeName); */

  // useState for place name
  useEffect(() => {
    let places = [];
    if (busNumber) {
      roads.map((road) => {
        if (road.road_no === busNumber) {
          places.push(road);
        }
      });
      setPlaceName(places);
      places = [];
    }
  }, [busNumber]);

  // this handle bus number
  const handleSelectRoad = (e) => {
    setBusNumber(e.target.value);
  };

  // this is handle Bus start to end place input
  const handleStartToEndRoadInput = (e) => {
    e.preventDefault();
    const x = placeName?.filter(
      (road) => road?.value === e?.target?.start?.value
    );
    setRoadStartKM(x[0]?.distance);

    const y = placeName?.filter(
      (road) => road?.value === e?.target?.end?.value
    );
    setRoadEndKM(y[0]?.distance);
    setTotalDistance(Math?.abs(x[0]?.distance - y[0]?.distance));
  };
  return (
    <div>
      <div className="select_road" onChange={handleSelectRoad}>
        <label htmlFor="bus_number">Please select your bus number</label>
        <select name="bus_number">
          <option value={""}></option>
          {selectBusNumberArr.map((busNumber, index) => (
            <option value={busNumber} key={index}>
              {busNumber}
            </option>
          ))}
        </select>
      </div>

      {busNumber && (
        <form onSubmit={handleStartToEndRoadInput}>
          <label>Select start point</label>

          <select name="start">
            {placeName.map((road, index) => (
              <option value={road.value} key={index}>
                {road.name}
              </option>
            ))}
          </select>
          <br />
          <label>Select end point</label>
          <select name="end">
            {placeName.map((road, index) => (
              <option value={road.value} key={index}>
                {road.name}
              </option>
            ))}
          </select>
          <br />
          <input type="submit" value="submit" />
        </form>
      )}
      {busNumber ? (
        <div>
          ভাড়া : ৳ <strong>{busFareCost}</strong>
          <br />
          ছাত্র ভাড়া: ৳ <strong>{Math.ceil(busFareCost / 2)}</strong>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
