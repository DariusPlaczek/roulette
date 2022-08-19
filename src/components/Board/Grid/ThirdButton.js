import { useDispatch, useSelector } from "react-redux";
import {setThird, removeCoinFromTheHAnd} from "../../../stores/placeCoinsStore";

import GridButtonSmall from "./GridButtonSmall/GridButtonSmall";
import RemoveCoins from "../RemoveCoins";
import SmallJeton from "../../Jetons/Style/SmallJeton";


export default function ThirdButton({eventValue, title}) {
  
  const dispatch = useDispatch()
  const { gameBoardThird, coinsInMyHand } = useSelector(state => state.placeCoins)

  const addCoins = (event) => {
    if (coinsInMyHand.length === 0) {
      return
    }

    dispatch(setThird({ value: event.target.value, coins: coinsInMyHand[0] }))
    dispatch(removeCoinFromTheHAnd())
  }


  return (
    <div className="w-1/3 h-16 border relative bg-green-700">

      <GridButtonSmall value={eventValue} title={title} subTitle="12" onClickEvent={(event) => addCoins(event)}/>
      {gameBoardThird.value === eventValue && gameBoardThird.coins !== 0 ?
          <>
            <SmallJeton coinValue={gameBoardThird.coins} />
            <RemoveCoins eventValue={eventValue}  />
          </>
          : <></>


      }

    </div>
  )

}