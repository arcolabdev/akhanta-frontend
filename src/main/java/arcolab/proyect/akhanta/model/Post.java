package arcolab.proyect.akhanta.model;

import jakarta.persistence.*;
import lombok.*;

import java.sql.Date;

@Data
@Getter
@Setter
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "posts")
public class Post {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false)
    private String subtitle;

    @Column(name = "body_text", nullable = false)
    private String bodyText;

    @Column(name = "creation_date", nullable = false)
    private Date creationDate;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "image_id")
    private PostImage image;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User createdBy;

}
