package arcolab.proyect.akhanta.model;

import jakarta.persistence.*;
import lombok.*;

import java.sql.Date;

@Data
@Setter
@Getter
@Entity
@AllArgsConstructor
@NoArgsConstructor
public class Post {

    @Id
    private Long id;

    private String title;

    private String subtitle;

    @Column(name = "body_text", nullable = false)
    private String bodyText;

    @Column(name = "creation_date", nullable = false)
    private Date creationDate;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "image_id")
    private PostImage image;

}
