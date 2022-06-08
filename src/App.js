import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import PunkList from "./components/PunkList";

function App() {
  const [punkListData, setPunkListData] = useState([]);
  const [selectedPunk, setSelectedPunk] = useState(0);

  // thirdweb Link
  // https://thirdweb.com/dashboard/rinkeby/nft-collection/0x2E7C542DB2079F67602FEA30cBF6d9c2564eF744?tabIndex=0

  useEffect(() => {
    try {
      const getMyNfts = async () => {
        const openseaData = await axios.get(
          "https://testnets-api.opensea.io/assets?asset_contract_address=0x2E7C542DB2079F67602FEA30cBF6d9c2564eF744&order_direction=asc"
        );
        console.log("Original Order");
        console.log(openseaData.data.assets);
        console.log("Reversed Order");
        console.log(openseaData.data.assets.slice(0).reverse());
        setPunkListData(openseaData.data.assets.slice(0).reverse());
      };
      getMyNfts();
    } catch (error) {
      throw new Error(error);
    }
  }, []);

  return (
    <div className="app">
      <Header />
      {punkListData.length > 0 && (
        <>
          <Main punkListData={punkListData} selectedPunk={selectedPunk} />
          <PunkList
            punkListData={punkListData}
            setSelectedPunk={setSelectedPunk}
          />
        </>
      )}
    </div>
  );
}

export default App;
