import Vitrine from "./models/Vitrine.js";
import Api from "./controllers/Api.js";

const listaProdutos = await Api.requisicao('https://m2-kenzie-shop.herokuapp.com/products');

const vitrine = new Vitrine(
    document.getElementById('produtos')
);

vitrine.renderizar(listaProdutos);

