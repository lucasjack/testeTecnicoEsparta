-- select de alunos atraves do professor JOAO PEDRO
SELECT A.nome 
	FROM aluno AS A
	JOIN aluno_turma AS A_T
	ON (A.id = A_T.aluno_id)
	JOIN turma AS T
	ON (T.id = A_T.turma_id)
	JOIN professor AS P
	ON (P.id = T.professor)
	WHERE (p.nome = 'JOAO PEDRO'); 

-- select de dias da semana com aulas de matematica
SELECT T.dia_da_semana
	FROM turma AS T
	JOIN disciplina AS D 
	ON (D.id = T.disciplina_id)
	WHERE (D.nome = 'MATEMATICA');

-- select de alunos qe frequentam ambas as aulas de matemaatica e fisica
SELECT A.nome
	FROM aluno AS A
	JOIN aluno_turma AS A_T
	ON (A.id = A_T.aluno_id)
	JOIN turma AS T
	ON (T.id = A_T.turma_id)
	JOIN disciplina AS D 
	ON (D.id = T.disciplina_id)
	WHERE (D.nome = 'MATEMATICA') AND (D.nome = 'FISICA'); 

-- select de disciplinas que nao estao inseridas em turma alguma
SELECT D.nome 
	FROM disciplina AS D 
	JOIN turma AS T 
	ON NOT (T.disciplina_id = D.id);

-- select de alunos matriculados em matematica porem nao em fisica 
SELECT A.nome
	FROM aluno AS A
	JOIN aluno_turma AS A_T
	ON (A.id = A_T.aluno_id)
	JOIN turma AS T
	ON (T.id = A_T.turma_id)
	JOIN disciplina AS D 
	ON (D.id = T.disciplina_id)
	WHERE (D.nome = 'MATEMATICA') AND NOT (D.nome = 'FISICA'); 
		
	