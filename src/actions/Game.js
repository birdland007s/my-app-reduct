export const markSquare = (index, mark) => {
    return {
        type: 'ADD_MARK',
        payload: { 
            mark: mark,
            index: index
         }
    }
}

