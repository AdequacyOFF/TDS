package com.tds.tds_project.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.tds.tds_project.entity.User;

public interface UserRepository extends JpaRepository<User, Integer> {}