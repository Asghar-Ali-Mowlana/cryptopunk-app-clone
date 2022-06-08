import React from "react";
import CollectionCard from "../Collection/CollectionCard";
import "./PunkList.css";

const PunkList = ({ punkListData, setSelectedPunk }) => {
  return (
    <div className="punkList">
      {punkListData.map((punk, index) => (
        <div
          key={index}
          onClick={() => {
            setSelectedPunk(punk.token_id);
            console.log(punk.token_id);
          }}
        >
          <CollectionCard
            id={punk.token_id}
            name={punk.name}
            traits={punk.traits}
            image={punk.image_original_url}
          />
        </div>
      ))}
    </div>
  );
};

export default PunkList;
