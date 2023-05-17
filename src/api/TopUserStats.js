import './../vars/ServerBars.js'
const fetchData = async (order) => {
    const response = await fetch(serverurl+serverport+'/api/topusers/'+order,{
        method: 'GET',
        headers: {
            'password': cs2statsPasword
        }
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