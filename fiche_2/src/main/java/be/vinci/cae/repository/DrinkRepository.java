package be.vinci.cae.repository;

import be.vinci.cae.modele.Drink;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DrinkRepository extends CrudRepository<Drink, Long> {
    Drink findByName(String name);
}
