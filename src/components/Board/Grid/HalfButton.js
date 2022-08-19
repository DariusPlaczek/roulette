import { useDispatch, useSelector } from "react-redux";
import {setHalf, removeCoinFromTheHAnd} from "../../../stores/placeCoinsStore";

import GridButton from "./GridButton/GridButton";
import RemoveCoins from "../RemoveCoins";
import BigJeton from "../../Jetons/Style/BigJeton";


export default function HalfButton({ eventValue, title }) {

  const dispatch = useDispatch()
  const { gameBoardHalf, coinsInMyHand } = useSelector(state => state.placeCoins)

  const addCoins = (event) => {
    if (coinsInMyHand.length === 0) {
      return
    }

    dispatch(setHalf({ value: event.target.value, coins: coinsInMyHand[0] }))
    dispatch(removeCoinFromTheHAnd())
  }

  return (
    <div className="game-field-big">
        <GridButton value={eventValue} title={title} onClickEvent={(event) => addCoins(event)} />

      {gameBoardHalf.value === eventValue && gameBoardHalf.coins !== 0 ?
        <>
          <BigJeton coinValue={gameBoardHalf.coins} />
          <RemoveCoins eventValue={eventValue}  />
        </>
          : <></>}
    </div>
  )
}