import { db } from "../db"

export const getTask = (_, res) => {
    const consultaTodasTarefas = "SELECT * FROM tarefas";

    db.query(consultaTodasTarefas, (err, data) => {
        if(err) return res.json(err);

        return res.status(200).json(data);
    })
}

export const addTask = (req, res) => {
    const inserirNovaTarefa = "INSERT INTO tarefas(`titulo`, `descricao`) VALUES(?)";

    const values = [
        req.body.titulo,
        req.body.descricao     
    ];

    db.query(inserirNovaTarefa, [values], (err) => {
        if(err) return res.json(err);

        return res.status(200).json("Tarefa criada com sucesso.")
    })
}

export const updateTask = (req, res) => {
    const atualizarTarefa = "UPDATE tarefas SET `titulo` = ?, `descricao` = ? WHERE `id` = ?";

    const values = [
        req.body.titulo,
        req.body.descricao,      
    ];

    db.query(atualizarTarefa, [...values, req.params.id], (err) => {
        if(err) return res.json(err);

        return res.status(200).json("Tarefa atualizada com sucesso.")
    })
}

export const deleteTask = (req, res) => {
    const deletarTarefa = "DELETE FROM tarefas WHERE `id` = ?";

    db.query(deletarTarefa, [req.params.id], (err) => {
        if(err) return res.json(err);

        return res.status(200).json("Tarefa excluída com sucesso.")
    })
}