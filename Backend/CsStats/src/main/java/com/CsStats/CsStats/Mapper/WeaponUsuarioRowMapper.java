package com.CsStats.CsStats.Mapper;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

import com.CsStats.CsStats.DTO.StatsWeaponUsuarioDTO;


public class WeaponUsuarioRowMapper implements RowMapper<StatsWeaponUsuarioDTO> {
    @Override
    public StatsWeaponUsuarioDTO mapRow(ResultSet rs, int rowNum) throws SQLException {
        StatsWeaponUsuarioDTO usuario = new StatsWeaponUsuarioDTO();
        usuario.setNumFila(rs.getString("num_fila"));
        usuario.setId_usuario(rs.getString("id_usuario"));
        usuario.setUser(rs.getString("user"));
        usuario.setAvatar(rs.getString("avatar"));
        usuario.setWeapon(rs.getString("weapon"));
        usuario.setImg(rs.getString("img"));
        usuario.setKills(rs.getString("kills"));
        usuario.setShotsFired(rs.getString("shotsFired"));
        usuario.setShotsHit(rs.getString("shotsHit"));
        usuario.setShotsAccuracy(rs.getString("shotsAccuracy"));
        usuario.setFecha(rs.getString("fecha"));
        return usuario;
    }
}
