export function getNewsContent(){
  return {
    type: 'GET_ALL_NEWS',
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
