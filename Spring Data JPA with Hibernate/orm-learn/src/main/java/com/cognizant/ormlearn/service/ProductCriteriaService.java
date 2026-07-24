package com.cognizant.ormlearn.service;

import com.cognizant.ormlearn.model.Product;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class ProductCriteriaService {

    @PersistenceContext
    private EntityManager entityManager;

    @Transactional(readOnly = true)
    public List<Product> search(String keyword, Double minimumRating, Integer minimumRam, String operatingSystem) {
        CriteriaBuilder builder = entityManager.getCriteriaBuilder();
        CriteriaQuery<Product> criteriaQuery = builder.createQuery(Product.class);
        Root<Product> product = criteriaQuery.from(Product.class);
        List<Predicate> predicates = new ArrayList<>();

        if (keyword != null && !keyword.trim().isEmpty()) {
            predicates.add(builder.like(builder.lower(product.get("name")), "%" + keyword.toLowerCase() + "%"));
        }
        if (minimumRating != null) {
            predicates.add(builder.greaterThanOrEqualTo(product.get("rating"), minimumRating));
        }
        if (minimumRam != null) {
            predicates.add(builder.greaterThanOrEqualTo(product.get("ramSize"), minimumRam));
        }
        if (operatingSystem != null && !operatingSystem.trim().isEmpty()) {
            predicates.add(builder.equal(builder.lower(product.get("operatingSystem")), operatingSystem.toLowerCase()));
        }

        criteriaQuery.where(predicates.toArray(new Predicate[0]));
        TypedQuery<Product> query = entityManager.createQuery(criteriaQuery);
        return query.getResultList();
    }
}
