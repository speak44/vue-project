// import { resolve } from "upath";
import axios from 'axios'
export function getCourses(){
  return axios.get('/api/courses').then((res) => {
    return res.data
  })
}
// export function getCourses(){
//   return new Promise(resolve =>{
//     setTimeout(() => {
//       resolve(
//         [
//           {
//             name:'course1111',
//             id:'1'
//           },
//           {
//             name:'course2222',
//             id:'2'
//           }
//         ]
//       )
//     }, 2000);
//   })
// }