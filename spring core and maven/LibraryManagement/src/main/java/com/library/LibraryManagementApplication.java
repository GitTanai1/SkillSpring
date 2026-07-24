package com.library;

import com.library.service.BookService;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class LibraryManagementApplication {

    public static void main(String[] args) {
        try (ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml")) {
            BookService bookService = context.getBean("bookService", BookService.class);

            bookService.addBook("Clean Code");
            bookService.addBook("Effective Java");
            bookService.addBook("Spring in Action");

            System.out.println("Books in library: " + bookService.getAllBooks());
            System.out.println("Search result: " + bookService.findBook("Effective Java"));
        }
    }
}
