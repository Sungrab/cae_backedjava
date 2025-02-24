package be.vinci.cae.modeles;

public class Restaurant {
    String nom;
    String typr;

    public Restaurant() {}
    public Restaurant(String nom, String typr) {
        this.nom = nom;
        this.typr = typr;
    }

    public String getNom() {
        return nom;
    }
    public void setNom(String nom) {
        this.nom = nom;
    }
    public String getTypr() {
        return typr;
    }
    public void setTypr(String typr) {
        this.typr = typr;
    }
}
