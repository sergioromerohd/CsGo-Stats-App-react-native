import '../vars/ServerBars.js'
const GetMApStats = async (user_id) => {
    const response = await fetch(serverurl + serverport + '/stats/getmap/' + user_id, {
        method: 'GET',
        headers: {
            'password': cs2statsPasword
        }
    });
    const data = await response.json();
    if (data[0].id_usuario != undefined) {
        return data;
    } else {
        return null;
    }
};

export default GetMApStats;