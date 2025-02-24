package be.vinci.cae.controller;


import be.vinci.cae.modele.Drink;
import be.vinci.cae.service.DrinkService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/drinks")
public class DrinkController {
    private DrinkService drinkService;

    public DrinkController(DrinkService drinkService) {
        this.drinkService = drinkService;
    }

    @GetMapping
    public Iterable<Drink> getDrinks() {
        return drinkService.getAllDrinks();
    }
}
