package be.vinci.cae.services;

import be.vinci.cae.modeles.Restaurant;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RestaurantsService {
    public List<Restaurant> getRestaurants() {
        Restaurant[] restaurants = {
                new Restaurant("restaurant 1", "Belge 1"),
                new Restaurant("restaurant 2", "Belge 2"),
                new Restaurant("restaurant 3", "Belge 3"),
                new Restaurant("restaurant 4", "Belge 4"),
                new Restaurant("restaurant 5", "Belge 5"),
                new Restaurant("restaurant 6", "Belge 6"),
                new Restaurant("restaurant 7", "Belge 7"),
                new Restaurant("restaurant 8", "Belge 8"),
                new Restaurant("restaurant 9", "Belge 9"),
                new Restaurant("restaurant 10", "Belge 10")
        };
        return List.of(restaurants);
    }
}
