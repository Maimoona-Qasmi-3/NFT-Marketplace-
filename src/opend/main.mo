import Debug "mo:base/Debug";
import Cycles "mo:base/ExperimentalCycles";
import Principal "mo:base/Principal";
import NFTActorClass "../NFT/nft";
import HashMap "mo:base/HashMap";
import List "mo:base/List";

actor OpenD {

    var mapOfNfts = HashMap.HashMap<Principal, NFTActorClass.NFT>(1, Principal.equal, Principal.hash);
    var mapOfOwners = HashMap.HashMap<Principal, List.List<Principal>>(1, Principal.equal, Principal.hash);

    public shared(msg) func mInter(imgData: [Nat8], name: Text) : async Principal{
    let owner : Principal = msg.caller;
    
    Debug.print(debug_show(Cycles.balance()));
    Cycles.add(100_500_000_000);

    let newNft = await NFTActorClass.NFT(name, owner, imgData);
    Debug.print(debug_show(Cycles.balance()));

    let newNftPrincipal = await newNft.getCanisterId();
    
    mapOfNfts.put(newNftPrincipal, newNft);
    addToOwnershipMap(owner, newNftPrincipal);

    return newNftPrincipal;

    };

    private func addToOwnershipMap(owner: Principal, nftId: Principal) {
        var ownedNfts: List.List<Principal> = switch (mapOfOwners.get(owner)) {
          case null List.nil<Principal>();
          case (?result) result;
        };

        ownedNfts := List.push(nftId, ownedNfts);

        mapOfOwners.put(owner, ownedNfts);
    };

    public func getOwnedNfts(user: Principal) : async [Principal] {
        var userNFTs : List.List<Principal> = switch(mapOfOwners.get(user)) {
            case null List.nil<Principal>();
            case (?result) result;
        };

        return List.toArray(userNFTs);
    }
};
