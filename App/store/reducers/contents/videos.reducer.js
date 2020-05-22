const initialState = {news:"I am videos"}

const videos = function( state = initialState, action ){
  switch( action.type )
  {
    case 'GET_VIDEOS_SUCCESS':
    {
      return{
        videosState: action.payload
      }
    }
    default:
    {
      return state;
    }
  }
}

export default videos;
