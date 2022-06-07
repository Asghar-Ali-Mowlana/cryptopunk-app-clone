import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Header from "./components/Header";
import PunkList from "./components/PunkList";

function App() {
  const [punkListData, setPunkListData] = useState([]);

  useEffect(() => {
    try {
      const getMyNfts = async () => {
        const openseaData = await axios.get(
          "https://testnets-api.opensea.io/assets?asset_contract_address=0x2E7C542DB2079F67602FEA30cBF6d9c2564eF744&order_direction=asc"
        );
        console.log(openseaData.data.assets);
        setPunkListData(openseaData.data.assets);
      };
      getMyNfts();
    } catch (error) {
      throw new Error(error);
    }
  }, []);

  return (
    <div className="app">
      <Header />
      <PunkList punkListData={punkListData} />
    </div>
  );
}

export default App;
