import { createSlice } from '@reduxjs/toolkit'
import { config } from "../config";

export const placeCoinsStore = createSlice({
  name: 'placeCoins',
  initialState: {
    isReady: false,
    coins: config.totalCoins,
    winningProps: [],
    coinsInMyHand: [],
    gameBoardNumbers: config.board,
    gameBoardColors: { value: null, coins: 0 },
    gameBoardEven: { value: null, coins: 0 },
    gameBoardHalf: { value: null, coins: 0 },
    gameBoardThird: { value: null, coins: 0 },
    mySetGameProps: [],
  },

  reducers: {

    setReady: (state, action) => {
      state.isReady = action.payload
    },

    setCoins: (state, action) => {

      const index = state.gameBoardNumbers.findIndex(value => value.number === action.payload.id)

      if (state.coinsInMyHand.length === 0)
        return;

      if (state.gameBoardNumbers[index].coins === 0 && state.mySetGameProps.length >= 6) {
        return
      }

      state.gameBoardNumbers[index].coins += action.payload.coins
      state.coinsInMyHand.shift()

    },

    setColor: (state, action) => {
      switch (action.payload.value) {
        case "black":
          state.gameBoardColors = { value: action.payload.value, coins: state.gameBoardColors.coins += action.payload.coins }
          return;

        default:
          state.gameBoardColors = { value: action.payload.value, coins: state.gameBoardColors.coins += action.payload.coins }
          return;
      }
    },

    setEven: (state, action) => {
      switch (action.payload.value) {
        case "pair":
          state.gameBoardEven = { value: action.payload.value, coins: state.gameBoardEven.coins += action.payload.coins }
          return;

        default:
          state.gameBoardEven = { value: action.payload.value, coins: state.gameBoardEven.coins += action.payload.coins }
          return;
      }
    },

    setHalf: (state, action) => {
      switch (action.payload.value) {
        case "secondhalf":
          state.gameBoardHalf = { value: action.payload.value, coins: state.gameBoardHalf.coins += action.payload.coins }
          return;

        default:
          state.gameBoardHalf = { value: action.payload.value, coins: state.gameBoardHalf.coins += action.payload.coins }
          return;
      }
    },

    setThird: (state, action) => {
      switch (action.payload.value) {
        case "twoThird":
          state.gameBoardThird = { value: action.payload.value, coins: state.gameBoardThird.coins += action.payload.coins }
          return;

        case "lastThird":
          state.gameBoardThird = { value: action.payload.value, coins: state.gameBoardThird.coins += action.payload.coins }
          return;

        default:
          state.gameBoardThird = { value: action.payload.value, coins: state.gameBoardThird.coins += action.payload.coins }
          return;
      }
    },

    setNumbers: (state, action) => {
      if (state.mySetGameProps.some(value => value.id === action.payload.id)) {
        const index = state.mySetGameProps.findIndex(value => value.id === action.payload.id)
        state.mySetGameProps[index].coins += action.payload.coins
        return
      }

      if (state.mySetGameProps.length <= 6) {
        state.mySetGameProps.push(action.payload)
      }

    },

    removeCoin: (state, action) => {
      state.coins -= action.payload
    },

    addCoinsToTheHand: (state, action) => {
      state.coinsInMyHand.push(action.payload)
    },

    removeCoinFromTheHAnd: state => {
      state.coinsInMyHand.shift()
    },

    removeCoinsFromBoard: (state, action) => {
      const value = action.payload

      if (state.gameBoardColors.value === value) {
        state.coins += state.gameBoardColors.coins
        state.gameBoardColors = { value: null, coins: 0 }
      }

      if (state.gameBoardEven.value === value) {
        state.coins += state.gameBoardEven.coins
        state.gameBoardEven = { value: null, coins: 0 }
      }

      if (state.gameBoardHalf.value === value) {
        state.coins += state.gameBoardHalf.coins
        state.gameBoardHalf = { value: null, coins: 0 }
      }

      if (state.gameBoardThird.value === value) {
        state.coins += state.gameBoardThird.coins
        state.gameBoardThird = { value: null, coins: 0 }
      }

    },

    removeCoinFromNumber: (state, action) => {
      const value = parseInt(action.payload);
      const copyGameProps = state.mySetGameProps
      state.coins += state.gameBoardNumbers[value].coins;
      state.gameBoardNumbers[value].coins = 0;

      const index = state.mySetGameProps.findIndex(event => event.id === value)

      copyGameProps.splice(index, 1)
      state.mySetGameProps = copyGameProps;
    },

    calculateProfitProps: (state, action) => {
      const winningProps = action.payload.winningNumber

      const firstHalf = RegExp(/(^[1-9]$)|(^1[0-8]$)/)
      const secondHalf = RegExp(/(^19$)|(^2[0-9]$)|(^3[0-6]$)/)

      const oneThirdsPart = RegExp(/(^[1-9]$)|(^1[0-2]$)/)
      const twoThirdsPart = RegExp(/(^1[3-9]$)|(^2[0-4]$)/)
      const threeThirdsPart = RegExp(/(^2[5-9]$)|(^3[0-6]$)/)

      if (state.mySetGameProps.some(value => value.id === winningProps)) {
        const index = state.mySetGameProps.findIndex(value => value.id === winningProps)
        const coinValue = parseInt(state.mySetGameProps[index].coins)

        state.coins = winCalculation(state.coins, coinValue, 36)

      }

      if (state.gameBoardColors.value === action.payload.winningColor) {
        state.coins = winCalculation(state.coins, state.gameBoardColors.coins, 2)
      }

      if (winningProps % 2 === 0 && state.gameBoardEven.value === "pair") {
        state.coins = winCalculation(state.coins, state.gameBoardEven.coins, 2)
      }

      if (winningProps % 2 !== 0 && state.gameBoardEven.value === "impair") {
        state.coins = winCalculation(state.coins, state.gameBoardEven.coins, 2)
      }

      if (firstHalf.test(winningProps) && state.gameBoardHalf.value === "firsthalf") {
        state.coins = winCalculation(state.coins, state.gameBoardHalf.coins, 2)
      }

      if (secondHalf.test(winningProps) && state.gameBoardHalf.value === "secondhalf") {
        state.coins = winCalculation(state.coins, state.gameBoardHalf.coins, 2)
      }

      if (oneThirdsPart.test(winningProps) && state.gameBoardThird.value === "firstThird") {
        state.coins = winCalculation(state.coins, state.gameBoardThird.coins, 3)
      }

      if (twoThirdsPart.test(winningProps) && state.gameBoardThird.value === "twoThird") {
        state.coins = winCalculation(state.coins, state.gameBoardThird.coins, 3)
      }

      if (threeThirdsPart.test(winningProps) && state.gameBoardThird.value === "lastThird") {
        state.coins = winCalculation(state.coins, state.gameBoardThird.coins, 3)
      }

      state.winningProps = []
      state.gameBoardNumbers = config.board
      state.mySetGameProps = []
      state.gameBoardColors = { value: null, coins: 0 }
      state.gameBoardEven = { value: null, coins: 0 }
      state.gameBoardHalf = { numbers: null, coins: 0 }
      state.gameBoardThird = { value: null, coins: 0 }
    },

  }
})

const winCalculation = (allCoins, addCoin, multi) => {
  return allCoins += multi * addCoin
}


export const {
  setReady,
  setCoins,
  addCoinsToTheHand,
  removeCoin,
  removeCoinFromTheHAnd,
  removeCoinsFromBoard,
  removeCoinFromNumber,
  calculateProfitProps,
  setNumbers,
  setColor,
  setEven,
  setHalf,
  setThird } = placeCoinsStore.actions
export default placeCoinsStore.reducer
