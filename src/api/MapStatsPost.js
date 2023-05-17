import './../vars/ServerBars.js'
const MapStatsPost = async (stats,userid) => {
    
    const requestBody = {
        id_usuario: userid,
        mapa: stats.metadata.name,
        img: stats.metadata.imageUrl,
        rounds: stats.stats.rounds.displayValue,
        wins: stats.stats.wins.displayValue
    };

    fetch(serverurl+serverport+'/stats/postmap', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'password': cs2statsPasword
        },
        body: JSON.stringify(requestBody)

    })
    
};

export default MapStatsPost;