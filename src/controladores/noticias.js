const NewAPI = require("newsapi");
const newsApi = new NewAPI("dcafbc9754714e4cb2adb0719c00dcad");

const { format, parseISO } = require("date-fns");


async function artigosENoticias(req, res) {
    let { pagina, assunto } = req.query;

    if (!pagina) {
        pagina = 1;
    }

    try {
        const busca = await newsApi.v2.everything({
            q: assunto,
            language: 'pt',
            sortBy: 'relevancy',
            page: Number(pagina),
            pageSize: 5
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


        return res.status(200).json({
            resultados_encontrados: busca.totalResults,
            noticias: formatacaoArtigos
        });

    } catch (error) {
        return res.status(500).json({ erro: error.message });
    }
}


module.exports = artigosENoticias;

