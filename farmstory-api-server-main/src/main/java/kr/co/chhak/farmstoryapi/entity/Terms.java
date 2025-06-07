package kr.co.chhak.farmstoryapi.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.*;

@Getter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Builder
@Entity
@Table(name = "terms")
public class Terms {

    @Id
    private int no;
    private String terms;
    private String privacy;

}
