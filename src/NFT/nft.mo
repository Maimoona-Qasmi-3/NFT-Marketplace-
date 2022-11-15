import Debug "mo:base/Debug";
import Principal "mo:base/Principal";

<<<<<<< HEAD
actor class NFT (name: Text, owner: Principal, content: [Nat8]) {
  
=======
actor class NFT(name: Text, owner: Principal, content: [Nat8]) {

>>>>>>> e5e3e7fe2cdb0723117c6e5ec907705981ca72ad
  let itemName = name;
  let nftOwner = owner;
  let imageBytes = content;

  public query func getName() : async Text{
    return itemName;
  };

  public query func getOwner() : async Principal {
    return nftOwner;
  };

  public query func getAsset() : async [Nat8] {
    return imageBytes;
  };

<<<<<<< HEAD
};
=======
};

>>>>>>> e5e3e7fe2cdb0723117c6e5ec907705981ca72ad
