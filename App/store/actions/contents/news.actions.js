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
