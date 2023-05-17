package com.CsStats.CsStats.Mapper;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

import com.CsStats.CsStats.DTO.StatsMapUsuarioDTO;

public class MapUsuarioRowMapper implements RowMapper<StatsMapUsuarioDTO> {
    @Override
    public StatsMapUsuarioDTO mapRow(ResultSet rs, int rowNum) throws SQLException {
        StatsMapUsuarioDTO usuario = new StatsMapUsuarioDTO();
        usuario.setNumFila(rs.getString("num_fila"));
        usuario.setId_usuario(rs.getString("id_usuario"));
        usuario.setUser(rs.getString("user"));
        usuario.setAvatar(rs.getString("avatar"));
        usuario.setMapa(rs.getString("mapa"));
        usuario.setImg(rs.getString("img"));
        usuario.setRounds(rs.getString("rounds"));
        usuario.setWins(rs.getString("wins"));
        usuario.setFecha(rs.getString("fecha"));
        return usuario;
    }
}
