package agrobackend.agro.Service.Implementation;

import java.util.List;
import java.util.Optional;

import org.apache.tomcat.util.net.openssl.ciphers.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import agrobackend.agro.Dto.User_dto;
import agrobackend.agro.Entity.FarmUser;
import agrobackend.agro.Entity.UserInfo;
import agrobackend.agro.Repository.UserInfoRepository;
import agrobackend.agro.Repository.UserRepository;
import agrobackend.agro.Service.UserService;
import lombok.AllArgsConstructor;
@Service
@AllArgsConstructor
public class UserServiceimpl implements UserService{

    private UserRepository userrepo;
    private UserInfoRepository userInfoRepository;

     @Override
    public List<FarmUser> getAllUsers() {
        return userrepo.findAll();
    }
    @Override
    public User_dto getById(int id)
    {
        FarmUser user=userrepo.findById(id).orElse(null);
        if(user!=null)
        {
            User_dto udt=new User_dto();
            udt.setId(user.getId());
            udt.setUsername(user.getUsername());
            udt.setEmail(user.getEmail());
            udt.setPassword(user.getPassword());
            return udt;
        }
        return null;
    }

    @Override
    public void postUser(User_dto userdto)
    {
        FarmUser farmUser=new FarmUser();
        farmUser.setId(userdto.getId());
        farmUser.setUsername(userdto.getUsername());
        farmUser.setEmail(userdto.getEmail());
        farmUser.setPassword(userdto.getPassword());
        userrepo.save(farmUser);
    }

    @Override
    public FarmUser putUser(int id,User_dto userdto)
    {
        Optional<FarmUser> optionalUser = userrepo.findById(id);
        if (optionalUser.isPresent()) {
        FarmUser farmUser = optionalUser.get(); 
        farmUser.setId(id);
        farmUser.setUsername(userdto.getUsername());
        farmUser.setEmail(userdto.getEmail());
        farmUser.setPassword(userdto.getPassword());
        return userrepo.save(farmUser);
        } 
        else
       {
        return null;
       }
    }
    
    // @Override
    // public String deleteUser()
    // {
    //     Authentication curUser= SecurityContextHolder.getContext().getAuthentication();
    //     String curName=curUser.get
    //     UserInfo userInfo=
    //     if(userInfo.getRoles().equals("ADMIN"))
    //     {
    //         return "ADMIN can't Delete";
    //     }
    //     FarmUser appUser=userrepo.findBy(null, null)
    //     if(!appUser.getUserloans().isEmpty())
    //     {
    //         return "User has Pending Loans";
    //     }
    //     userrepo.deleteById(appUser.getId());
    //     userInfoRepository.deleteById(userInfo.getId());
    //     return "User Delete!";

    // }
}
