package arcolab.proyect.akhanta.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import lombok.*;
import jakarta.persistence.Id;

import java.sql.Date;

@Data
@Setter
@Getter
@Entity
@AllArgsConstructor
@NoArgsConstructor
public class Post {

    @Id
    @Column(name = "post_id", unique = true, nullable = false)
    private Long id;

    private String title;

    private String subtitle;

    @Column(name = "body_text", nullable = false)
    private String bodyText;

    @Column(name = "creation_date", nullable = false)
    private Date creationDate;

    @Column(name = "expiration_date", nullable = false)
    private Date expirationDate;
}
