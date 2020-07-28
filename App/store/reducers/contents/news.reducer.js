const initialState = {news:"I am news"}

const news = function( state = initialState, action ){
  switch( action.type )
  {
    case 'GET_ALL_NEWS_SUCCESS':
    {
      return{
        newsState: action.payload
      }
      break;
    }
    case 'GET_EVENTS_SUCCESS':
    {
      return{
        ...state, 
        eventsState : action.payload
      }
    }
    case 'GET_CONTENTS_TYPE_SUCCESS':
    {
      return{
        ...state, 
        contentTypeState : action.payload
      }
    }
    default:
    {
      return state;
    }
  }
}

export default news;
