package com.CsStats.CsStats.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.CsStats.CsStats.DTO.StatsUsuarioDTO;
import com.CsStats.CsStats.DTO.UsuariosDto;
import com.CsStats.CsStats.Mapper.UsuarioRowMapper;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

@RestController
public class UserController {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @PostMapping("/user")
    public String PostUser(@RequestBody String request) {

        ObjectMapper om = new ObjectMapper();
        try {
            UsuariosDto user = om.readValue(request, UsuariosDto.class);
            String sql = String.format("Insert into usuarios(id,user,avatar) values ('%s','%s','%s')",
                    user.getPlatformUserId(),
                    user.getPlatformUserHandle(), user.getAvatarUrl());
            jdbcTemplate.execute(sql);
            return "Done";
        } catch (Exception e) {

            if (e.getMessage().contains("Duplicate entry")) {
                return "Dupe";
            } else {
                return e.getMessage();
            }
        }

    }
    
    @GetMapping("/topusers")
    public ResponseEntity<List<StatsUsuarioDTO>> obtenerUsuarios() throws JsonProcessingException {
        String sql = "SELECT ROW_NUMBER() OVER (ORDER BY s.KD DESC) AS numFila, u.*, s.* FROM usuarios u INNER JOIN mainstats s ON u.id = s.id_usuario WHERE s.fecha =(SELECT MAX(fecha) FROM mainstats WHERE id_usuario = u.id ) GROUP BY u.id ORDER BY `numFila` ASC LIMIT 100";
        List<StatsUsuarioDTO> usuarios = jdbcTemplate.query(sql, new UsuarioRowMapper());
        return ResponseEntity.ok().contentType(MediaType.APPLICATION_JSON).body(usuarios);
        };
    }

