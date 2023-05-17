package com.CsStats.CsStats.controllers;

import java.util.Enumeration;
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
import com.CsStats.CsStats.vars.vars;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import jakarta.servlet.http.HttpServletRequest;

@RestController
public class UserController {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @PostMapping("/user")
    public String PostUser(@RequestBody String request, HttpServletRequest request2) {

        ObjectMapper om = new ObjectMapper();
        Enumeration<String> headerNames = request2.getHeaderNames();
        while (headerNames.hasMoreElements()) {
            String headerName = headerNames.nextElement();
            String headerValue = request2.getHeader(headerName);
            if (headerName.equals("password") && headerValue.equals(vars.getPassword)) {
                try {
                    UsuariosDto user = om.readValue(request, UsuariosDto.class);
                    String sql = String.format("Insert into usuarios(id,user,avatar) values ('%s','%s','%s')",
                            user.getPlatformUserId(),
                            user.getPlatformUserHandle(), user.getAvatarUrl());
                    jdbcTemplate.execute(sql);
                    return "Done";
                } catch (Exception e) {

                    if (e.getMessage().contains("Duplicate entry")) {
                        try {
                            UsuariosDto user = om.readValue(request, UsuariosDto.class);
                            String sql = String.format(
                                    "UPDATE usuarios SET user = '%s', avatar = '%s' WHERE usuarios.id='%s'",
                                    user.getPlatformUserHandle(),
                                    user.getAvatarUrl(),
                                    user.getPlatformUserId());
                            jdbcTemplate.execute(sql);
                            return "Dupe";
                        } catch (Exception e2) {
                            return e2.getMessage();
                        }
                    } else {
                        return e.getMessage();
                    }
                }
            }
        }
        return "401";

    }

    @GetMapping("/api/topusers/kd")
    public ResponseEntity<List<StatsUsuarioDTO>> obtenerUsuarioskd(HttpServletRequest request)
            throws JsonProcessingException {
        Enumeration<String> headerNames = request.getHeaderNames();
        while (headerNames.hasMoreElements()) {
            String headerName = headerNames.nextElement();
            String headerValue = request.getHeader(headerName);
            if (headerName.equals("password") && headerValue.equals(vars.getPassword)) {
                String sql = "SELECT * FROM `gettop_kd`";
                List<StatsUsuarioDTO> usuarios = jdbcTemplate.query(sql, new UsuarioRowMapper());
                return ResponseEntity.ok().contentType(MediaType.APPLICATION_JSON).body(usuarios);
            }
        }
        // retuen 401 si la contraseña es incorrecta
        return ResponseEntity.status(401).build();
    };

    @GetMapping("/api/topusers/winp")
    public ResponseEntity<List<StatsUsuarioDTO>> obtenerUsuarioswin(HttpServletRequest request)
            throws JsonProcessingException {
        Enumeration<String> headerNames = request.getHeaderNames();
        while (headerNames.hasMoreElements()) {
            String headerName = headerNames.nextElement();
            String headerValue = request.getHeader(headerName);
            if (headerName.equals("password") && headerValue.equals(vars.getPassword)) {
                String sql = "SELECT * FROM `gettop_winp`";
                List<StatsUsuarioDTO> usuarios = jdbcTemplate.query(sql, new UsuarioRowMapper());
                return ResponseEntity.ok().contentType(MediaType.APPLICATION_JSON).body(usuarios);
            }
        }
        // retuen 401 si la contraseña es incorrecta
        return ResponseEntity.status(401).build();
    };

    @GetMapping("/api/topusers/acu")
    public ResponseEntity<List<StatsUsuarioDTO>> obtenerUsuariosacu(HttpServletRequest request)
            throws JsonProcessingException {
        Enumeration<String> headerNames = request.getHeaderNames();
        while (headerNames.hasMoreElements()) {
            String headerName = headerNames.nextElement();
            String headerValue = request.getHeader(headerName);
            if (headerName.equals("password") && headerValue.equals(vars.getPassword)) {
                String sql = "SELECT * FROM `gettop_acu`";
                List<StatsUsuarioDTO> usuarios = jdbcTemplate.query(sql, new UsuarioRowMapper());
                return ResponseEntity.ok().contentType(MediaType.APPLICATION_JSON).body(usuarios);
            }
        }
        // retuen 401 si la contraseña es incorrecta
        return ResponseEntity.status(401).build();
    };

    
}
