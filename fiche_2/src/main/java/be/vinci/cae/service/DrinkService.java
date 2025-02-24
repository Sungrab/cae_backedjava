package be.vinci.cae.service;

import be.vinci.cae.modele.Drink;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class DrinkService {
    public Iterable<Drink> getAllDrinks() {
        List<Drink> allDrinks = List.of(new Drink[]{
                new Drink("Bloody Mary", "Yum totmatoes", 10.0f, true),
                new Drink("Mojito", "Yum mint", 8.0f, true),
                new Drink("Water", "Fresh!", 2.0f, false)
        });

        return allDrinks;
    }

}
