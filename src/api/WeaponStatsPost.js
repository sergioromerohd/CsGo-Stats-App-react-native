import '../vars/ServerBars.js'
const WeaponStatsPost = async (stats,userid) => {   
    
    const requestBody = {
        id_usuario: userid,
        weapon:stats.metadata.name, 
        img:stats.metadata.imageUrl,
        kills:stats.stats.kills.displayValue,
        shotsFired: stats.stats.shotsFired.displayValue,
        shotsHit: stats.stats.shotsHit.displayValue,
        shotsAccuracy: stats.stats.shotsAccuracy.displayValue,
    };

    fetch(serverurl+serverport+'/stats/postweapon', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'password': cs2statsPasword
        },
        body: JSON.stringify(requestBody)

    })
    
};

export default WeaponStatsPost;