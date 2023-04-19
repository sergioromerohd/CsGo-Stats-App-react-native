package com.CsStats.CsStats.Mapper;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

import com.CsStats.CsStats.DTO.StatsUsuarioDTO;

public class UsuarioRowMapper implements RowMapper<StatsUsuarioDTO> {
    @Override
    public StatsUsuarioDTO mapRow(ResultSet rs, int rowNum) throws SQLException {
        StatsUsuarioDTO usuario = new StatsUsuarioDTO();
        usuario.setId(rs.getString("id"));
        usuario.setUser(rs.getString("user"));
        usuario.setAvatar(rs.getString("avatar"));
        usuario.setStatsID(rs.getInt("statsID"));
        usuario.setId_usuario(rs.getString("id_usuario"));
        usuario.setTimePlayedValue(rs.getString("timePlayedValue"));
        usuario.setScoreValue(rs.getString("scoreValue"));
        usuario.setKills(rs.getString("kills"));
        usuario.setDeaths(rs.getString("deaths"));
        usuario.setKd(rs.getString("kd"));
        usuario.setDamage(rs.getString("damage"));
        usuario.setHeadshosts(rs.getString("headshosts"));
        usuario.setDominations(rs.getString("dominations"));
        usuario.setShotsFired(rs.getString("shotsFired"));
        usuario.setShotsHit(rs.getString("shotsHit"));
        usuario.setShotsAccuracy(rs.getString("shotsAccuracy"));
        usuario.setSnipersKilled(rs.getString("snipersKilled"));
        usuario.setDominationOverkills(rs.getString("dominationOverkills"));
        usuario.setDominationRevenges(rs.getString("dominationRevenges"));
        usuario.setBombsPlanted(rs.getString("bombsPlanted"));
        usuario.setBombsDefused(rs.getString("bombsDefused"));
        usuario.setMoneyEarned(rs.getString("moneyEarned"));
        usuario.setHostagesRescued(rs.getString("hostagesRescued"));
        usuario.setMvp(rs.getString("mvp"));
        usuario.setWins(rs.getString("wins"));
        usuario.setTies(rs.getString("ties"));
        usuario.setMatchesPlayed(rs.getString("matchesPlayed"));
        usuario.setLosses(rs.getString("losses"));
        usuario.setRoundsPlayed(rs.getString("roundsPlayed"));
        usuario.setRoundsWon(rs.getString("roundsWon"));
        usuario.setWlPercentage(rs.getString("wlPercentage"));
        usuario.setHeadshotPct(rs.getString("headshotPct"));
        usuario.setFecha(rs.getString("fecha"));
        return usuario;
    }
}
