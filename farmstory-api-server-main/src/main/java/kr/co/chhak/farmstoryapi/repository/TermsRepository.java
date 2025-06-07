package kr.co.chhak.farmstoryapi.repository;

import kr.co.chhak.farmstoryapi.entity.Terms;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TermsRepository extends JpaRepository<Terms, Integer> {
}
