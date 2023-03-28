package arcolab.proyect.akhanta.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import lombok.*;

@Data
@Getter
@Setter
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class AssociateImage {

    @Id
    private Long id;

    @Lob
    @Column(name = "image_data")
    private byte[] datosImagen;
}
