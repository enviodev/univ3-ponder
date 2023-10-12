import { ponder } from "@/generated";

ponder.on("SwapContract:Swap", async ({ event, context }) => {
  const { Swap } = context.entities;

  const swap = await Swap.upsert({
    id: event.log.transactionHash,
    create: {
      recipient: event.params.recipient,
      sender: event.params.sender,
      amount0: event.params.amount0,
      amount1: event.params.amount1,
      sqrtPriceX96: event.params.sqrtPriceX96,
      liquidity: event.params.liquidity,
      tick: event.params.tick,
      blockNumber: event.block.number,
      blockTimestamp: event.block.timestamp,
      transactionHash: event.log.transactionHash,
    },
  });
});
