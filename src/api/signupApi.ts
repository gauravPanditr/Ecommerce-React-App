import { User } from "../types/signupCredentails";
import  axios  from "axios";

export const signup=async(userData:User)=>{
      try {
            const respone=await  axios.post('https://fakestoreapi.com/users',userData);
            console.log(respone);
            
             return respone;
            
      } catch (error) {
            console.log((error as Error).message);
            
      }
}