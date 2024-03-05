package agrobackend.agro.Service.Implementation;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import agrobackend.agro.Dto.Loan_dto;
import agrobackend.agro.Dto.Response.UserLoanUsers_dto;
import agrobackend.agro.Entity.Loan;
import agrobackend.agro.Entity.UserLoan;
import agrobackend.agro.Repository.LoanRepostory;
import agrobackend.agro.Service.LoanService;
import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class LoanImplementation implements LoanService{
    

    private LoanRepostory loanrepo;

    @Override
    public List<Loan> getAllLoans()
    {
        return loanrepo.findAll();
    }

    @Override
    public Loan_dto getByLoanId(int id)
    {
        Loan loan=loanrepo.findById(id).orElse(null);
        if(loan!=null)
        {
            Loan_dto ldt=new Loan_dto();
            ldt.setLoan_id(loan.getLoan_id());
            ldt.setLoan_name(loan.getLoan_name());
            ldt.setLoan_type(loan.getLoan_type());
            ldt.setInterest(loan.getInterest());
            ldt.setLoan_amount(loan.getLoan_amount());
            ldt.setTime_period(loan.getTime_period());
            return ldt;
        }
        return null;
    }
    @Override
    public void postLoan(Loan_dto loandto)
    {
        Loan loan1=new Loan();
        loan1.setLoan_id(loandto.getLoan_id());
        loan1.setLoan_name(loandto.getLoan_name());
        loan1.setLoan_type(loandto.getLoan_type());
        loan1.setInterest(loandto.getInterest());
        loan1.setTime_period(loandto.getTime_period());
        loan1.setLoan_amount(loandto.getLoan_amount());
        loan1.setLoan_description(loandto.getLoan_description());
        loanrepo.save(loan1);
    }
    @Override
    public Loan putLoan(int a, Loan_dto loandto) {
    Optional<Loan> optionalLoan = loanrepo.findById(a);
    if (optionalLoan.isPresent()) {
        Loan loan1 = optionalLoan.get(); 
        loan1.setLoan_name(loandto.getLoan_name());
        loan1.setLoan_type(loandto.getLoan_type());
        loan1.setInterest(loandto.getInterest());
        loan1.setTime_period(loandto.getTime_period());
        loan1.setLoan_amount(loandto.getLoan_amount());
        loan1.setLoan_description(loandto.getLoan_description());
        return loanrepo.save(loan1);
    } 
    else
     {
        return null;
    }
    }

    @Override
    public void deleteLoan(int id)
    {
        loanrepo.deleteById(id);
    }

    @Override
    public List<UserLoanUsers_dto> getAllUsers(int id)
    {
        Loan l=loanrepo.findById(id).orElse(null);
        if(l!=null)
        {
            List<UserLoan> userloan=l.getUserloan();
            List<UserLoanUsers_dto> usdto=new ArrayList<>();
            for(UserLoan us:userloan)
            {
                usdto.add(new UserLoanUsers_dto(us.getUser_loanid(),us.getFarmuser()));
            }
            return usdto;
        }
        else
        {
            return null;
        }
    }
    
}



