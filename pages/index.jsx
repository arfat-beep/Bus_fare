import Fare from "../components/Fare";
import PlaceFare from "../components/PlaceFare";

///////////////////////////////////////////////////////////////////////////////////

export default function Home() {
  return (
    <div className="w-11/12 mx-auto grid justify-center pt-3">
      <Fare />
      <PlaceFare />
    </div>
  );
}
