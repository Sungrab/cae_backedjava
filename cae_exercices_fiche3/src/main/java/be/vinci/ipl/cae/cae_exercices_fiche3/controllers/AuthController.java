package be.vinci.ipl.cae.cae_exercices_fiche3.controllers;

import be.vinci.ipl.cae.cae_exercices_fiche3.models.dtos.AuthenticatedUser;
import be.vinci.ipl.cae.cae_exercices_fiche3.models.dtos.Credentials;
import be.vinci.ipl.cae.cae_exercices_fiche3.services.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

@CrossOrigin(origins = "http://localhost:5137")
@RestController
@RequestMapping("/auths")
public class AuthController {

    private final UserService userService;

    public AuthController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/register")
    public void register(@RequestBody Credentials credentials) {
        if (credentials == null ||
                credentials.getUsername() == null ||
                credentials.getUsername().isBlank() ||
                credentials.getPassword() == null ||
                credentials.getPassword().isBlank()) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST);
        }

        boolean created = userService.register(credentials.getUsername(), credentials.getPassword());
        if (!created) throw new ResponseStatusException(HttpStatus.CONFLICT);
    }

    @PostMapping("/login")
    public AuthenticatedUser login(@RequestBody Credentials credentials) {
        System.out.println("Loggin in controller");
        System.out.println(credentials);
        if (credentials == null ||
                credentials.getUsername() == null ||
                credentials.getUsername().isBlank() ||
                credentials.getPassword() == null ||
                credentials.getPassword().isBlank()) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST);
        }

        AuthenticatedUser user = userService.login(credentials.getUsername(), credentials.getPassword());
        if (user == null) throw new ResponseStatusException(HttpStatus.UNAUTHORIZED);

        return user;
    }

}
