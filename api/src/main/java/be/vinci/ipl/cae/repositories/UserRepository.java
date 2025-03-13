package be.vinci.ipl.cae.repositories;

import be.vinci.ipl.cae.models.entities.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

/**
 * User repository.
 */
@Repository
public interface UserRepository extends CrudRepository<User, Long> {

  /**
   * Find a user by its username.
   *
   * @param username the username
   * @return the user
   */
  User findByUsername(String username);
}
