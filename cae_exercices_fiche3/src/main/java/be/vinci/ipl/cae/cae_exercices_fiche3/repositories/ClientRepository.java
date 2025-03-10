package be.vinci.ipl.cae.cae_exercices_fiche3.repositories;

import be.vinci.ipl.cae.cae_exercices_fiche3.models.entities.Client;
import org.springframework.data.repository.CrudRepository;

public interface ClientRepository extends CrudRepository<Client, Long> {
    boolean existsClientByIdClient(Long id);
}
