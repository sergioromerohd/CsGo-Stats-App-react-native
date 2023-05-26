import './../vars/ServerBars.js'
const InventoryApiSteam= async (nombre) => {

    const response1 = await fetch('https://steamcommunity.com/inventory/'+nombre+'/730/2?l=english&count=5000',{
        method: 'GET',
        headers: {
            'x-webapi-key': SteamApiKey
        }
    });
    const data = await response1.json();
    if (await data!=null) {
        return data;
    }else{
    const inventario=require('../Json/InventoryRafa.json');
    return inventario;
  }
};
export default InventoryApiSteam;