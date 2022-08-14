import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";

const roads = [
  {
    name: "Karnofuli Bridge",
    value: "karnafuli_bridge",
    distance: 0,
  },
  {
    name: "Razakhali",
    value: "razakhali",
    distance: 1,
  },
  {
    name: "Kalamia Bazar",
    value: "kalamia_bazar",
    distance: 2,
  },
  {
    name: "Nahar CNG",
    value: "nahar_cng",
    distance: 3,
  },
  {
    name: "Ek Kilometer",
    value: "ek_kilometer",
    distance: 4,
  },
  {
    name: "Bohoddarhat",
    value: "bohoddarhat",
    distance: 5,
  },
  {
    name: "Kapasgola",
    value: "kapasgola",
    distance: 6,
  },
  {
    name: "Chowkbazar",
    value: "chowkbazar",
    distance: 6.5,
  },
  {
    name: "Sirazuddowla Road",
    value: "sirazuddowla_road",
    distance: 7.5,
  },
  {
    name: "Andorkilla",
    value: "andorkilla",
    distance: 8,
  },
  {
    name: "Lal Dighi",
    value: "lal_dighi",
    distance: 9,
  },
  {
    name: "New Market",
    value: "new_market",
    distance: 10,
  },
];
export default function Home() {
  const [roadStartKM, setRoadStartKM] = useState(null);
  const [roadEndKM, setRoadEndKM] = useState(null);
  const [totalDistance, setTotalDistance] = useState(null);
  const [busFareCost, setBusFareCost] = useState(null);
  console.log("total distance : ", totalDistance);
  console.log("bust Fare : ", busFareCost);
  useEffect(() => {
    const calculateBusFare = (totalDistance) => {
      if ((totalDistance <= 4) & (totalDistance > 0)) {
        setBusFareCost(10);
      } else if (totalDistance == 5) {
        setBusFareCost(11);
      } else {
        setBusFareCost(Math?.ceil(totalDistance * 2) + 1);
      }
    };
    calculateBusFare(totalDistance);
  }, [totalDistance, busFareCost]);

  const handleStartRoadInput = (e) => {
    e.preventDefault();
    const x = roads?.filter((road) => road?.value === e?.target?.start?.value);
    setRoadStartKM(x[0]?.distance);
    const y = roads?.filter((road) => road?.value === e?.target?.end?.value);
    setRoadEndKM(y[0]?.distance);
    setTotalDistance(Math?.abs(roadStartKM - roadEndKM));
  };
  return (
    <div>
      <form onSubmit={handleStartRoadInput}>
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
      {busFareCost && (
        <div>
          ভাড়া : ৳ <strong>{busFareCost}</strong>
        </div>
      )}
    </div>
  );
}
