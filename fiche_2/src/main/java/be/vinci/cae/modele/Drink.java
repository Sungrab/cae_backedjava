package be.vinci.cae.modele;

public class Drink {
    public Drink() {}

    public Drink(String name, String description, float price, Boolean alcoholic) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.alcoholic = alcoholic;
    }

    private String name;
    private String description;
    private float price;
    private Boolean alcoholic;

    public String getName() {
        return name;
    }

    public String getDescription() {
        return description;
    }

    public float getPrice() {
        return price;
    }

    public Boolean getAlcoholic() {
        return alcoholic;
    }
}
