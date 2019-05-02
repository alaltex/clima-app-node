const axios = require('axios');

const getClima = async(lat, long) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=e7e32c05251465a9b450215897fc2c03&units=metric`)

    return resp.data.main.temp;
}

module.exports = {
    getClima
}