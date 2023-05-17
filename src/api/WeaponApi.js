import './../vars/ServerBars.js'
const fetchData = async (nombre) => {
    const response = await fetch('https://public-api.tracker.gg/v2/csgo/standard/profile/steam/'+nombre+'/segments/weapon',{
        method: 'GET',
        headers: {
            'TRN-Api-Key': TrnApiKey
        }
    });
    const data = await response.json();
    if (await data.data) {
        return data.data;
    }else{
    return null;
    }
  };

  export default fetchData;