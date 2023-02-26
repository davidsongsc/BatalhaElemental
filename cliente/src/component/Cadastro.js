import React from "react";

function Cadastro() {

    return (
        <section>
            <h2>Cadastro de Usuário</h2>
                <form id="form-cadastro" >
                <label for="input-usuario">Usuário:</label>
                <input type="text" id="input-usuario" name="usuario"  required />
                <label for="input-senha">Senha:</label>
                <input type="password" id="input-senha" name="senha" required />
                <div id="senha-forca"></div>
                <label for="input-confirma-senha">Confirme a senha:</label>
                <input type="password" id="input-confirma-senha" name="confirma-senha" required />
                <label for="input-email">E-mail:</label>
                <input type="email" id="input-email" name="email" required />
                <label for="input-telefone">Telefone:</label>
                <input type="tel" id="input-telefone" name="telefone" required />
                <label for="input-nome-completo">Nome Completo:</label>
                <input type="text" id="input-nome-completo" name="nome-completo" required />
                <button type="submit">Cadastrar</button>
                </form>
        </section>
    );
}

export default Cadastro;