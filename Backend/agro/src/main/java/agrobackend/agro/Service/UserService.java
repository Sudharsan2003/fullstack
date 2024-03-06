package agrobackend.agro.Service;
import java.util.List;

import agrobackend.agro.Dto.User_dto;
import agrobackend.agro.Entity.FarmUser;



public interface UserService {
    List<FarmUser> getAllUsers();
    User_dto  getById(int id);
    void postUser(User_dto userdto);
    FarmUser putUser(int id,User_dto userdto);
    // String deleteUser();
}
