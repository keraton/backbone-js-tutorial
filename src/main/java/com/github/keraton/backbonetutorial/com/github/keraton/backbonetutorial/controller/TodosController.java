package com.github.keraton.backbonetutorial.com.github.keraton.backbonetutorial.controller;

import com.github.keraton.backbonetutorial.com.github.keraton.backbonetutorial.model.Todo;
import com.github.keraton.backbonetutorial.com.github.keraton.backbonetutorial.repository.TodosRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

import static org.springframework.hateoas.mvc.ControllerLinkBuilder.linkTo;
import static org.springframework.hateoas.mvc.ControllerLinkBuilder.methodOn;

@RestController
public class TodosController {

    @Autowired
    private TodosRepo todosRepo;

    @RequestMapping("/todo")
    public List<Todo> todos() {
        List<Todo> todos = todosRepo.findTodos();
        todos.forEach(todo ->
                        todo.add(
                            linkTo(methodOn(TodosController.class).todo(todo.getTodoId())).withSelfRel()));
        return todos;
    }

    @RequestMapping("/todo/{todoId}")
    public Todo todo(@PathVariable("todoId") String todoId) {
        return todosRepo.findTodo(todoId);
    }
}
