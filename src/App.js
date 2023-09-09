
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
  return (
      <div>
        <Header />
        <Body />
      </div>
  );
}

export default App;
