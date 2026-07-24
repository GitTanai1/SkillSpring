package com.cognizant.ems.repository;

import com.cognizant.ems.model.Department;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DepartmentRepository extends JpaRepository<Department, Long> {

    List<Department> findByNameContainingIgnoreCase(String name);
}
