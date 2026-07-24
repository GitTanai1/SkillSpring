package com.cognizant.ems;

import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import com.cognizant.ems.repository.DepartmentRepository;
import com.cognizant.ems.repository.EmployeeRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class EmployeeManagementSystemApplicationTests {

    @Autowired
    private EmployeeRepository employeeRepository;

    @Autowired
    private DepartmentRepository departmentRepository;

    @Test
    void contextLoads() {
        assertNotNull(employeeRepository);
        assertNotNull(departmentRepository);
    }

    @Test
    void seedDataLoads() {
        assertFalse(employeeRepository.findAll().isEmpty());
        assertFalse(departmentRepository.findAll().isEmpty());
    }
}
