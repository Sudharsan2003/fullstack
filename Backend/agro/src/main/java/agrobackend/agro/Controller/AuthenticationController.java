package agrobackend.agro.Controller;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import agrobackend.agro.Dto.AuthRequest_dto;
import agrobackend.agro.Entity.FarmAdmin;
import agrobackend.agro.Entity.FarmUser;
import agrobackend.agro.Entity.UserInfo;
import agrobackend.agro.Repository.AdminRepository;
import agrobackend.agro.Repository.UserInfoRepository;
import agrobackend.agro.Repository.UserRepository;
import agrobackend.agro.Service.JwtService;

import org.springframework.security.core.Authentication;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.web.bind.annotation.RequestMapping;


@RestController
@RequestMapping("/auth")
public class AuthenticationController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtService jwtService;

    @Autowired
    private UserInfoRepository userInfoRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private  AdminRepository adminRepository;

     @PostMapping("/new")
    public String addNewUser(@RequestBody UserInfo userInfo) {
            userInfo.setPassword(passwordEncoder.encode(userInfo.getPassword()));
            userInfoRepository.save(userInfo);
            if(userInfo.getRoles().equals("ADMIN"))
            {
                FarmAdmin admin=new FarmAdmin();
                admin.setName(userInfo.getName());
                admin.setUserInfo(userInfo);
                adminRepository.save(admin);
            }
            else if(userInfo.getRoles().equals("USER"))
            {
                FarmUser user=new FarmUser();
                user.setUsername(userInfo.getName());
                user.setUserInfo(userInfo);
                user.setEmail(userInfo.getEmail());
                user.setPassword(userInfo.getPassword());
                userRepository.save(user);
            }

            return "user added to system";
    }

    @PostMapping("/authenticate")
    public String authenticateAndGetToken(@RequestBody AuthRequest_dto authRequest) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(authRequest.getUsername(), authRequest.getPassword()));
        if (authentication.isAuthenticated()) {
            return jwtService.generateToken(authRequest.getUsername());
        } else {
            throw new UsernameNotFoundException("invalid user request !");
        }

    }
}
