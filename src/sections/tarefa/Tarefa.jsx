import React from "react";


const Tarefa = () => {
    //'data', 'assunto', 'descricao', 'contato', 'tipo_id', 'created_at', 'updated_at'
    return (
        <div>
            <h2>Tarefa</h2>
            <form action=""></form>
            <div>
                <label htmlFor="data">Data</label>
                <input type="date" id="data" name="data" />
            </div>
            <div>
            <label htmlFor="assunto">Assunto</label>
                    <input type="text" id="assunto" name="assunto" />
            </div>
            <div>
            <label htmlFor="descricao">Descricao</label>
                    <textarea name="descricao" id="descricao" cols="30" rows="10"></textarea>
            </div>
            <div>
            <label htmlFor="contato">Contato</label>
                    <input type="text" id="contato" name="contato" />
            </div>
        </div>
    )
}

export default Tarefa