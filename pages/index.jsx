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
  {
    road_no: "2",
    place: "",
    name: "Kalurghat Bridge",
    value: "kalurghat_bridge",
    distance: 0,
  },
  {
    road_no: "2",
    place: "",
    name: "Ispahani Mosjid",
    value: "ispahani_mosjid",
    distance: 1,
  },
  {
    road_no: "2",
    place: "",
    name: "Kaptai Rastar Matha",
    value: "kaptai_rastar_matha",
    distance: 2,
  },
  {
    road_no: "2",
    place: "",
    name: "CMP Rastar Matha",
    value: "cmp_rastar_matha",
    distance: 3,
  },
  {
    road_no: "2",
    place: "",
    name: "Shorafot Petrol Pump",
    value: "shorafot_petrol_pump",
    distance: 4,
  },
  {
    road_no: "2",
    place: "",
    name: "Bus Terminal",
    value: "bus_terminal",
    distance: 5,
  },
  {
    road_no: "2",
    place: "",
    name: "Bohoddarhat",
    value: "bohoddarhat",
    distance: 6,
  },
  {
    road_no: "2",
    place: "",
    name: "Muradpur",
    value: "muradput",
    distance: 7,
  },
  {
    road_no: "2",
    place: "",
    name: "2 Number Gate",
    value: "two_number_gate",
    distance: 8,
  },
  {
    road_no: "2",
    place: "",
    name: "Medical",
    value: "medical",
    distance: 9,
  },
  {
    road_no: "2",
    place: "",
    name: "Chowkbazar",
    value: "chowkbazar",
    distance: 10,
  },
  {
    road_no: "2",
    place: "",
    name: "Jamal Khan",
    value: "jamal_khan",
    distance: 11,
  },
  {
    road_no: "2",
    place: "",
    name: "Andorkilla",
    value: "andorkilla",
    distance: 12,
  },
  {
    road_no: "2",
    place: "",
    name: "Lal Dighi",
    value: "lal_dighi",
    distance: 13,
  },
  {
    road_no: "2",
    place: "",
    name: "New Market",
    value: "new_market",
    distance: 14,
  },
  {
    road_no: "3",
    place: "",
    name: "New Market",
    value: "new_market",
    distance: 0.1,
  },
  {
    road_no: "3",
    place: "",
    name: "Tin Puler Matha",
    value: "tin_puler_matha",
    distance: 0.5,
  },
  {
    road_no: "3",
    place: "",
    name: "Anayet Bazar",
    value: "anayet_bazar",
    distance: 0.75,
  },
  {
    road_no: "3",
    place: "",
    name: "Kotwali More",
    value: "kotwali_more",
    distance: 0.8,
  },
  {
    road_no: "3",
    place: "",
    name: "Buddha Mandir",
    value: "buddha_mandir",
    distance: 1,
  },
  {
    road_no: "3",
    place: "",
    name: "Kazir Dewri",
    value: "kazir_dewri",
    distance: 2,
  },
  {
    road_no: "3",
    place: "",
    name: "Wasa",
    value: "wasa",
    distance: 2.5,
  },
  {
    road_no: "3",
    place: "",
    name: "Two Number Gate",
    value: "two_number_gate",
    distance: 3.5,
  },
  {
    road_no: "3",
    place: "",
    name: "Muradpur",
    value: "muradpur",
    distance: 4.5,
  },
  {
    road_no: "3",
    place: "",
    name: "Hamzarbug",
    value: "hamzarbug",
    distance: 5.5,
  },
  {
    road_no: "3",
    place: "",
    name: "Oxyzen",
    value: "oxyzen",
    distance: 6.5,
  },
  {
    road_no: "3",
    place: "",
    name: "Baluchora",
    value: "baluchora",
    distance: 7.5,
  },
  {
    road_no: "3",
    place: "",
    name: "Nondir Hat",
    value: "nondir_hat",
    distance: 11.5,
  },
  {
    road_no: "3",
    place: "",
    name: "Foteyabad",
    value: "foteyabad",
    distance: 14.5,
  },
];

///////////////////////////////////////////////////////////////////////////////////
const roadss = [
  {
    road_no: "3",
    place: "",
    name: "New Market",
    value: "new_market",
    distance: 0,
  },
  {
    road_no: "3",
    place: "",
    name: "Tin Puler Matha",
    value: "tin_puler_matha",
    distance: 0.5,
  },
  {
    road_no: "3",
    place: "",
    name: "Anayet Bazar",
    value: "anayet_bazar",
    distance: 0.75,
  },
  {
    road_no: "3",
    place: "",
    name: "Kotwali More",
    value: "kotwali_more",
    distance: 0.8,
  },
  {
    road_no: "3",
    place: "",
    name: "Buddha Mandir",
    value: "buddha_mandir",
    distance: 1,
  },
  {
    road_no: "3",
    place: "",
    name: "Kazir Dewri",
    value: "kazir_dewri",
    distance: 2,
  },
  {
    road_no: "3",
    place: "",
    name: "Wasa",
    value: "wasa",
    distance: 2.5,
  },
  {
    road_no: "3",
    place: "",
    name: "Two Number Gate",
    value: "two_number_gate",
    distance: 3.5,
  },
  {
    road_no: "3",
    place: "",
    name: "Muradpur",
    value: "muradpur",
    distance: 4.5,
  },
  {
    road_no: "3",
    place: "",
    name: "Hamzarbug",
    value: "hamzarbug",
    distance: 5.5,
  },
  {
    road_no: "3",
    place: "",
    name: "Oxyzen",
    value: "oxyzen",
    distance: 6.5,
  },
  {
    road_no: "3",
    place: "",
    name: "Baluchora",
    value: "baluchora",
    distance: 7.5,
  },
  {
    road_no: "3",
    place: "",
    name: "Nondir Hat",
    value: "nondir_hat",
    distance: 11.5,
  },
  {
    road_no: "3",
    place: "",
    name: "Foteyabad",
    value: "foteyabad",
    distance: 14.5,
  },
];

export default function Home() {
  const selectBusNumberArr = ["1", "2", "3"];

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
  /* console.log("distance", totalDistance);
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
    console.log("x", x);
    const y = placeName?.filter(
      (road) => road?.value === e?.target?.end?.value
    );
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
