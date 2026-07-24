insert into country (co_code, co_name) values ('IN', 'India');
insert into country (co_code, co_name) values ('US', 'United States');
insert into country (co_code, co_name) values ('JP', 'Japan');
insert into country (co_code, co_name) values ('DE', 'Germany');

insert into stock (st_id, st_code, st_date, st_open, st_close, st_volume) values (1, 'FB', '2019-09-02', 180.00, 182.50, 10000);
insert into stock (st_id, st_code, st_date, st_open, st_close, st_volume) values (2, 'FB', '2019-09-15', 184.00, 186.20, 12000);
insert into stock (st_id, st_code, st_date, st_open, st_close, st_volume) values (3, 'GOOGL', '2019-09-20', 1230.00, 1262.25, 15000);
insert into stock (st_id, st_code, st_date, st_open, st_close, st_volume) values (4, 'GOOGL', '2019-10-01', 1275.00, 1288.90, 16000);

insert into department (dp_id, dp_name) values (1, 'Technology');
insert into department (dp_id, dp_name) values (2, 'Human Resources');
insert into department (dp_id, dp_name) values (3, 'Finance');

insert into skill (sk_id, sk_name) values (1, 'Java');
insert into skill (sk_id, sk_name) values (2, 'Spring Boot');
insert into skill (sk_id, sk_name) values (3, 'Hibernate');
insert into skill (sk_id, sk_name) values (4, 'SQL');

insert into employee (em_id, em_name, em_salary, em_permanent, em_date_of_birth, em_dp_id) values (1, 'John', 75000, true, '1990-01-10', 1);
insert into employee (em_id, em_name, em_salary, em_permanent, em_date_of_birth, em_dp_id) values (2, 'Jane', 82000, true, '1991-03-18', 1);
insert into employee (em_id, em_name, em_salary, em_permanent, em_date_of_birth, em_dp_id) values (3, 'Ravi', 65000, false, '1992-07-11', 2);
insert into employee (em_id, em_name, em_salary, em_permanent, em_date_of_birth, em_dp_id) values (4, 'Mary', 70000, true, '1989-12-02', 3);

insert into employee_skill (es_em_id, es_sk_id) values (1, 1);
insert into employee_skill (es_em_id, es_sk_id) values (1, 2);
insert into employee_skill (es_em_id, es_sk_id) values (2, 2);
insert into employee_skill (es_em_id, es_sk_id) values (2, 3);
insert into employee_skill (es_em_id, es_sk_id) values (4, 4);

insert into product (pr_id, pr_name, pr_category, pr_rating, pr_ram_size, pr_operating_system, pr_weight) values (1, 'WorkBook 14', 'laptop', 4.5, 16, 'Windows', 1.4);
insert into product (pr_id, pr_name, pr_category, pr_rating, pr_ram_size, pr_operating_system, pr_weight) values (2, 'DevMate Pro', 'laptop', 4.8, 32, 'Linux', 1.6);
insert into product (pr_id, pr_name, pr_category, pr_rating, pr_ram_size, pr_operating_system, pr_weight) values (3, 'Desk Display', 'monitor', 4.2, 0, 'None', 3.7);

insert into quiz_user (qu_id, qu_name) values (1, 'arun');
insert into question (qn_id, qn_text, qn_score) values (1, 'What is the extension of the hyper text markup language file?', 1.0);
insert into question (qn_id, qn_text, qn_score) values (2, 'What is the maximum level of heading tag can be used in a HTML page?', 1.0);
insert into quiz_option (op_id, op_text, op_correct, op_qn_id) values (1, '.xhtm', false, 1);
insert into quiz_option (op_id, op_text, op_correct, op_qn_id) values (2, '.ht', false, 1);
insert into quiz_option (op_id, op_text, op_correct, op_qn_id) values (3, '.html', true, 1);
insert into quiz_option (op_id, op_text, op_correct, op_qn_id) values (4, '.htmx', false, 1);
insert into quiz_option (op_id, op_text, op_correct, op_qn_id) values (5, '5', false, 2);
insert into quiz_option (op_id, op_text, op_correct, op_qn_id) values (6, '3', false, 2);
insert into quiz_option (op_id, op_text, op_correct, op_qn_id) values (7, '4', false, 2);
insert into quiz_option (op_id, op_text, op_correct, op_qn_id) values (8, '6', true, 2);
insert into attempt (at_id, at_date, at_user_id) values (1, '2026-07-24', 1);
insert into attempt_question (aq_id, aq_attempt_id, aq_question_id) values (1, 1, 1);
insert into attempt_question (aq_id, aq_attempt_id, aq_question_id) values (2, 1, 2);
insert into attempt_option (ao_id, ao_attempt_question_id, ao_option_id, ao_selected) values (1, 1, 1, false);
insert into attempt_option (ao_id, ao_attempt_question_id, ao_option_id, ao_selected) values (2, 1, 2, false);
insert into attempt_option (ao_id, ao_attempt_question_id, ao_option_id, ao_selected) values (3, 1, 3, true);
insert into attempt_option (ao_id, ao_attempt_question_id, ao_option_id, ao_selected) values (4, 1, 4, false);
insert into attempt_option (ao_id, ao_attempt_question_id, ao_option_id, ao_selected) values (5, 2, 5, false);
insert into attempt_option (ao_id, ao_attempt_question_id, ao_option_id, ao_selected) values (6, 2, 6, true);
insert into attempt_option (ao_id, ao_attempt_question_id, ao_option_id, ao_selected) values (7, 2, 7, false);
insert into attempt_option (ao_id, ao_attempt_question_id, ao_option_id, ao_selected) values (8, 2, 8, false);
