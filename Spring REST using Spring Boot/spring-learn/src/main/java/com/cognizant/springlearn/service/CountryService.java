package com.cognizant.springlearn.service;

import com.cognizant.springlearn.model.Country;
import com.cognizant.springlearn.service.exception.CountryNotFoundException;
import java.util.List;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.stereotype.Service;

@Service
public class CountryService {

    private static final Logger LOGGER = LoggerFactory.getLogger(CountryService.class);

    public Country getIndia() {
        LOGGER.info("START");
        try (ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext("country.xml")) {
            Country country = context.getBean("country", Country.class);
            LOGGER.info("END");
            return country;
        }
    }

    public List<Country> getAllCountries() {
        LOGGER.info("START");
        try (ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext("country.xml")) {
            @SuppressWarnings("unchecked")
            List<Country> countries = context.getBean("countryList", List.class);
            LOGGER.info("END");
            return countries;
        }
    }

    public Country getCountry(String code) {
        LOGGER.info("START");
        Country country = getAllCountries().stream()
                .filter(item -> item.getCode().equalsIgnoreCase(code))
                .findFirst()
                .orElseThrow(CountryNotFoundException::new);
        LOGGER.info("END");
        return country;
    }

    public Country addCountry(Country country) {
        LOGGER.info("START");
        LOGGER.debug("Country posted: {}", country);
        LOGGER.info("END");
        return country;
    }
}
