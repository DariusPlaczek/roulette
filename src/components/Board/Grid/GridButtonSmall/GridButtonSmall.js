import {useSelector} from "react-redux";


export default function GridButtonSmall({ value, title = "", subTitle = "", onClickEvent }) {

  const { isReady } = useSelector(state => state.placeCoins)

  return (
      <button
          value={value}
          className="h-full w-full font-bold z-10 uppercase"
          onClick={onClickEvent}
          disabled={isReady}
      >
        {title} <br/>
        {subTitle}
      </button>
  )
}