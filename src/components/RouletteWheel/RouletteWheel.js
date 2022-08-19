import {useState} from "react";

import {data} from "../../rouletteData";
import { Wheel } from 'react-custom-roulette'

import {calculateProfitProps, setReady} from "../../stores/placeCoinsStore";
import {useDispatch, useSelector} from "react-redux";


export default function RouletteWheel() {

  const dispatch = useDispatch()
  const { isReady } = useSelector(state => state.placeCoins)

  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);


  const handleSpinClick = () => {
    dispatch(setReady(true));

    const winningNumber = Math.floor(Math.random() * data.length);

    setPrizeNumber(winningNumber);
    setMustSpin(true);

    setTimeout(() => {
      dispatch(calculateProfitProps({winningNumber: data[winningNumber].id, winningColor: data[winningNumber].color}))
      dispatch(setReady(false));
    }, 12000);

  };

  return (
      <div className="w-[475] h-[475] rounded-full table-container -mr-16">
      <Wheel
          mustStartSpinning={mustSpin}
          prizeNumber={prizeNumber}
          data={data}
          outerBorderColor={["#f2f2f2"]}
          outerBorderWidth={5}
          innerBorderColor={["#f2f2f2"]}
          radiusLineColor={["#dedede"]}
          radiusLineWidth={[2]}
          innerBorderWidth={5}
          innerRadius={40}
          textColors={["#ffffff"]}
          fontSize={[16]}
          textDistance={85}
          perpendicularText={[true]}
          onStopSpinning={() => {
            setMustSpin(false);
          }}
          backgroundColors={[
            "#d30a02",
            "#333",
          ]}
      />

    <button className="absolute w-48 h-48 spin-button-gardient text-white rounded-full text-5xl" disabled={isReady} onClick={handleSpinClick}>SPIN</button>
  </div>
  );
}

