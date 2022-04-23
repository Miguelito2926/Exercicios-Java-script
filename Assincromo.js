const BASE_URL= 'HTTPS://thatcopy.pw/catapi/rest';

const   getCats = async () =>{
   try {
    const data = await fetch (BASE_URL);
    const json = await data.json();

    return json.webpurl;

   } catch (error) {
       console.log(error.message);
       
   }

};

