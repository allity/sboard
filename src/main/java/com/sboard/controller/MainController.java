package com.sboard.controller;

import com.sboard.dto.Post;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

@Controller
public class MainController {
    
    @GetMapping("/")
    public String main(Model model) {
        List<Post> posts = List.of(
            new Post(1, "스프링 부트 1일차", "환경 구축 및 웹페이지 노출", "enan", "2025-04-28"),
            new Post(2, "스프링 부트 2일차", "어디까지 하려나", "enan", "2025-04-29"),
            new Post(3, "Title 3", "Content 3", "Writer 3", "2023-10-03")
        );
        model.addAttribute("posts", posts);
        return "main";
    }
}
