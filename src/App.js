
import {createBrowserRouter } from "react-router-dom";
import "./App.css"
import Body from "./components/Body";
import Header from "./components/Header";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import SearchVideo from "./components/SearchVideo";


export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <MainContainer />
      },
      {
        path: "watch",
        element: <WatchPage />
      },
      {
        path: "results",
        element: <SearchVideo />
      }
    ]
  }
])
function App() {
  console.log("Important: CORS Extension - To enhance your searching experience with debouncing and caching , please consider enabling a CORS extension in your browser. This will allow our live API from Youtube to function seamlessly.")
  return (
      <div>
        <Header />
        <Body />
      </div>
  );
}

export default App;
