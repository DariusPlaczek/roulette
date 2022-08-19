import { useSelector } from "react-redux";

export default function GridButton({ value, title = "", onClickEvent, bgColor = "transparent" }) {

  const { isReady } = useSelector(state => state.placeCoins)

  return (
    <button
      value={value}
      className="h-full w-full font-bold z-10 text-3xl uppercase "
      style={{ backgroundColor: bgColor, writingMode: 'vertical-rl' }}
      onClick={onClickEvent}
      disabled={isReady}
    >
      {title}
    </button>
  )
}