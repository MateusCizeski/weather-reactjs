const KEY = '7e2ee61066684b0d88e125626233004';//criar conta no wheatherapi.com

const fetchData = async (city) => {
    const url = `http://api.weatherapi.com/v1/current.json?key=${KEY}&q=${city}&aqi=no`;
    const fetchResponse = await fetch(url);
    const data = await fetchResponse.json();

    return data;
}

export default fetchData;