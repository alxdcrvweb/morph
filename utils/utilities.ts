import { BigNumber } from "ethers";
import BN from "bignumber.js";
import numeral from "numeral";
import { fromWei } from "web3-utils";
export function toBNJS(val: BigNumber | number | string) {
  return new BN(val.toString());
}

export function maskAddress(address: string) {
  return address.slice(0, 6) + "..." + address.slice(address.length - 4);
}

export function fd(val: number | string | BN) {
  if (!val) return "";
  return numeral(val?.toString()).format("0,0[.][000000000000000000]");
}

export function getRandomIntInclusive(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}
BN.config({ EXPONENTIAL_AT: 100 });
export const fromWeiToEth = (num: string | BigNumber, fixed?: number) => {
  if (!isNaN(Number(num))) {
    return Number(Number(fromWei(num.toString(), "ether")).toFixed(fixed || 5));
  } else {
    return 0;
  }
};
