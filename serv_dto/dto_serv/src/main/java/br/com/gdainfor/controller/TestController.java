package br.com.gdainfor.controller;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class TestController {

    @GetMapping("/ping")
    public String ping() {
        return "API funcionando 🚀";
    }
}
