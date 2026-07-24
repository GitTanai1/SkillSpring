package com.cognizant.ems.controller;

import com.cognizant.ems.model.Employee;
import com.cognizant.ems.projection.EmployeeNameEmailProjection;
import com.cognizant.ems.projection.EmployeeSummary;
import com.cognizant.ems.repository.DepartmentRepository;
import com.cognizant.ems.repository.EmployeeRepository;
import com.cognizant.ems.service.EmployeeBatchService;
import java.util.List;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/employees")
public class EmployeeController {

    private final EmployeeRepository employeeRepository;
    private final DepartmentRepository departmentRepository;
    private final EmployeeBatchService employeeBatchService;

    public EmployeeController(EmployeeRepository employeeRepository,
                              DepartmentRepository departmentRepository,
                              EmployeeBatchService employeeBatchService) {
        this.employeeRepository = employeeRepository;
        this.departmentRepository = departmentRepository;
        this.employeeBatchService = employeeBatchService;
    }

    @GetMapping
    public Page<Employee> getEmployees(@RequestParam(defaultValue = "0") int page,
                                       @RequestParam(defaultValue = "10") int size,
                                       @RequestParam(defaultValue = "id") String sortBy,
                                       @RequestParam(defaultValue = "asc") String direction) {
        Sort sort = "desc".equalsIgnoreCase(direction)
                ? Sort.by(sortBy).descending()
                : Sort.by(sortBy).ascending();
        Pageable pageable = PageRequest.of(page, size, sort);
        return employeeRepository.findAll(pageable);
    }

    @GetMapping("/search")
    public Page<Employee> searchEmployees(@RequestParam String name,
                                          @RequestParam(defaultValue = "0") int page,
                                          @RequestParam(defaultValue = "10") int size,
                                          @RequestParam(defaultValue = "name") String sortBy) {
        return employeeRepository.findByNameContainingIgnoreCase(name, PageRequest.of(page, size, Sort.by(sortBy)));
    }

    @GetMapping("/{id}")
    public ResponseEntity<Employee> getEmployee(@PathVariable Long id) {
        return employeeRepository.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/department/{departmentName}")
    public List<Employee> getEmployeesByDepartment(@PathVariable String departmentName) {
        return employeeRepository.findByDepartmentName(departmentName);
    }

    @GetMapping("/email")
    public ResponseEntity<Employee> getEmployeeByEmail(@RequestParam String email) {
        return employeeRepository.findByEmailAddress(email)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/named-query")
    public ResponseEntity<Employee> getEmployeeByNamedQuery(@RequestParam String email) {
        return employeeRepository.findByEmailNamed(email)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/projection/name-email/{departmentId}")
    public List<EmployeeNameEmailProjection> getNameEmailProjection(@PathVariable Long departmentId) {
        return employeeRepository.findByDepartmentId(departmentId);
    }

    @GetMapping("/projection/summary")
    public List<EmployeeSummary> getEmployeeSummaries() {
        return employeeRepository.findEmployeeSummaries();
    }

    @PostMapping
    public Employee createEmployee(@RequestBody Employee employee) {
        attachDepartment(employee);
        return employeeRepository.save(employee);
    }

    @PostMapping("/batch")
    public List<Employee> createEmployees(@RequestBody List<Employee> employees) {
        employees.forEach(this::attachDepartment);
        return employeeBatchService.saveAll(employees);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Employee> updateEmployee(@PathVariable Long id, @RequestBody Employee updatedEmployee) {
        return employeeRepository.findById(id)
                .map(employee -> {
                    employee.setName(updatedEmployee.getName());
                    employee.setEmail(updatedEmployee.getEmail());
                    employee.setSalary(updatedEmployee.getSalary());
                    employee.setDepartment(updatedEmployee.getDepartment());
                    attachDepartment(employee);
                    return ResponseEntity.ok(employeeRepository.save(employee));
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteEmployee(@PathVariable Long id) {
        if (!employeeRepository.existsById(id)) {
            return ResponseEntity.notFound().build();
        }
        employeeRepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }

    private void attachDepartment(Employee employee) {
        if (employee.getDepartment() != null && employee.getDepartment().getId() != null) {
            employee.setDepartment(departmentRepository.findById(employee.getDepartment().getId())
                    .orElse(employee.getDepartment()));
        }
    }
}
