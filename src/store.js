import { configureStore } from '@reduxjs/toolkit'
import placeCoinsStore from "./stores/placeCoinsStore";


export default configureStore({
  reducer: {
    placeCoins: placeCoinsStore,
  }
})
