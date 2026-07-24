package com.cognizant.springlearn.dao;

import com.cognizant.springlearn.model.Department;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.PostConstruct;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.stereotype.Repository;

@Repository
public class DepartmentDao {

    private final List<Department> departmentList = new ArrayList<>();

    @PostConstruct
    public void init() {
        if (!departmentList.isEmpty()) {
            return;
        }
        try (ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext("employee.xml")) {
            @SuppressWarnings("unchecked")
            List<Department> departments = context.getBean("departmentList", List.class);
            departmentList.addAll(departments);
        }
    }

    public List<Department> getAllDepartments() {
        return departmentList;
    }
}
