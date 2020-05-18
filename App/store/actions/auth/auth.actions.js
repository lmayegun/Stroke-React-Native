export function login(payload){
  return{
    type:'ONE_TIME_PASS_LOGIN',
    payload
  }
}

export function createAccount(payload){
  return{
    type:'ONE_TIME_PASS_ACC',
    payload
  }
}
