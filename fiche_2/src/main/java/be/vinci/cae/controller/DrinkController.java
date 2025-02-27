package be.vinci.cae.controller;


import be.vinci.cae.modele.Drink;
import be.vinci.cae.service.DrinkService;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/drinks")
public class DrinkController {
    private DrinkService drinkService;

    public DrinkController(DrinkService drinkService) {
        this.drinkService = drinkService;
    }

    @GetMapping("/")
    public Iterable<Drink> getDrinks() {
        return drinkService.getAllDrinks();
    }
    @GetMapping("/")
    public String hello(@RequestParam(required = false) String name) {
        return "Hello " + name;
    }


    @GetMapping("/{id}")
    public Drink getDrink(@PathVariable long id) {
        return drinkService.getDrink(id);
    }
}
