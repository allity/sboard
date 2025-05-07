package com.sboard.controller;

import com.sboard.dto.Post;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@Controller
public class ViewController {

    @GetMapping("/{id}")
    public String viewPost(@PathVariable("id") int id, Model model) {
        Post post = new Post(id, "게시글 " + id, "게시글 " + id + "의 내용입니다.", "enan", "2025-04-29");
        model.addAttribute("post", post);
        return "view";
    }
}
