package be.vinci.ipl.cae.controllers;


import be.vinci.ipl.cae.models.dtos.AuthenticatedUser;
import be.vinci.ipl.cae.services.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("Users")
public class UserController {
    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/me")
    public ResponseEntity<AuthenticatedUser> updateToken(@RequestBody String token) {
        String username = userService.verifyJwtToken(token);

        if (username == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
        AuthenticatedUser authenticatedUser = userService.createJwtToken(username);

        return ResponseEntity.ok(authenticatedUser);
    }
}
