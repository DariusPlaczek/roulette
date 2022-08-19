import { v4 as uuidv4 } from 'uuid'

import {useSelector} from "react-redux";
import useHandColorCoins from "../../useHooks/useHandColorCoins";

export default function HandJetons() {

  const { coinsInMyHand } = useSelector(state => state.placeCoins)
  const handCoins = useHandColorCoins(coinsInMyHand)


  return (
    <section id="handcoins" className="absolute left-0 bottom-0">
      {handCoins.reverse()?.map((value =>
        <div
            key={uuidv4()}
            className="flex justify-center items-center w-16 h-16 bg-yellow-200 border-4 rounded-full border-dashed shadow-md shadow-black m-2 text-xl text-white opacity-40"
            style={{backgroundColor: value.color}}
            >
            {value.coin}
        </div>
      ))}
    </section>
  )
}


// className="w-24 h-24 flex justify-center items-center rounded-full border-8 border-dashed shadow-md shadow-black m-2 text-2xl text-white"
// style={{backgroundColor: bgColor}}