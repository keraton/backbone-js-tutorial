package com.github.keraton.backbonetutorial.com.github.keraton.backbonetutorial.controller;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.Map;

@Controller
public class HomeController {


    @RequestMapping("/")
    public String home(Map<String, Object> model) {
        return "home";
    }

}