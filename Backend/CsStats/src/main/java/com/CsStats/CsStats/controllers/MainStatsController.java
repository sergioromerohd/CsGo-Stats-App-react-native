package com.CsStats.CsStats.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.CsStats.CsStats.DTO.MainStatsDto;
import com.fasterxml.jackson.databind.ObjectMapper;

@RestController
public class MainStatsController {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @PostMapping("/stats")
    public String PostMainsStats(@RequestBody String request) {
        ObjectMapper om = new ObjectMapper();

        try {
            MainStatsDto stats = om.readValue(request, MainStatsDto.class);
            String sql1 = String.format(
                    "INSERT INTO mainstats(id_usuario,timePlayedValue,scoreValue,kills,deaths,kd,damage,headshosts,dominations,shotsFired,shotsHit,shotsAccuracy,snipersKilled,dominationOverkills,dominationRevenges,bombsPlanted,bombsDefused,moneyEarned,hostagesRescued,mvp,wins,ties,matchesPlayed,losses,roundsPlayed,roundsWon,wlPercentage,headshotPct) values ('%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s')",
                    stats.getId_usuario(),
                    stats.getTimePlayedValue(),
                    stats.getScoreValue(),
                    stats.getKills(),
                    stats.getDeaths(),
                    stats.getKd(),
                    stats.getDamage(),
                    stats.getHeadshosts(),
                    stats.getDominations(),
                    stats.getShotsFired(),
                    stats.getShotsHit(),
                    stats.getShotsAccuracy(),
                    stats.getSnipersKilled(),
                    stats.getDominationOverkills(),
                    stats.getDominationRevenges(),
                    stats.getBombsPlanted(),
                    stats.getBombsDefused(),
                    stats.getMoneyEarned(),
                    stats.getHostagesRescued(),
                    stats.getMvp(),
                    stats.getWins(),
                    stats.getTies(),
                    stats.getMatchesPlayed(),
                    stats.getLosses(),
                    stats.getRoundsPlayed(),
                    stats.getRoundsWon(),
                    stats.getWlPercentage(),
                    stats.getHeadshotPct());
            jdbcTemplate.execute(sql1);
            System.out.println(sql1);
            return "Done";
        } catch (Exception e) {
            System.out.println(e.getMessage());
            return e.getMessage();
        }
    }
}