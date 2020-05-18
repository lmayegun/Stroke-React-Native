const initialState = {auth:false}

const auth = function( state = initialState, action ){
  switch( action.type )
  {
    case 'ONE_TIME_PASS_LOGIN_SUCCESS':
    {
      return{
        authState: action.payload
      }
    }
    default:
    {
      return state;
    }
  }
}

export default auth;
