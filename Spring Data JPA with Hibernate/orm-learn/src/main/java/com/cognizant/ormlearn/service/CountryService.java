package com.cognizant.ormlearn.service;

import com.cognizant.ormlearn.model.Country;
import com.cognizant.ormlearn.repository.CountryRepository;
import com.cognizant.ormlearn.service.exception.CountryNotFoundException;
import java.util.List;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class CountryService {

    private final CountryRepository countryRepository;

    public CountryService(CountryRepository countryRepository) {
        this.countryRepository = countryRepository;
    }

    @Transactional(readOnly = true)
    public List<Country> getAllCountries() {
        return countryRepository.findAll();
    }

    @Transactional(readOnly = true)
    public Country findCountryByCode(String code) {
        return countryRepository.findById(code).orElseThrow(() -> new CountryNotFoundException(code));
    }

    @Transactional
    public Country addCountry(String code, String name) {
        return countryRepository.save(new Country(code, name));
    }

    @Transactional
    public Country updateCountry(String code, String name) {
        Country country = findCountryByCode(code);
        country.setName(name);
        return countryRepository.save(country);
    }

    @Transactional
    public void deleteCountry(String code) {
        Country country = findCountryByCode(code);
        countryRepository.delete(country);
    }
}
