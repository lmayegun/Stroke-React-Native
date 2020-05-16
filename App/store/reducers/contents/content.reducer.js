const initialState = {news:"I am news"}

const content = function( state = initialState, action ){
  switch( action.type )
  {
    case 'GET_CONTENT_SUCCESS':
    {
      return{
        contentState: action.payload
      }
    }
    default:
    {
      return state;
    }
  }
}

export default content;
