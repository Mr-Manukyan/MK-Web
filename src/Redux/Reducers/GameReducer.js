const SET_PLAYER = 'APP/GAME/SET_PLAYER'

const initialState = {
  player: 1,
}

export const gameReducer = (state = initialState, action) => {
  switch (action.type) {

    case SET_PLAYER:
      return {
        ...state,
        player: action.player,
      }

    default:
      return state
  }
}

//Action Creators

export const gameActions = {

  setPlayer: (player) =>
  ({
    type: SET_PLAYER,
    player,
  }),
}


