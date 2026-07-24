package com.cognizant.ormlearn.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "product")
public class Product {

    @Id
    @Column(name = "pr_id")
    private Integer id;

    @Column(name = "pr_name")
    private String name;

    @Column(name = "pr_category")
    private String category;

    @Column(name = "pr_rating")
    private Double rating;

    @Column(name = "pr_ram_size")
    private Integer ramSize;

    @Column(name = "pr_operating_system")
    private String operatingSystem;

    @Column(name = "pr_weight")
    private Double weight;

    public Integer getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getCategory() {
        return category;
    }

    public Double getRating() {
        return rating;
    }

    public Integer getRamSize() {
        return ramSize;
    }

    public String getOperatingSystem() {
        return operatingSystem;
    }

    public Double getWeight() {
        return weight;
    }

    @Override
    public String toString() {
        return "Product{id=" + id + ", name='" + name + "', category='" + category + "'}";
    }
}
