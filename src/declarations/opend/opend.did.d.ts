import type { Principal } from '@dfinity/principal';
export interface _SERVICE {
  'getOwnedNfts' : (arg_0: Principal) => Promise<Array<Principal>>,
  'mInter' : (arg_0: Array<number>, arg_1: string) => Promise<Principal>,
}
