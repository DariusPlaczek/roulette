import { useDispatch, useSelector } from "react-redux";
import {setEven, removeCoinFromTheHAnd} from "../../../stores/placeCoinsStore";

import GridButton from "./GridButton/GridButton";
import RemoveCoins from "../RemoveCoins";
import BigJeton from "../../Jetons/Style/BigJeton";

export default function EvenButton({ eventValue }) {

  const dispatch = useDispatch()
  const { gameBoardEven, coinsInMyHand } = useSelector(state => state.placeCoins)

  const addCoins = (event) => {
    if (coinsInMyHand.length === 0) {
      return
    }

    dispatch(setEven({ value: event.target.value, coins: coinsInMyHand[0] }))
    dispatch(removeCoinFromTheHAnd())
  }


  return (
    <div className="game-field-big">


      <GridButton value={eventValue} title={eventValue} onClickEvent={(event) => addCoins(event)} />

      {gameBoardEven.value === eventValue && gameBoardEven.coins !== 0 ?
        <>
          <BigJeton coinValue={gameBoardEven.coins} />
          <RemoveCoins eventValue={eventValue}  />
        </> : <></>}


    </div>
  )
}