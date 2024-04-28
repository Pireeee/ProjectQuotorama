package net.pire.quotorama.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import net.pire.quotorama.entity.User;
import org.springframework.stereotype.Repository;

public interface UserRepositoy extends JpaRepository<User, Long>{
    User findByUsername(String username);

    User findByUsernameAndPassword(String username, String password);

    List<User> findByIsAdmin(Boolean isAdmin);    
}
