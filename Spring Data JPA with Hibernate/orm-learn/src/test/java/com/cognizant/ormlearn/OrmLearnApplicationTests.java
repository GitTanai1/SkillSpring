package com.cognizant.ormlearn;

import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import com.cognizant.ormlearn.service.CountryService;
import com.cognizant.ormlearn.service.EmployeeService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class OrmLearnApplicationTests {

    @Autowired
    private CountryService countryService;

    @Autowired
    private EmployeeService employeeService;

    @Test
    void contextLoads() {
        assertNotNull(countryService);
    }

    @Test
    void countriesAreLoaded() {
        assertFalse(countryService.getAllCountries().isEmpty());
    }

    @Test
    void permanentEmployeesAreFetchedWithSkills() {
        assertFalse(employeeService.getAllPermanentEmployees().isEmpty());
    }
}
