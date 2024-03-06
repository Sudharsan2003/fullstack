package agrobackend.agro.Repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import agrobackend.agro.Entity.FarmUser;
@Repository
public interface UserRepository extends JpaRepository<FarmUser, Integer> {
    
}
