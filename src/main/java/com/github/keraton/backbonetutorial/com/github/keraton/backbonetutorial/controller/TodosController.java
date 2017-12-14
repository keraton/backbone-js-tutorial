package com.github.keraton.backbonetutorial.com.github.keraton.backbonetutorial.controller;

import com.github.keraton.backbonetutorial.com.github.keraton.backbonetutorial.model.Todo;
import com.github.keraton.backbonetutorial.com.github.keraton.backbonetutorial.repository.TodosRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static org.springframework.hateoas.mvc.ControllerLinkBuilder.linkTo;
import static org.springframework.hateoas.mvc.ControllerLinkBuilder.methodOn;


@RestController
public class TodosController {

    @Autowired
    private TodosRepo todosRepo;

    @CrossOrigin
    @GetMapping("/todo")
    public List<Todo> todos() {
        List<Todo> todos = todosRepo.findTodos();
        todos.stream()
                .filter(todo -> todo.getLinks() == null || todo.getLinks().isEmpty())
                .forEach(todo ->
                        todo.add(
                            linkTo(methodOn(TodosController.class).todo(todo.getTodoId())).withSelfRel()));
        return todos;
    }

    @CrossOrigin
    @GetMapping("/todo/{todoId}")
    public Todo todo(@PathVariable("todoId") String todoId) {
        return todosRepo.findTodo(todoId);
    }
}
