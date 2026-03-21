package com.apnastore.controller;

import org.springframework.web.bind.annotation.*;
import java.util.HashMap;
import java.util.Map;
import java.util.Random;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "*")
public class AuthController {

    // In-memory storage for mock OTPs (mobileNumber -> otp)
    private Map<String, String> otpStorage = new HashMap<>();

    @PostMapping("/send-otp")
    public Map<String, Object> sendOtp(@RequestBody Map<String, String> request) {
        String mobile = request.get("mobile");
        Map<String, Object> response = new HashMap<>();

        if (mobile == null || mobile.length() < 10) {
            response.put("success", false);
            response.put("message", "Invalid mobile number");
            return response;
        }

        // Generate mock 6-digit OTP
        String otp = String.format("%06d", new Random().nextInt(1000000));
        otpStorage.put(mobile, otp);

        // LOG THE OTP TO FILE FOR TESTING
        try {
            java.nio.file.Files.writeString(java.nio.file.Path.of("otp.txt"), otp);
        } catch (java.io.IOException e) {
            e.printStackTrace();
        }

        System.out.println("******************************************");
        System.out.println("OTP for " + mobile + " is: " + otp);
        System.out.println("******************************************");

        response.put("success", true);
        response.put("message", "OTP sent successfully (Check server console)");
        return response;
    }

    @PostMapping("/verify-otp")
    public Map<String, Object> verifyOtp(@RequestBody Map<String, String> request) {
        String mobile = request.get("mobile");
        String otp = request.get("otp");
        Map<String, Object> response = new HashMap<>();

        if (otpStorage.containsKey(mobile) && otpStorage.get(mobile).equals(otp)) {
            response.put("success", true);
            response.put("message", "Login successful");
            response.put("mobile", mobile);
            otpStorage.remove(mobile); // Remove after use
        } else {
            response.put("success", false);
            response.put("message", "Invalid OTP");
        }

        return response;
    }
}
