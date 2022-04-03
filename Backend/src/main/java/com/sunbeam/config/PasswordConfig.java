package com.sunbeam.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
public class PasswordConfig {

	@Bean
	public static PasswordEncoder  passwordConvertor()
	{
		PasswordEncoder encode = new BCryptPasswordEncoder();
		return encode;
	}

}
