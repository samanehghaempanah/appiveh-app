/** @format */

import TopBar from "./Components/TopBar/TopBar";
import Post from "./Components/Post/Post";
import BottomNavigation from "./Components/BottomNavigation/BottomNavigation";
import "./bootstrap.min.css";
import "./App.css";

export default function App() {
  return (
    <div className="app container-md w-50 bg-white p-0 pb-5">
      <TopBar />
      <Post />
      <BottomNavigation />
    </div>
  );
}
