package agrobackend.agro.Dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class User_dto {
     
     int id;
     String username;
     String email;
     String password;
     int role_id; 
}
