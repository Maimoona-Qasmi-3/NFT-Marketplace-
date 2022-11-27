export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'getOpendCanisterId' : IDL.Func([], [IDL.Principal], ['query']),
    'getOwnedNfts' : IDL.Func([IDL.Principal], [IDL.Vec(IDL.Principal)], []),
    'isListed' : IDL.Func([IDL.Principal], [IDL.Bool], ['query']),
    'listItem' : IDL.Func([IDL.Principal, IDL.Nat], [IDL.Text], []),
    'mInter' : IDL.Func([IDL.Vec(IDL.Nat8), IDL.Text], [IDL.Principal], []),
  });
};
export const init = ({ IDL }) => { return []; };
