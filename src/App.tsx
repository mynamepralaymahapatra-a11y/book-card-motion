import { Sketchbook } from "@designcodeio/threeui";
import "@designcodeio/threeui/style.css";
import "./App.css";

export function Scene() {
  return (
    <div className="shader-frame">
      <Sketchbook assetBaseUrl="/sketchbook/" />
    </div>
  );
}

export default function App() {
  return <Scene />;
}
