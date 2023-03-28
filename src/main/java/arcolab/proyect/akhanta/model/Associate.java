package arcolab.proyect.akhanta.model;

import jakarta.persistence.*;
import lombok.*;

@Data
@Getter
@Setter
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "associates")
public class Associate {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String address;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "image_id")
    private AssociateImage image;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User createdBy;
}
