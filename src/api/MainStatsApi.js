const fetchData = async (nombre) => {
    const response = await fetch('https://public-api.tracker.gg/v2/csgo/standard/profile/steam/' + nombre,{
        method: 'GET',
        headers: {
            'TRN-Api-Key':''
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