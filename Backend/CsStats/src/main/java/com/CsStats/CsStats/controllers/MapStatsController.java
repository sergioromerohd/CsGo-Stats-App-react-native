package com.CsStats.CsStats.controllers;

import java.util.Enumeration;
import java.util.List;

import org.codehaus.jackson.JsonProcessingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.CsStats.CsStats.DTO.StatsMapDTO;
import com.CsStats.CsStats.DTO.StatsMapUsuarioDTO;
import com.CsStats.CsStats.Mapper.MapUsuarioRowMapper;
import com.CsStats.CsStats.vars.vars;
import com.fasterxml.jackson.databind.ObjectMapper;

import jakarta.servlet.http.HttpServletRequest;

@RestController
public class MapStatsController {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @PostMapping("/stats/postmap")
    public String PostMainsStats(@RequestBody String request, HttpServletRequest request2) {
        ObjectMapper om = new ObjectMapper();

        Enumeration<String> headerNames = request2.getHeaderNames();
        while (headerNames.hasMoreElements()) {
            String headerName = headerNames.nextElement();
            String headerValue = request2.getHeader(headerName);
            if (headerName.equals("password") && headerValue.equals(vars.getPassword)) {
                try {
                    StatsMapDTO stats = om.readValue(request, StatsMapDTO.class);

                    String sql1 = String.format(
                            "INSERT INTO mapstats(id_usuario,mapa,img,rounds,wins) values ('%s','%s','%s','%s','%s')",
                            stats.getId_usuario(),
                            stats.getMapa(),
                            stats.getImg(),
                            stats.getRounds(),
                            stats.getWins());
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

    @GetMapping("/stats/getmap")
    public ResponseEntity<List<StatsMapUsuarioDTO>> GetMapStats(@RequestBody String request)
            throws JsonProcessingException {
        String sql = "SELECT * FROM vista_ultimos_2_mapas_usuario Where id_usuario = " + request;
        List<StatsMapUsuarioDTO> stats = jdbcTemplate.query(sql, new MapUsuarioRowMapper());
        return ResponseEntity.ok().contentType(MediaType.APPLICATION_JSON).body(stats);
    }
}