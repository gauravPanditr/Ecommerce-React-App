// import { useEffect, useState } from "react"
// import axios from 'axios';
// import { Product } from "../types/product"
// import { FetchState } from '../types/fetchState'; 

// export const useProductFetchById=(id:number)=>{
//       const [state,setState]=useState<FetchState<Product[]>>({
//             data: null,
//             loading: true,
//             error: null,
//           });
//           useEffect(() => {
//             const fetchProducts = async () => {
//               try {
//                 const response = await axios.get<Product[]>('https://fakestoreapi.com/products/${id}');
//                 setState({ data: response.data, loading: false, error: null });
//               } catch (error) {
//                 console.log(error);
                
//               }
//             };
        
//             fetchProducts();
//           }, []);
//           return state;
// }