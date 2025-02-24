package be.vinci.cae.controller;

import be.vinci.cae.modeles.Restaurant;
import be.vinci.cae.services.RestaurantsService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/restaurants")
public class RestaurantsController {
    private final RestaurantsService restaurantsService;

    public RestaurantsController(RestaurantsService restaurantsService) {
        this.restaurantsService = restaurantsService;
    }
    @GetMapping("/")
    public List<Restaurant> getRestaurants() {
        return restaurantsService.getRestaurants();
    }
}
