package be.vinci.cae.service;

import be.vinci.cae.modele.Drink;
import be.vinci.cae.repository.DrinkRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class DrinkService {
    private final DrinkRepository drinkRepository;

    public DrinkService(DrinkRepository drinkRepository) {
        this.drinkRepository = drinkRepository;
    }

    public Iterable<Drink> getAllDrinks() {
        return drinkRepository.findAll();
    }


    public Drink getDrink(long id) {
        return drinkRepository.findById(id).orElse(null);
    }

    public Drink createDrink(Drink drink) {
        return drinkRepository.save(drink);
    }

    public Drink updateDrink(Drink drink) {
        return drinkRepository.save(drink); // save() met à jour si l'ID existe
    }

    public void deleteDrink(long id) {
        drinkRepository.deleteById(id);
    }

}
