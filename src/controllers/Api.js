/* pasta para requisição */


export default class Api {

    static async requisicao(url){
        

        let response = await fetch(url)
        let data = await response.json()
        return data.products

    }
}
    

