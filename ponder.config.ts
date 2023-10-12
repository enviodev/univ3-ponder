import type { Config } from "@ponder/core";

export const config: Config = {
  networks: [
    { name: "mainnet", chainId: 1, rpcUrl: process.env.PONDER_RPC_URL_1 },
  ],
  contracts: [
    {
      name: "SwapContract",
      network: "mainnet",
      address: "0x88e6A0c2dDD26FEEb64F039a2c41296FcB3f5640",
      abi: "./abis/SwapContract.json",
      startBlock: 12376729,
    },
  ],
};
