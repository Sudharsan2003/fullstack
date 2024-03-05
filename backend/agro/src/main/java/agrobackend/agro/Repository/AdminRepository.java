package agrobackend.agro.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import agrobackend.agro.Entity.FarmAdmin;
@Repository
public interface AdminRepository extends JpaRepository<FarmAdmin,Integer> {
    
}
