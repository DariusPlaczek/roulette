import {useSelector} from "react-redux";


export default function JetonStyle({bgColor, title, eventValue, onClickEvent}) {

  const { isReady } = useSelector(state => state.placeCoins)

  return (
      <button
        value={eventValue}
        className="w-24 h-24 flex justify-center items-center rounded-full border-8 border-dashed shadow-md shadow-black m-2 text-2xl text-white"
        style={{backgroundColor: bgColor}}
        onClick={onClickEvent}
        disabled={isReady}
      >
        {title}

      </button>
  )

}