import { useDispatch, useSelector } from "react-redux";
import {removeCoinFromTheHAnd, setColor} from "../../../stores/placeCoinsStore";

import GridButton from "./GridButton/GridButton";
import RemoveCoins from "../RemoveCoins";
import BigJeton from "../../Jetons/Style/BigJeton";

export default function NoirButton({ eventValue }) {


  const dispatch = useDispatch()
  const { gameBoardColors, coinsInMyHand } = useSelector(state => state.placeCoins)

  const addCoins = (event) => {
    if (coinsInMyHand.length === 0) {
      return
    }

    dispatch(setColor({ value: event.target.value, coins: coinsInMyHand[0] }))
    dispatch(removeCoinFromTheHAnd())
  }



  return (
    <div className="game-field-big">

      <div className="w-full h-full relative flex justify-center items-center">
        <div className="w-2/4 h-3/4 rotate-[45deg] absolute scale-75" style={{backgroundColor: eventValue}}></div>
        <GridButton value={eventValue} onClickEvent={(event) => addCoins(event)} />

      </div>
      {gameBoardColors.value === eventValue && gameBoardColors.coins !== 0 ?
        <>
          <BigJeton coinValue={gameBoardColors.coins} />
          <RemoveCoins eventValue={eventValue}  />
        </> : <></>}
    </div>
  )
}