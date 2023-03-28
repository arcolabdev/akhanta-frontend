package arcolab.proyect.akhanta.repository;

import arcolab.proyect.akhanta.model.Post;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<Post, Long> {
}
