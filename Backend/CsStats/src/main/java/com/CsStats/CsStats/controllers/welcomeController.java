package com.CsStats.CsStats.controllers;

import org.springframework.stereotype.Controller;

import org.springframework.web.bind.annotation.GetMapping;


@Controller
public class welcomeController {

    @GetMapping("/index")
    public String gotoIndex() {
        return "index";
    }

}
