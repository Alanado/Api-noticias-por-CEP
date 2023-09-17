async function verificacoesEverthing(req, res, next) {
    const { assunto } = req.query;

    if (!assunto) {
        return res.status(400).json({ mensagem: "Por favor, informe o CEP para realizar a pesquisa" });
    }

    next();
}


module.exports = verificacoesEverthing;