const INATIAL_STATE = {
    isSinedIn: null,
    UserId:null
  };
  export default (state = INATIAL_STATE, action) => {
    switch (action.type) {
      case "SIGN_IN":
        return {...state, isSinedIn: true , UserId:action.payload}
      case "SIGN_OUT":
        return {...state, isSinedIn: false ,UserId:null}
  
      default:
        return state;
    }
  };
  