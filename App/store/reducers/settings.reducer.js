
const initialState = {}

const appSettings = function( state = initialState, action ){
  switch( action.type )
  {
    case "TEST":
    {
      return{
        settingsState: action.payload
      }
    }
    default:
    {
      return state;
    }
  }
}

export default appSettings;
