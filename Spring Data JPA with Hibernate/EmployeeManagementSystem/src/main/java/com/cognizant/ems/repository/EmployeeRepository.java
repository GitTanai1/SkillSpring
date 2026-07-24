package com.cognizant.ems.repository;

import com.cognizant.ems.model.Employee;
import com.cognizant.ems.projection.EmployeeNameEmailProjection;
import com.cognizant.ems.projection.EmployeeSummary;
import java.util.List;
import java.util.Optional;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long> {

    Page<Employee> findByNameContainingIgnoreCase(String name, Pageable pageable);

    List<Employee> findByDepartmentName(String departmentName);

    @Query("select e from Employee e where e.email = :email")
    Optional<Employee> findByEmailAddress(@Param("email") String email);

    @Query(name = "Employee.findByEmailNamed")
    Optional<Employee> findByEmailNamed(@Param("email") String email);

    List<EmployeeNameEmailProjection> findByDepartmentId(Long departmentId);

    @Query("select new com.cognizant.ems.projection.EmployeeSummary(e.id, e.name, d.name) "
            + "from Employee e join e.department d")
    List<EmployeeSummary> findEmployeeSummaries();
}
