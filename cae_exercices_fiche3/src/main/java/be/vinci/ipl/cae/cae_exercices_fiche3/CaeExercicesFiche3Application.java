package be.vinci.ipl.cae.cae_exercices_fiche3;

import be.vinci.ipl.cae.cae_exercices_fiche3.services.UserService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;


@SpringBootApplication
public class CaeExercicesFiche3Application {

    public static void main(String[] args) {
        SpringApplication.run(CaeExercicesFiche3Application.class, args);
    }

    @Bean
    public CommandLineRunner demo(UserService userService) {
        return (args) -> {
            System.out.println("Creating users");
            userService.register("admin", "admin");
            userService.register("user", "user");
        };
    }
}
