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
    case 'CLEAN_CONTENT':
    {
      return{
        contentState: null
      }
    }
    default:
    {
      return state;
    }
  }
}

export default content;
