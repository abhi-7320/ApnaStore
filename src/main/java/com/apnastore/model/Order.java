package com.apnastore.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "orders")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String userMobile;
    private Double totalAmount;
    private String status; // PENDING, PAID, COMPLETED, CANCELLED
    private String upiId;
    private LocalDateTime createdAt;
    private LocalDateTime paidAt;
    
    @Lob
    private String items; // JSON serialized cart items
    
    public Order() {
        this.createdAt = LocalDateTime.now();
        this.status = "PENDING";
    }
    
    public Order(String userMobile, Double totalAmount, String items) {
        this();
        this.userMobile = userMobile;
        this.totalAmount = totalAmount;
        this.items = items;
        this.upiId = "7320041630@fam";
    }
    
    // Getters and Setters
    public Long getId() {
        return id;
    }
    
    public void setId(Long id) {
        this.id = id;
    }
    
    public String getUserMobile() {
        return userMobile;
    }
    
    public void setUserMobile(String userMobile) {
        this.userMobile = userMobile;
    }
    
    public Double getTotalAmount() {
        return totalAmount;
    }
    
    public void setTotalAmount(Double totalAmount) {
        this.totalAmount = totalAmount;
    }
    
    public String getStatus() {
        return status;
    }
    
    public void setStatus(String status) {
        this.status = status;
    }
    
    public String getUpiId() {
        return upiId;
    }
    
    public void setUpiId(String upiId) {
        this.upiId = upiId;
    }
    
    public LocalDateTime getCreatedAt() {
        return createdAt;
    }
    
    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }
    
    public LocalDateTime getPaidAt() {
        return paidAt;
    }
    
    public void setPaidAt(LocalDateTime paidAt) {
        this.paidAt = paidAt;
    }
    
    public String getItems() {
        return items;
    }
    
    public void setItems(String items) {
        this.items = items;
    }
}
