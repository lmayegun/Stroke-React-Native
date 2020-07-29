export function getContents( payload ){
  return {
    type: 'GET_CONTENTS',
    payload
  }
}

export function getContentsByTypes( payload ){
  return {
    type: 'GET_CONTENTS_BY_TYPES',
    payload
  }
}

export function getEvents( payload ){
  return {
    type: 'GET_EVENTS',
    payload
  }
}

export function getContent( payload ){
  return {
    type: 'GET_CONTENT',
    payload
  }
}

export function cleanContent(){
  return {
    type: 'CLEAN_CONTENT',
  }
}

export function getAllVideos(){
  return {
    type: 'GET_ALL_VIDEOS'
  }
}

export function getAvideo( payload ){
  return {
    type: 'GET_VIDEO',
    payload
  }
}

export function cleanVideo(){
  return {
    type: 'CLEAN_VIDEO',
  }
}

export function searchContents( payload ){
  return {
    type: 'SEARCH_CONTENTS',
    payload
  }
}
