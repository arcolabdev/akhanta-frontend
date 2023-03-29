package arcolab.proyect.akhanta.service;

import arcolab.proyect.akhanta.model.Associate;
import arcolab.proyect.akhanta.model.Post;
import arcolab.proyect.akhanta.repository.AssociateRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AssociateService {

    private final AssociateRepository repository;

    public AssociateService(AssociateRepository repository) {
        this.repository = repository;
    }

    public Associate findById(Long id) {
        return repository.findById(id).orElse(null);
    }

    public Associate savePost(Associate p) {
        return repository.save(p);
    }

    public List<Associate> findAllPosts(){
        return repository.findAll();
    }

}
