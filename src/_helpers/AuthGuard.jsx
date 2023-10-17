import { Navigate } from "react-router-dom";
import accountService from "../_service/account.service";

const AuthGuard=({children})=>{
 

    if(!accountService.islogged()){ 
        return <Navigate to="/connxion"></Navigate>
    }
    return children
}
export default AuthGuard;