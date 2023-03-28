package arcolab.proyect.akhanta.model;

import jakarta.persistence.*;

@Entity
@Table(name = "posts_images")
public class PostImage {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nombre;

    @Lob
    @Column(name = "image_data")
    private byte[] datosImagen;


}
