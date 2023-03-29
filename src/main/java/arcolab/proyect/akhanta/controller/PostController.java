package arcolab.proyect.akhanta.controller;


import arcolab.proyect.akhanta.model.Post;
import arcolab.proyect.akhanta.model.dtos.PostDTO;
import arcolab.proyect.akhanta.service.PostService;
import org.modelmapper.ModelMapper;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/v1/posts")
public class PostController {

    private final PostService service;
    private final ModelMapper mapper = new ModelMapper();

    public PostController(PostService service) {
        this.service = service;
    }

    @PostMapping
    public ResponseEntity<PostDTO> savePost(@RequestBody Post p){
        return ResponseEntity.ok(mapper.map(service.savePost(p), PostDTO.class));
    }

    @GetMapping
    public ResponseEntity<List<PostDTO>> getAllPosts(){

        ModelMapper mapper = new ModelMapper();
        
        List<Post> posts = service.getAllPosts();
        List<PostDTO> postsDTO = new ArrayList<>();

        for (Post p :
                posts) {
            postsDTO.add(mapper.map(p, PostDTO.class));
        }
        
        return ResponseEntity.ok(postsDTO);
    }
}
