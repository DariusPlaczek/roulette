import {useDispatch, useSelector} from "react-redux";
import {removeCoinsFromBoard} from "../../stores/placeCoinsStore";

export default function RemoveCoins({eventValue }) {

  const { isReady } = useSelector(state => state.placeCoins)
  const dispatch = useDispatch();

  const remove = (event) => {
    dispatch(removeCoinsFromBoard(event.target.value))
  }

  return (
      <button
          className="removeButton"
          disabled={isReady}
          value={eventValue}
          onClick={(event) => remove(event)}>
        x
      </button>
  )
}