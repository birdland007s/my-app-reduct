
const initialState = {
    markList: Array(9).fill(null),
    xIsNext: true
}

export const gameReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_MARK':
            const newState = Object.assign({}, state)
            newState.markList[action.payload.index] = action.payload.mark
            newState.xIsNext = !state.xIsNext
            return newState
        default:
            return state
    }
}