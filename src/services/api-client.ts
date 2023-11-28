import axios from "axios"; //Axios is for sending http request

//We custumize our axios instace,
export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key:'c6fa2531ff2444b5b8e09ea664126156' // so the key will be included in every http request
    }
})
