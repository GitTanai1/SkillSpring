package com.cognizant.ormlearn;

import com.cognizant.ormlearn.model.Attempt;
import com.cognizant.ormlearn.model.AttemptOption;
import com.cognizant.ormlearn.model.AttemptQuestion;
import com.cognizant.ormlearn.model.Country;
import com.cognizant.ormlearn.model.Department;
import com.cognizant.ormlearn.model.Employee;
import com.cognizant.ormlearn.model.Product;
import com.cognizant.ormlearn.model.Skill;
import com.cognizant.ormlearn.repository.StockRepository;
import com.cognizant.ormlearn.service.AttemptService;
import com.cognizant.ormlearn.service.CountryService;
import com.cognizant.ormlearn.service.DepartmentService;
import com.cognizant.ormlearn.service.EmployeeService;
import com.cognizant.ormlearn.service.ProductCriteriaService;
import com.cognizant.ormlearn.service.SkillService;
import java.time.LocalDate;
import java.util.Comparator;
import java.util.List;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class OrmLearnApplication implements CommandLineRunner {

    private static final Logger LOGGER = LoggerFactory.getLogger(OrmLearnApplication.class);

    private final CountryService countryService;
    private final EmployeeService employeeService;
    private final DepartmentService departmentService;
    private final SkillService skillService;
    private final AttemptService attemptService;
    private final ProductCriteriaService productCriteriaService;
    private final StockRepository stockRepository;

    public OrmLearnApplication(CountryService countryService,
                               EmployeeService employeeService,
                               DepartmentService departmentService,
                               SkillService skillService,
                               AttemptService attemptService,
                               ProductCriteriaService productCriteriaService,
                               StockRepository stockRepository) {
        this.countryService = countryService;
        this.employeeService = employeeService;
        this.departmentService = departmentService;
        this.skillService = skillService;
        this.attemptService = attemptService;
        this.productCriteriaService = productCriteriaService;
        this.stockRepository = stockRepository;
    }

    public static void main(String[] args) {
        SpringApplication.run(OrmLearnApplication.class, args);
    }

    @Override
    public void run(String... args) {
        testGetAllCountries();
        testCountryCrud();
        testStockQueries();
        testGetEmployee();
        testAddSkillToEmployee();
        testGetAllPermanentEmployees();
        testAverageSalary();
        testNativeQuery();
        testGetAttempt();
        testCriteriaQuery();
    }

    public void testGetAllCountries() {
        LOGGER.info("Start");
        List<Country> countries = countryService.getAllCountries();
        LOGGER.debug("Countries: {}", countries);
        LOGGER.info("End");
    }

    public void testCountryCrud() {
        LOGGER.info("Start");
        countryService.addCountry("SG", "Singapore");
        countryService.updateCountry("SG", "Republic of Singapore");
        LOGGER.debug("Country: {}", countryService.findCountryByCode("SG"));
        countryService.deleteCountry("SG");
        LOGGER.info("End");
    }

    public void testStockQueries() {
        LOGGER.info("Start");
        LOGGER.debug("Facebook September 2019: {}",
                stockRepository.findByCodeAndDateBetween("FB", LocalDate.of(2019, 9, 1), LocalDate.of(2019, 9, 30)));
        LOGGER.debug("Google over 1250: {}", stockRepository.findByCodeAndCloseGreaterThan("GOOGL", 1250.0));
        LOGGER.info("End");
    }

    public void testGetEmployee() {
        LOGGER.info("Start");
        Employee employee = employeeService.get(1);
        LOGGER.debug("Employee: {}", employee);
        LOGGER.debug("Department: {}", employee.getDepartment());
        LOGGER.debug("Skills: {}", employee.getSkillList());
        LOGGER.info("End");
    }

    public void testAddSkillToEmployee() {
        LOGGER.info("Start");
        Employee employee = employeeService.get(3);
        Skill skill = skillService.get(1);
        employee.getSkillList().add(skill);
        employeeService.save(employee);
        LOGGER.debug("Updated skills: {}", employee.getSkillList());
        LOGGER.info("End");
    }

    public void testGetAllPermanentEmployees() {
        LOGGER.info("Start");
        List<Employee> employees = employeeService.getAllPermanentEmployees();
        LOGGER.debug("Permanent employees: {}", employees);
        employees.forEach(employee -> LOGGER.debug("Skills: {}", employee.getSkillList()));
        LOGGER.info("End");
    }

    public void testAverageSalary() {
        LOGGER.info("Start");
        LOGGER.debug("Average salary for department 1: {}", employeeService.getAverageSalary(1));
        LOGGER.info("End");
    }

    public void testNativeQuery() {
        LOGGER.info("Start");
        LOGGER.debug("Native employees: {}", employeeService.getAllEmployeesNative());
        LOGGER.info("End");
    }

    public void testDepartment() {
        LOGGER.info("Start");
        Department department = departmentService.get(1);
        LOGGER.debug("Department: {}", department);
        LOGGER.debug("Employees: {}", department.getEmployeeList());
        LOGGER.info("End");
    }

    public void testGetAttempt() {
        LOGGER.info("Start");
        Attempt attempt = attemptService.getAttempt(1, 1);
        LOGGER.debug("User: {}", attempt.getUser().getName());
        LOGGER.debug("Attempted Date: {}", attempt.getAttemptedDate());
        attempt.getAttemptQuestions().stream()
                .sorted(Comparator.comparing(AttemptQuestion::getId))
                .forEach(attemptQuestion -> {
                    LOGGER.debug("Question: {}", attemptQuestion.getQuestion().getText());
                    attemptQuestion.getAttemptOptions().stream()
                            .sorted(Comparator.comparing(AttemptOption::getId))
                            .forEach(attemptOption -> LOGGER.debug("{} {} {}",
                                    attemptOption.getOption().getText(),
                                    attemptOption.getOption().getCorrect() ? attemptQuestion.getQuestion().getScore() : 0.0,
                                    attemptOption.getSelected()));
                });
        LOGGER.info("End");
    }

    public void testCriteriaQuery() {
        LOGGER.info("Start");
        List<Product> products = productCriteriaService.search("book", 4.0, 16, null);
        LOGGER.debug("Criteria products: {}", products);
        LOGGER.info("End");
    }
}
