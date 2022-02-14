import { Contract } from "@ethersproject/contracts/";
import { useContractCall, useContractFunction } from "@usedapp/core";
import { ethers } from "ethers";
import { abi, address } from "./assets/contract/ApeSoldiers";

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
  console.log("test");
  return tokenPrice ? parseInt(tokenPrice._hex, 16) : 0;
}

export function useReleaseTimestamp() {
  const [timestamp] =
    useContractCall({
      abi: nftContractInterface,
      address: address,
      method: "releaseTimestamp",
      args: [],
    }) ?? [];
  return timestamp ? parseInt(timestamp._hex, 16) : 0;
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

export function usePresale() {
  const [presale] =
    useContractCall({
      abi: nftContractInterface,
      address: address,
      method: "preSaleActive",
      args: [],
    }) ?? [];
  return presale;
}

export function usePublicSale() {
  const [publicSale] =
    useContractCall({
      abi: nftContractInterface,
      address: address,
      method: "publicSaleActive",
      args: [],
    }) ?? [];
  return publicSale;
}

export function useTotalSupply() {
  const [totalSupply] =
    useContractCall({
      abi: nftContractInterface,
      address: address,
      method: "totalSupply",
      args: [],
    }) ?? [];
  return totalSupply;
}

export function useBuyOnPreSale() {
  const { state, send } = useContractFunction(
    nftContract,
    "buyTokensOnPresale"
  );
  return { state, send };
}

export function useBuyTokens() {
  const { state, send } = useContractFunction(nftContract, "buyTokens");
  return { state, send };
}

export const getReleaseTimestamp = async () => {
  let provider = new ethers.providers.Web3Provider(window.ethereum);
  let signer = provider.getSigner();
  let contract = new ethers.Contract(address, abi, signer);
  let releaseTimestamp = await contract.releaseDate();
  releaseTimestamp = parseInt(releaseTimestamp._hex, 16);

  return releaseTimestamp;
};
