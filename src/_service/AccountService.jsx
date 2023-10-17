
let savetoken=(token)=>{
    localStorage.setItem('token',token)
}
let logout =()=>{
    localStorage.removeItem('token')

}

let islogged =()=>{
   let token= localStorage.getItem('token')
    return !!token
}
export default  AccountService={
  savetoken,logout,islogged
}
