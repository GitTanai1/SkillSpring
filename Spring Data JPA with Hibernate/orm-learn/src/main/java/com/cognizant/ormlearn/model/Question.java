package com.cognizant.ormlearn.model;

import java.util.HashSet;
import java.util.Set;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "question")
public class Question {

    @Id
    @Column(name = "qn_id")
    private Integer id;

    @Column(name = "qn_text", length = 500)
    private String text;

    @Column(name = "qn_score")
    private Double score;

    @OneToMany(mappedBy = "question")
    private Set<QuizOption> options = new HashSet<>();

    public Integer getId() {
        return id;
    }

    public String getText() {
        return text;
    }

    public Double getScore() {
        return score;
    }

    public Set<QuizOption> getOptions() {
        return options;
    }
}
