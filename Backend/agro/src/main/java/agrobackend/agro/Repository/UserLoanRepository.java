package agrobackend.agro.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import agrobackend.agro.Entity.UserLoan;
@Repository
public interface UserLoanRepository extends JpaRepository<UserLoan,Integer>{

}
