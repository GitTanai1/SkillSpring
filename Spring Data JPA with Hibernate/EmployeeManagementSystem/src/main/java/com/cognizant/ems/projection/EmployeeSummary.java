package com.cognizant.ems.projection;

public class EmployeeSummary {

    private final Long id;
    private final String name;
    private final String departmentName;

    public EmployeeSummary(Long id, String name, String departmentName) {
        this.id = id;
        this.name = name;
        this.departmentName = departmentName;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getDepartmentName() {
        return departmentName;
    }
}
