package kr.co.chhak.farmstoryapi.dto;

import lombok.*;

@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class TermsDTO {

    private int no;
    private String terms;
    private String privacy;
    private String sms;

}
