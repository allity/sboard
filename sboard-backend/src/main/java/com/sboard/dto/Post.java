package com.sboard.dto;

public class Post {
    private int id;
    private String title;
    private String content;
    private String writer;
    private String createdAt;

    public Post(int id, String title, String content, String writer, String createdAt) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.writer = writer;
        this.createdAt = createdAt;
    }

    public int getId() {
        return id;
    }
    public String getTitle() {
        return title;
    }
    public String getContent() {
        return content;
    }
    public String getWriter() {
        return writer;
    }
    public String getCreatedAt() {
        return createdAt;
    }
}
