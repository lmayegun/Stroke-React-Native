const initialState = {news:"I am videos"}

const videos = function( state = initialState, action ){
  switch( action.type )
  {
    case 'GET_VIDEOS_SUCCESS':
    {
      return{
        ...state,
        videosState: action.payload
      }
    }
    case 'GET_VIDEO_SUCCESS':
    {
      return{
        ...state,
        videoState: action.payload
      }
    }
    default:
    {
      return state;
    }
  }
}

export default videos;
