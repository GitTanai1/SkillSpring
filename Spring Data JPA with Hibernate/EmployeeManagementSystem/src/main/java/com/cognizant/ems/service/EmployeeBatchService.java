package com.cognizant.ems.service;

import com.cognizant.ems.model.Employee;
import com.cognizant.ems.repository.EmployeeRepository;
import java.util.List;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class EmployeeBatchService {

    private final EmployeeRepository employeeRepository;

    public EmployeeBatchService(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    @Transactional
    public List<Employee> saveAll(List<Employee> employees) {
        return employeeRepository.saveAll(employees);
    }
}
