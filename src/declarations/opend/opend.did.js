export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'getOwnedNfts' : IDL.Func([IDL.Principal], [IDL.Vec(IDL.Principal)], []),
    'mInter' : IDL.Func([IDL.Vec(IDL.Nat8), IDL.Text], [IDL.Principal], []),
  });
};
export const init = ({ IDL }) => { return []; };
