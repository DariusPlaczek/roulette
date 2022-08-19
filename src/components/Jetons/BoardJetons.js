import { v4 as uuidv4 } from 'uuid'

import {useDispatch, useSelector} from "react-redux";
import {addCoinsToTheHand, removeCoin} from "../../stores/placeCoinsStore";

import { config } from "../../config";
import JetonStyle from "./Style/JetonStyle";
import {Fragment} from "react";
import useAddCoins from "../../useHooks/useAddCoins";

export default function BoardJetons() {

  const dispatch = useDispatch();
  const { coins, coinsInMyHand } = useSelector(state => state.placeCoins)
  const handCoins = useAddCoins(coinsInMyHand)

  const addCoin = (event) => {

    dispatch(addCoinsToTheHand(parseInt(event.target.value)))
    dispatch(removeCoin(parseInt(event.target.value)))

  }

  return (
      <section className="w-96 flex flex-col justify-center items-center">
        <div className="text-2xl text-yellow-300 bg-stone-800 p-4 rounded-t-3xl border border-yellow-300"> Chips: {coins + handCoins}</div>
        <div className="w-96 min-h jetons-cotainer flex-wrap z-20 ">
          {config.coins?.map((value, key) =>
              coins >= value.number || coins === value.number ?
              <JetonStyle key={uuidv4()} bgColor={value.color} title={value.title} eventValue={value.number} onClickEvent={(event) => addCoin(event)} />
              :
              <Fragment key={uuidv4()}></Fragment>
          )}
        </div>
      </section>
  )
}