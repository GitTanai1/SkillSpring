package com.cognizant.ormlearn.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "quiz_option")
public class QuizOption {

    @Id
    @Column(name = "op_id")
    private Integer id;

    @Column(name = "op_text")
    private String text;

    @Column(name = "op_correct")
    private Boolean correct;

    @ManyToOne
    @JoinColumn(name = "op_qn_id")
    private Question question;

    public Integer getId() {
        return id;
    }

    public String getText() {
        return text;
    }

    public Boolean getCorrect() {
        return correct;
    }

    public Question getQuestion() {
        return question;
    }
}
