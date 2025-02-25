package be.vinci.cae;

import be.vinci.cae.modele.Drink;
import be.vinci.cae.repository.DrinkRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class Fiche2Application {

    public static void main(String[] args) {
        SpringApplication.run(Fiche2Application.class, args);
    }
    @Bean
    public CommandLineRunner demo(DrinkRepository repository) {
        return (args) -> {
            repository.save(new Drink("Bloody Mary", "Yum totmatoes", 10.0f, true));
            repository.save(new Drink("Mojito", "Yum mint", 8.0f, true));
            repository.save(new Drink("Coca", "Yum sugar", 2.0f, false));
            repository.save(new Drink("Water", "Yum water", 0.0f, false));
        };
    }

}
