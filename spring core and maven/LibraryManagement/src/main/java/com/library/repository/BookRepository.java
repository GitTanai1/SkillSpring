package com.library.repository;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import org.springframework.stereotype.Repository;

@Repository("annotatedBookRepository")
public class BookRepository {

    private final List<String> books = new ArrayList<>();

    public void save(String title) {
        books.add(title);
        System.out.println("Saved book: " + title);
    }

    public List<String> findAll() {
        return Collections.unmodifiableList(books);
    }

    public String findByTitle(String title) {
        return books.stream()
                .filter(book -> book.equalsIgnoreCase(title))
                .findFirst()
                .orElse("Book not found: " + title);
    }
}
