const initState = {
    user: null,
  };
  
  const loginReducer = (state = initState, action) => {
    switch (action.type) {
      case "LOGIN_SUCCESS":
        return {
          ...state,
          user: action.userName,
        };
      case "LOGOUT_SUCCESS":
        return {
          ...state,
          user: null,
        };
      default:
        return state;
    }
  };
  
  export default loginReducer;