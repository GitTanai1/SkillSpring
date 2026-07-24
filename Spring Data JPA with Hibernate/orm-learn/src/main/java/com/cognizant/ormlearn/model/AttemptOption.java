package com.cognizant.ormlearn.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "attempt_option")
public class AttemptOption {

    @Id
    @Column(name = "ao_id")
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "ao_attempt_question_id")
    private AttemptQuestion attemptQuestion;

    @ManyToOne
    @JoinColumn(name = "ao_option_id")
    private QuizOption option;

    @Column(name = "ao_selected")
    private Boolean selected;

    public Integer getId() {
        return id;
    }

    public AttemptQuestion getAttemptQuestion() {
        return attemptQuestion;
    }

    public QuizOption getOption() {
        return option;
    }

    public Boolean getSelected() {
        return selected;
    }
}
