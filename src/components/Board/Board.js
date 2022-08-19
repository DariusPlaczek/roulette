import React from 'react';

import { useSelector } from 'react-redux'
import EvenButton from './Grid/EvenButton';
import HalfButton from './Grid/HalfButton';
import NoirButton from './Grid/NoirButton';
import NumberGridButton from './Grid/NumberGridButton';
import ThirdButton from './Grid/ThirdButton';

import { config } from "../../config";


export default function Board() {

  const { gameBoardNumbers }  = useSelector(state => state.placeCoins)

  return (

<section className="w-1/3 h-4/5 rounded-3xl table-container py-5 drop-shadow-xl">

  <div className="angry-grid">
    <div id="item-0">

      <div className="num-angry-grid">
        {gameBoardNumbers?.map((value, key) =>
          <NumberGridButton key={value._id} value={value} id={key} />
      )}
      </div>
    </div>
    <div id="item-1"><HalfButton eventValue="firsthalf" title="passe" /></div>
    <div id="item-2"><EvenButton eventValue="pair"  /></div>
    <div id="item-3"><NoirButton eventValue='black'/></div>
    <div id="item-4"><HalfButton eventValue="secondhalf" title="manque"/></div>
    <div id="item-5"><EvenButton eventValue="impair"  /></div>
    <div id="item-6"><NoirButton eventValue='red'/></div>
    <div id="item-7">
      <div className="flex flex-row w-full">
        {config.PDM.map(value =>
            <ThirdButton key={value._id} eventValue={value.eventValue} title={value.title} />
        )}
      </div>
    </div>
    <div id="item-8">
      <div className="flex flex-row w-full">
        {config.PDM.reverse().map(value =>
            <ThirdButton key={`reversed-${value._id}`} eventValue={value.eventValue} title={value.title} />
        )}
      </div>
    </div>
  </div>

</section>

  )
}