async function verificacoesEverthing(req, res, next) {
    const { assunto, idioma, pagina } = req.query;

    if (!assunto) {
        return res.status(400).json({ mensagem: "Por favor, informe o assunto para realizar a busca." });
    }

    if (!pagina) {
        return res.status(400).json({ mensagem: "Por favor, informe a página." });
    }

    next();
}

module.exports = verificacoesEverthing;