package com.CsStats.CsStats.controllers;

import java.util.Enumeration;
import java.util.List;

import org.codehaus.jackson.JsonProcessingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.CsStats.CsStats.DTO.StatsWeaponDTO;
import com.CsStats.CsStats.DTO.StatsWeaponUsuarioDTO;
import com.CsStats.CsStats.Mapper.WeaponUsuarioRowMapper;
import com.CsStats.CsStats.vars.vars;
import com.fasterxml.jackson.databind.ObjectMapper;

import jakarta.servlet.http.HttpServletRequest;

@RestController
public class WeaponStatsController{

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @PostMapping("/stats/postweapon")
    public String PostWeaponStats(@RequestBody String request, HttpServletRequest request2) {
        ObjectMapper om = new ObjectMapper();

        Enumeration<String> headerNames = request2.getHeaderNames();
        while (headerNames.hasMoreElements()) {
            String headerName = headerNames.nextElement();
            String headerValue = request2.getHeader(headerName);
            if (headerName.equals("password") && headerValue.equals(vars.getPassword)) {
                try {
                    StatsWeaponDTO stats = om.readValue(request, StatsWeaponDTO.class);

                    String sql1 = String.format(
                            "INSERT INTO `weaponstats` (`id_usuario`, `weapon`, `img`, `kills`, `shotsFired`, `shotsHit`, `shotsAccuracy`) VALUES ('%s', '%s', '%s', '%s', '%s', '%s', '%s');",
                            stats.getId_usuario(),
                            stats.getWeapon(),
                            stats.getImg(),
                            stats.getKills(),
                            stats.getShotsFired(),
                            stats.getShotsHit(),    
                            stats.getShotsAccuracy());
                    jdbcTemplate.execute(sql1);
                    return "Done";
                } catch (Exception e) {
                    System.out.println(e.getMessage());
                    return e.getMessage();
                }
            }
        }
        return "401,No autorizado";
    }

    @GetMapping("/stats/getweapon/{idUsuario}")
    public ResponseEntity<List<StatsWeaponUsuarioDTO>> GetWeaponUsuario(@PathVariable("idUsuario") String request)
            throws JsonProcessingException {
        String sql = "SELECT * FROM vista_ultimos_2_armas_usuario Where id_usuario = " + request;
        List<StatsWeaponUsuarioDTO> stats = jdbcTemplate.query(sql, new WeaponUsuarioRowMapper());
        return ResponseEntity.ok().contentType(MediaType.APPLICATION_JSON).body(stats);
    }
}