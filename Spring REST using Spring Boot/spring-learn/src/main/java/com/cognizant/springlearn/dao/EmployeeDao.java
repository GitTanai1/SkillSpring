package com.cognizant.springlearn.dao;

import com.cognizant.springlearn.model.Employee;
import com.cognizant.springlearn.service.exception.EmployeeNotFoundException;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.PostConstruct;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.stereotype.Repository;

@Repository
public class EmployeeDao {

    public static final List<Employee> EMPLOYEE_LIST = new ArrayList<>();

    @PostConstruct
    public void init() {
        if (!EMPLOYEE_LIST.isEmpty()) {
            return;
        }
        try (ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext("employee.xml")) {
            @SuppressWarnings("unchecked")
            List<Employee> employees = context.getBean("employeeList", List.class);
            EMPLOYEE_LIST.addAll(employees);
        }
    }

    public List<Employee> getAllEmployees() {
        return EMPLOYEE_LIST;
    }

    public Employee getEmployee(int id) {
        return EMPLOYEE_LIST.stream()
                .filter(employee -> employee.getId() == id)
                .findFirst()
                .orElseThrow(EmployeeNotFoundException::new);
    }

    public Employee updateEmployee(int id, Employee updatedEmployee) {
        Employee employee = getEmployee(id);
        employee.setName(updatedEmployee.getName());
        employee.setSalary(updatedEmployee.getSalary());
        employee.setPermanent(updatedEmployee.isPermanent());
        employee.setDepartment(updatedEmployee.getDepartment());
        employee.setSkills(updatedEmployee.getSkills());
        return employee;
    }

    public void deleteEmployee(int id) {
        Employee employee = getEmployee(id);
        EMPLOYEE_LIST.remove(employee);
    }
}
