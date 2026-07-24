package com.cognizant.ormlearn.model;

import java.util.HashSet;
import java.util.Set;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "quiz_user")
public class QuizUser {

    @Id
    @Column(name = "qu_id")
    private Integer id;

    @Column(name = "qu_name")
    private String name;

    @OneToMany(mappedBy = "user")
    private Set<Attempt> attempts = new HashSet<>();

    public Integer getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public Set<Attempt> getAttempts() {
        return attempts;
    }
}
