import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header.jsx";
import Signup from "./components/Signup/Signup";
import Menu from "./components/Menu/Menu";
import People from "./components/Trending/People/People";
import Movies from "./components/Trending/Movies/Movies";
import TV from "./components/Trending/TV/TV";
import AiringToday from "./components/TvSeriesList/AiringToday/AiringToday";
import OnTheAir from "./components/TvSeriesList/OnTheAir/OnTheAir";
import Popular from "./components/TvSeriesList/Popular/Popular";
import TopRated from "./components/TvSeriesList/TopRated/TopRated";
import Watchlist from "./components/Watchlist/Watchlist.jsx";
import Protected from "./components/Protected/Protected.jsx";
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route path="people" element={<Protected><People /></Protected>} />
        <Route path="movies" element={<Protected><Movies /></Protected>} />
        <Route path="tv" element={<Protected ><TV /></Protected>} />
        <Route path="airingtoday" element={<Protected ><AiringToday/></Protected>} />
        <Route path="ontheair" element={<Protected ><OnTheAir/></Protected>} />
        <Route path="popular" element={<Protected ><Popular /></Protected>} />
        <Route path="toprated" element={<TopRated />} />
        <Route path="" element={<Home />} />
      </Route>
      <Route path="/login" element={<Protected authentication={false}><Login /></Protected>} />
      <Route path="/signup" element={<Protected authentication={false}><Signup /></Protected>} />
      <Route path="/menu" element={<Protected ><Menu /></Protected>}/>
      <Route
        path="/watchlist"
        element={
         <Protected> 
          <>
         <Header />
         <Watchlist />
       </>
       </Protected>
        }
      />
    </>
  )
);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
