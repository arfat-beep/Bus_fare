import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";

const roads = [
  {
    road_no: "1",
    place: "",
    name: "Karnofuli Bridge",
    value: "karnafuli_bridge",
    distance: 0,
  },
  {
    road_no: "1",
    place: "",
    name: "Razakhali",
    value: "razakhali",
    distance: 1,
  },
  {
    road_no: "1",
    place: "",
    name: "Kalamia Bazar",
    value: "kalamia_bazar",
    distance: 2,
  },
  {
    road_no: "1",
    place: "",
    name: "Nahar CNG",
    value: "nahar_cng",
    distance: 3,
  },
  {
    road_no: "1",
    place: "",
    name: "Ek Kilometer",
    value: "ek_kilometer",
    distance: 4,
  },
  {
    road_no: "1",
    place: "",
    name: "Bohoddarhat",
    value: "bohoddarhat",
    distance: 5,
  },
  {
    road_no: "1",
    place: "",
    name: "Kapasgola",
    value: "kapasgola",
    distance: 6,
  },
  {
    road_no: "1",
    place: "",
    name: "Chowkbazar",
    value: "chowkbazar",
    distance: 6.5,
  },
  {
    road_no: "1",
    place: "",
    name: "Sirazuddowla Road",
    value: "sirazuddowla_road",
    distance: 7.5,
  },
  {
    road_no: "1",
    place: "",
    name: "Andorkilla",
    value: "andorkilla",
    distance: 8,
  },
  {
    road_no: "1",
    place: "",
    name: "Lal Dighi",
    value: "lal_dighi",
    distance: 9,
  },
  {
    road_no: "1",
    place: "",
    name: "New Market",
    value: "new_market",
    distance: 10,
  },
];
const selectBusNumberArr = ["1", "2", "3"];

export default function Home() {
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
        setBusFareCost(Math?.ceil(totalDistance * 2.5));
      }
    };
    calculateBusFare(totalDistance);
  }, [totalDistance]);

  // useState for place name
  useEffect(() => {
    let places = [];
    if (busNumber) {
      roads.map((road) => {
        if (road.road_no == busNumber) {
          places.push(road);
          setPlaceName(places);
        }
      });
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
    const x = roads?.filter((road) => road?.value === e?.target?.start?.value);
    setRoadStartKM(x[0]?.distance);
    const y = roads?.filter((road) => road?.value === e?.target?.end?.value);
    setRoadEndKM(y[0]?.distance);
    setTotalDistance(Math?.abs(roadStartKM - roadEndKM));
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
            {roads.map((road, index) => (
              <option value={road.value} key={index}>
                {road.name}
              </option>
            ))}
          </select>
          <br />
          <label>Select end point</label>
          <select name="end">
            {roads.map((road, index) => (
              <option value={road.value} key={index}>
                {road.name}
              </option>
            ))}
          </select>
          <br />
          <input type="submit" value="submit" />
        </form>
      )}
      {busFareCost & busNumber ? (
        <div>
          ভাড়া : ৳ <strong>{busFareCost}</strong>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
