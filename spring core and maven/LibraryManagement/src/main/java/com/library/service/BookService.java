package com.library.service;

import com.library.repository.BookRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

@Service("annotatedBookService")
public class BookService {

    private BookRepository bookRepository;

    @Autowired
    public BookService(@Qualifier("annotatedBookRepository") BookRepository bookRepository) {
        this.bookRepository = bookRepository;
        System.out.println("BookService initialized using constructor injection.");
    }

    public void setBookRepository(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
        System.out.println("BookService dependency set using setter injection.");
    }

    public void addBook(String title) {
        bookRepository.save(title);
    }

    public List<String> getAllBooks() {
        return bookRepository.findAll();
    }

    public String findBook(String title) {
        return bookRepository.findByTitle(title);
    }
}
