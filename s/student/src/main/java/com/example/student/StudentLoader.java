package com.example.student;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class StudentLoader implements CommandLineRunner {
    @Override
    public void run(String... args) {
        var names = java.util.List.of("Alice", "Bob", "Charlie", "Deepa", "Eshan");
        System.out.println("---- Student Names on Startup ----");
        for (int i = 0; i < names.size(); i++) {
            System.out.printf("%d. %s%n", i+1, names.get(i));
        }
        System.out.println("----------------------------------");
    }
}
    

