package arcolab.proyect.akhanta.model.dtos;

import arcolab.proyect.akhanta.model.PostImage;
import arcolab.proyect.akhanta.model.User;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;
import java.sql.Date;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class PostDTO implements Serializable {

    private Long id;

    private String title;

    private String subtitle;

    private String bodyText;

    private Date creationDate;

    private PostImage image;

    private User createdBy;

}
