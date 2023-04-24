const fetchData = async (userName) => {
    const response = await fetch('https://public-api.tracker.gg/v2/csgo/standard/search?platform=steam&query=' + userName ,{
      method: 'GET',
      headers: {
          'TRN-Api-Key':'778d5226-abbd-468e-a38f-24ad7011e4cb'
      }
    });
    const data = await response.json();
    if (await data.data) {
      if (data.data.length > 0&&data.data!=undefined) {
        return data;
      }else{
        return null;
      }
    }else if (data.message) {
    return data;
    }else{
      return null;
    }
  };

  export default fetchData;