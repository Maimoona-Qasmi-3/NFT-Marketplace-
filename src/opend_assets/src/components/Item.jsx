import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import { Actor, HttpAgent } from "@dfinity/agent";
import { idlFactory } from "../../../declarations/nft";
import { Principal } from "@dfinity/principal";

function Item(props) {
  const [name, setname] = useState();
  const [owner, setowner] = useState();

  const id = Principal.fromText(props.id);
  const localHost = "http://localhost:8080/";
  const agent = new HttpAgent({host: localHost});
  
  async function loadNFT() {
    const NFTActor = await Actor.createActor(idlFactory, {
      agent,
      canisterid: id,
    });

    const name = await NFTActor.getName();
    const owner = await NFTActor.getOwner();
    setname(name);
    setOwner(owner.toText());
  }

  useEffect(() => {
    loadNFT();
  }, []);

  return (
    <div className="disGrid-item">
      <div className="disPaper-root disCard-root makeStyles-root-17 disPaper-elevation1 disPaper-rounded">
        <img
          className="disCardMedia-root makeStyles-image-19 disCardMedia-media disCardMedia-img"
          src={logo}
        />
        <div className="disCardContent-root">
          <h2 className="disTypography-root makeStyles-bodyText-24 disTypography-h5 disTypography-gutterBottom">
            {name} <span className="purple-text"></span>
          </h2>
          <p className="disTypography-root makeStyles-bodyText-24 disTypography-body2 disTypography-colorTextSecondary">
            Owner: {owner}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Item;









# NFT-Marketplace-
Building an NFT Marketplace

***A Website to mint, buy and sell NFT's***

>Processing...


![image](https://user-images.githubusercontent.com/96918798/200164332-21e43f1f-4ea0-4c0d-b30e-801602320527.png)