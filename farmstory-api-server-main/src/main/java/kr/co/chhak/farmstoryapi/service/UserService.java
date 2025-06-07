package kr.co.chhak.farmstoryapi.service;

import kr.co.chhak.farmstoryapi.dto.TermsDTO;
import kr.co.chhak.farmstoryapi.dto.UserDTO;

public interface UserService {


    public String register(UserDTO userDTO);

    public TermsDTO terms();
}
