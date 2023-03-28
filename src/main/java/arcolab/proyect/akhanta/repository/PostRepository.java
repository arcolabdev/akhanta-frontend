package arcolab.proyect.akhanta.repository;

import arcolab.proyect.akhanta.model.Post;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PostRepository extends JpaRepository<Post, Long> {
}
