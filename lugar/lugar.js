const axios = require('axios');

const getLugarLatLong = async(direccion) => {
    const encodedUlr = encodeURI(direccion)

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUlr}`,
        headers: { 'X-RapidAPI-Key': 'a095b203eemsha197161e2c03711p14e87djsn8685546f05fe' }
    });

    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${direccion}`)
    }

    const data = resp.data.Results[0];
    const nombre = data.name;
    const lat = data.lat;
    const long = data.lon;

    return {
        nombre,
        lat,
        long
    }
}

module.exports = {
    getLugarLatLong
}