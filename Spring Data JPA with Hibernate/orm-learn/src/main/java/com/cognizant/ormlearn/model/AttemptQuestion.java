package com.cognizant.ormlearn.model;

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
@Table(name = "attempt_question")
public class AttemptQuestion {

    @Id
    @Column(name = "aq_id")
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "aq_attempt_id")
    private Attempt attempt;

    @ManyToOne
    @JoinColumn(name = "aq_question_id")
    private Question question;

    @OneToMany(mappedBy = "attemptQuestion")
    private Set<AttemptOption> attemptOptions = new HashSet<>();

    public Integer getId() {
        return id;
    }

    public Attempt getAttempt() {
        return attempt;
    }

    public Question getQuestion() {
        return question;
    }

    public Set<AttemptOption> getAttemptOptions() {
        return attemptOptions;
    }
}
