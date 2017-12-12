package com.github.keraton.backbonetutorial.com.github.keraton.backbonetutorial.repository;

import com.github.keraton.backbonetutorial.com.github.keraton.backbonetutorial.model.Todo;
import org.springframework.stereotype.Component;

import java.util.List;

import static java.util.Arrays.asList;

@Component
public class TodosRepo {

    private static final List<Todo> todos = asList(
            new Todo("001", "Learn JS", "Pending"),
            new Todo("002", "Understand Backbone", "Pending")
    );

    public List<Todo> findTodos() {
        return todos;
    }

    public Todo findTodo(String todoId) {
        return todos.stream()
                .filter(todo -> todo.getTodoId().equals(todoId))
                .findFirst()
                .orElse(null);
    }
}
