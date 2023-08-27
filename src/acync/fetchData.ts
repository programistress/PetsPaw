// import { Ipet } from "../types/types";


// const fetchCatData = () => {
//  return async function apiCall() {
//   try {
//   const response = await fetch('https://api.thecatapi.com/v1/breeds?limit=15', {
//       headers: {
//         'x-api-key': 'live_IvsY9IWZY2HevmQgUSlWy0ewC7J8szAIw2I0NWsSBkZ0TWuRyspIvq92umxAziyE'
//       }
//     }).then(response => response.json().then(data =>({
//       data: data,
//       status: response.status
//     })))


//     response.data.forEach((item: any) => {
//       if (!item['image'] || !item.image) {
//           item.image = { url: '/placeholder-photo.svg' };
//       }
//       // /. response validation
//       const catData: Ipet[] = [];
//       catData.push({
//         id: item.id,
//         image: item.image.url,
//         name: item.name,
//         location: item.origin,
//         isFavorite: false,
//         temperament: item.temperament,
//         lifespan: item.lifespan,
//         weight: item.weight,
//       });
//   });
//   } 
//   catch(e) {
//     console.log(e)
//   }
// }
// }
// export default fetchCatData