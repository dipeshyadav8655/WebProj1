import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Hero from './Components/HomeHero/Hero';
import Home from './Screens/Home/Home';
import ServicesPage from './Screens/ServicesPage/ServicesPage';
import Footer from './Components/Footer/Footer';
import AimlScreen from './Screens/ServicesScreens/AimlScreen/AimlScreen';
import BlockChain from './Screens/ServicesScreens/BlockChain/BlockChain';
import DataAnalytics from './Screens/ServicesScreens/DataAnalytics/DataAnalytics';
import Qa from './Screens/ServicesScreens/Qa/Qa';
import DataEngi from './Screens/ServicesScreens/DataEngineering/DataEngi';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
    <NavBar />
    <Outlet />
    {/* <Home /> */}
    {/* <ServicesPage /> */}
    {/* <AimlScreen /> */}
    {/* <BlockChain /> */}
    {/* <Qa /> */}
    {/* <DataAnalytics /> */}
    {/* <DataEngi /> */}
    <Footer />
    </>
  );
}

export default App;
