const fetchData = async () => {
    const response = await fetch('http://192.168.1.102:8080/topusers',{
        method: 'GET',
      });
    const data= await response.json();
    if (await data[0]) {
        if (data[0].id_usuario!=undefined) {
            return data;
        }else{
            return null;
        }
      
    }else{
    return null;
    }
};

export default fetchData;