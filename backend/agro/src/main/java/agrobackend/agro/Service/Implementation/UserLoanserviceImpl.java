package agrobackend.agro.Service.Implementation;
import java.util.List;
import org.springframework.stereotype.Service;

import agrobackend.agro.Entity.FarmUser;
import agrobackend.agro.Entity.Loan;
import agrobackend.agro.Entity.UserLoan;
import agrobackend.agro.Repository.LoanRepostory;
import agrobackend.agro.Repository.UserLoanRepository;
import agrobackend.agro.Repository.UserRepository;
import agrobackend.agro.Service.UserLoanService;
import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class UserLoanserviceImpl implements UserLoanService{

    private UserLoanRepository userloanrepo;
    UserRepository userrepo;
    LoanRepostory loanrepo;

    @Override
    public List<UserLoan> getAllUserLoans()
    {
        return userloanrepo.findAll();
    }

    
    @Override
    public UserLoan postUserLoan(int userid,int loanid)
    {
        UserLoan aul=new UserLoan();
        FarmUser au=userrepo.findById(userid).orElse(null);
        Loan l=loanrepo.findById(loanid).orElse(null);
        if(au!=null && l!=null)
        {
            aul.setFarmuser(au);
            aul.setLoans(l);
            return userloanrepo.save(aul);
        }
        else
        {
            return null;
        } 
    }
    
    // @Override
    // public List<UserLoan> getByUserLoanId(int id)
    // {
    //     FarmUser user=userrepo.findById(id).orElse(null);
    //     List<Loan> loan=user.getUserloans();
    //     List<UserLoan_dto>
    // }
}
