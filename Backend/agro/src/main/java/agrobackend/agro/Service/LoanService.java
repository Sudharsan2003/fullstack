package agrobackend.agro.Service;

import java.util.List;

import agrobackend.agro.Dto.Loan_dto;
import agrobackend.agro.Dto.Response.UserLoanUsers_dto;
import agrobackend.agro.Entity.Loan;

public interface LoanService {
    List<Loan> getAllLoans();
    Loan_dto getByLoanId(int id);
    void postLoan(Loan_dto loandto);
    Loan putLoan(int id,Loan_dto loandto);
    String deleteLoan(int id);
    List<UserLoanUsers_dto> getAllUsers(int id);
}
