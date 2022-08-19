import { useDispatch, useSelector } from "react-redux";
import {removeCoinFromNumber, setCoins, setNumbers} from "../../../stores/placeCoinsStore";
import SmallJeton from "../../Jetons/Style/SmallJeton";

export default function NumberGridButton({ value, id }) {

  const dispatch = useDispatch();
    const { isReady, coinsInMyHand }  = useSelector(state => state.placeCoins)


    const setCoinsOnTheBoard = (event) => {

        if (coinsInMyHand.length === 0 ) {
          return
        }

        dispatch(setCoins({id: parseInt(event.target.value), coins:coinsInMyHand[0] }))
        dispatch(setNumbers({id: parseInt(event.target.value), coins:coinsInMyHand[0] }))
    
      }

  const remove = (event) => {
    dispatch(removeCoinFromNumber(event.target.value))
  }

    return (
        <div id={`num-${id}`}  className="w-full h-full border border-stone-400 relative">
        <button
            value={value.number}
            className="h-full w-full text-2xl font-bold z-10 bg-green-800"
            style={{color: value.color}}
            onClick={(value) => setCoinsOnTheBoard(value)}
            disabled={isReady}
        >

          {value.number}

        </button>

        {value.coins !== 0  ?
          <>
            <SmallJeton coinValue={value.coins} />
            <button className="removeButton" disabled={isReady} value={value.number} onClick={(event) => remove(event)}>X</button>
          </>
        : <></> }

      </div>
    )
}