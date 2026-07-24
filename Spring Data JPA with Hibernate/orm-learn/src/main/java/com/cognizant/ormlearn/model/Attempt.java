package com.cognizant.ormlearn.model;

import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "attempt")
public class Attempt {

    @Id
    @Column(name = "at_id")
    private Integer id;

    @Column(name = "at_date")
    private LocalDate attemptedDate;

    @ManyToOne
    @JoinColumn(name = "at_user_id")
    private QuizUser user;

    @OneToMany(mappedBy = "attempt")
    private Set<AttemptQuestion> attemptQuestions = new HashSet<>();

    public Integer getId() {
        return id;
    }

    public LocalDate getAttemptedDate() {
        return attemptedDate;
    }

    public QuizUser getUser() {
        return user;
    }

    public Set<AttemptQuestion> getAttemptQuestions() {
        return attemptQuestions;
    }
}
