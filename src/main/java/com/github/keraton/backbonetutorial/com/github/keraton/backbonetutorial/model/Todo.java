package com.github.keraton.backbonetutorial.com.github.keraton.backbonetutorial.model;

import org.springframework.hateoas.ResourceSupport;

public class Todo extends ResourceSupport{

    private String todoId;
    private String name;
    private String status;


    public Todo(String todoId, String name, String status) {
        this.name = name;
        this.status = status;
        this.todoId = todoId;
    }


    public String getTodoId() {
        return todoId;
    }

    public void setTodoId(String todoId) {
        this.todoId = todoId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
