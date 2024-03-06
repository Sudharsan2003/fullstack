package agrobackend.agro.Service;
import java.util.List;

import agrobackend.agro.Entity.UserLoan;

public interface UserLoanService {

    List<UserLoan> getAllUserLoans();
    UserLoan postUserLoan(int id1,int id2);
    
}





