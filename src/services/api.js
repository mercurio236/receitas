
import axios from 'axios';

// para rodar a api json-server --watch -d 180 --host 192.168.15.15 db.json

const api = axios.create({
    baseURL:'http://192.168.15.15:3000'
})

export default api;