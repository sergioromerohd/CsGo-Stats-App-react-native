const MainStatsPost = async (stats) => {

    const userid=stats.platformInfo.platformUserId
    const data=stats.segments[0].stats

    const requestBody = {
        id_usuario: userid,
        timePlayedValue: data.timePlayed.displayValue,
        scoreValue: data.score.displayValue,
        kills: data.kills.displayValue,
        deaths: data.deaths.displayValue,
        kd: data.kd.displayValue,
        damage: data.damage.displayValue,
        headshosts: data.headshots.displayValue,
        dominations: data.dominations.displayValue,
        shotsFired: data.shotsFired.displayValue,
        shotsHit: data.shotsHit.displayValue,
        shotsAccuracy: data.shotsAccuracy.displayValue,
        snipersKilled: data.snipersKilled.displayValue,
        dominationOverkills: data.dominationOverkills.displayValue,
        dominationRevenges: data.dominationRevenges.displayValue,
        bombsPlanted: data.bombsPlanted.displayValue,
        bombsDefused: data.bombsDefused.displayValue,
        moneyEarned: data.moneyEarned.displayValue,
        hostagesRescued: data.hostagesRescued.displayValue,
        mvp: data.mvp.displayValue,
        wins: data.wins.displayValue,
        ties: data.ties.displayValue,
        matchesPlayed: data.matchesPlayed.displayValue,
        losses: data.losses.displayValue,
        roundsPlayed: data.roundsPlayed.displayValue,
        roundsWon: data.roundsWon.displayValue,
        wlPercentage: data.wlPercentage.displayValue,
        headshotPct: data.headshotPct.displayValue
    };

    fetch('http://localhost/stats', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)

    })
};

export default MainStatsPost;