package be.vinci.ipl.cae.cae_exercices_fiche3.models.entities;

import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.Formula;

@Entity
@Table(name = "client")
@Data
public class Client {

    @Id
    private Long idClient;

    @OneToOne
    @MapsId
    @JoinColumn(name = "idClient")
    private User user;

}
