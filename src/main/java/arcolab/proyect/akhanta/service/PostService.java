package arcolab.proyect.akhanta.service;

import arcolab.proyect.akhanta.model.Post;
import arcolab.proyect.akhanta.repository.PostRepository;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class PostService {

    private final PostRepository repository;

    public PostService(PostRepository repository) {
        this.repository = repository;
    }

    public Post findById(Long id) {
        return repository.findById(id).orElse(null);
    }

    public Post savePost(Post p) {
        return repository.save(p);
    }

    public List<Post> getAllPosts(){
        return repository.findAll();
    }

}
