const initialStates = {
  count: 0
};

const CountReducer = (state = initialStates, action) => {
  switch (action.type) {
    case "ADD_COUNT": {
        return {
          ...state,
          count : state.count + 1
        }
    }
    case "REMOVE_COUNT": {
        return {

        }
    }
    default:
      return state;
  }
};

export default CountReducer
