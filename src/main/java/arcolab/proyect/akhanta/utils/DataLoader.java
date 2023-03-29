package arcolab.proyect.akhanta.utils;

import arcolab.proyect.akhanta.model.Role;
import arcolab.proyect.akhanta.model.User;
import arcolab.proyect.akhanta.repository.RoleRepository;
import arcolab.proyect.akhanta.repository.UserRepository;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements ApplicationRunner {
    UserRepository repository;
    RoleRepository roleRepository;

    public DataLoader(UserRepository repository, RoleRepository roleRepository) {
        this.repository = repository;
        this.roleRepository = roleRepository;
    }

    @Override
    public void run(ApplicationArguments args) throws Exception {

        Role role = new Role(1L, "ADMIN");

        roleRepository.save(role);
        repository.save(new User(1L, "Admin", "Admin", "admin@admin.com", role));
    }
}
