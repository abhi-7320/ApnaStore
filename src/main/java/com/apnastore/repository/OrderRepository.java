package com.apnastore.repository;

import com.apnastore.model.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;
import java.util.Optional;

@Repository
public interface OrderRepository extends JpaRepository<Order, Long> {
    List<Order> findByUserMobile(String userMobile);
    Optional<Order> findByIdAndUserMobile(Long id, String userMobile);
    List<Order> findByStatus(String status);
}
