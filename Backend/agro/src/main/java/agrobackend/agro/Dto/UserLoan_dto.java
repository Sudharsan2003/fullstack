package agrobackend.agro.Dto;

import agrobackend.agro.Entity.FarmUser;
import agrobackend.agro.Entity.Loan;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class UserLoan_dto {

    private int user_loanid;
    Loan loan;
    FarmUser farmuser;
}
