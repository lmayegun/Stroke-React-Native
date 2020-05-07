const initialState = {news:"I am news"}

const news = function( state = initialState, action ){
  switch( action.type )
  {
    case 'GET_ALL_NEWS_SUCCESS':
    {
      return{
        newsState: action.payload
      }
    }
    default:
    {
      return state;
    }
  }
}

export default news;
