/* pasta para modelar classe vitrine */

export default class Vitrine{
    constructor(elemento){
    this.elementoPai=elemento;
    }

    renderizar(produtos){
        this.elementoPai.innerHTML='';

        produtos.forEach(produto => {
        
            const li = document.createElement('li');

        
            const imagem=document.createElement('img');
            imagem.src=`https://kenzie-academy-brasil.gitlab.io/fullstack/frontend/modulo2/sprint3/img/consumindo-api-produtos/${produto.id}/Image.png`;
            imagem.alt='Imagem';

            const descricao= document.createElement('div');
            

            const reviews=document.createElement('div');
            let contador= produto.reviews;
            for(let count=1; count<=5; count++){
                const estrela=document.createElement('img');
                estrela.src= contador>0 ? './src/assets/estrelaCheia.svg' : './src/assets/estrelaVazia.svg';
                contador--;
                reviews.appendChild(estrela);
            }

            const nome= document.createElement('p');
            nome.innerText=produto.productName;

            const div= document.createElement('div');
            div.classList.add('box-preco');
            if(produto.promotionStatus){
                const precoTotal= document.createElement('span');
                precoTotal.innerText= `De: R$${produto.price.productPrice.toFixed(2).replace('.',',')}`;
                precoTotal.classList.add('precoTotal');

                const preco= document.createElement('span');
                preco.innerText=`R$${produto.price.productPromotionPrice.toFixed(2).replace('.',',')}`;
                preco.classList.add('preco');

                div.append(precoTotal,preco);
            } else{
                const preco= document.createElement('span');
                preco.innerText= `R$${produto.price.productPrice.toFixed(2).replace('.',',')}`;
                preco.classList.add('preco');

                div.appendChild(preco);
            }



            const botao= document.createElement('span');
            botao.innerText='COMPRAR';
            botao.classList.add('botao')

            descricao.append(reviews,nome,div,botao)

            li.appendChild(imagem);
            li.appendChild(descricao);
            this.elementoPai.appendChild(li);
        });
        
    }
}



 

