package be.vinci.cae.modele;

import jakarta.persistence.*;
import lombok.Getter;

@Entity
@Table(name = "drinks")
public class Drink {
    public Drink() {}

    public Drink(String name, String description, float price, Boolean alcoholic) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.alcoholic = alcoholic;
    }

    @Id
    @GeneratedValue
    @Getter
    private Long id;
    @Getter
    @Column(unique = true)
    private String name;
    @Getter
    private String description;
    @Getter
    private float price;
    @Getter
    private Boolean alcoholic;

}
