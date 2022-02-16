import { Contract } from "@ethersproject/contracts/";
import { useContractCall, useContractFunction } from "@usedapp/core";
import { ethers } from "ethers";
import { abi, address } from "./contract";

const nftContractInterface = new ethers.utils.Interface(abi);
const nftContract = new Contract(address, nftContractInterface);

export function useTokenPrice() {
  const [tokenPrice] =
    useContractCall({
      abi: nftContractInterface,
      address: address,
      method: "getCurrentPrice",
      args: [],
    }) ?? [];
  return tokenPrice ? parseInt(tokenPrice._hex, 16) : 0;
}

export function useUserTokens(userAddress) {
  const [tokensNumber] =
    useContractCall({
      abi: nftContractInterface,
      address: address,
      method: "balanceOf",
      args: [userAddress],
    }) ?? [];
  return tokensNumber ? parseInt(tokensNumber._hex, 16) : 0;
}

export function useTotalSupply() {
  const [totalSupply] =
    useContractCall({
      abi: nftContractInterface,
      address: address,
      method: "totalSupply",
      args: [],
    }) ?? [];
  return totalSupply ? parseInt(totalSupply._hex, 16) : 0;
}

export function useBuyTokens() {
  const { state, send } = useContractFunction(nftContract, "buyTokens");
  return { state, send };
}
