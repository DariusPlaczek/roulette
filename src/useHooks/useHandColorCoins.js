import { config} from "../config";

export default function useHandColorCoins(valueCoins) {

  let handCoins = []
  const configCoins = config.coins

  for (const valueCoinsKey of valueCoins) {
    const index = configCoins.findIndex(value => value.title === valueCoinsKey)
    handCoins.push({coin: valueCoinsKey, color: config.coins[index].color})
  }

  return handCoins
}