const { BrasilAPI } = require("brasilapi");
const brasilApi = new BrasilAPI();

const NewAPI = require("newsapi");
const newsApi = new NewAPI("dcafbc9754714e4cb2adb0719c00dcad");

const { format, parseISO } = require("date-fns");


async function artigosENoticias(req, res) {
    const { assunto, pagina } = req.query;

    try {
        const busca = await newsApi.v2.everything({
            q: assunto,
            language: "pt",
            page: Number(pagina),
            pageSize: 7
        });


        const formatacaoArtigos = busca.articles.map((artigo) => {
            return {
                titulo: artigo.title,
                autor: artigo.author,
                fonte: artigo.source.name,
                dercricao: artigo.description,
                url: artigo.url,
                data_publicacao: format(parseISO(artigo.publishedAt), "dd/MM/yyyy kk:mm")
            }
        })


        return res.status(200).json(formatacaoArtigos);

    } catch (error) {
        return res.status(500).json({ erro: error.message });
    }
}

module.exports = artigosENoticias;


