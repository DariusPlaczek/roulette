export default function useAddCoins(valueCoins) {

  let handCoins = 0

  if (valueCoins.length !== 0 ) {
    for (const valueCoin of valueCoins) {
      handCoins = handCoins + valueCoin
    }
  }

  return handCoins;
}