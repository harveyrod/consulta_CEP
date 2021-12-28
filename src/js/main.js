const cep = document.querySelector("#cep") // constante que lerá o valor inserido no campo CEP

const showData = (result) => {
    for (const campo in result){ // o FOR IN faz com que o valor recebido seja armazenado na constante CAMPO
        if (document.querySelector("#"+campo)){ // O uso da # fará com que o Selector traga somente os campos iguais
            document.querySelector("#"+campo).value = result[campo] // Faz com que os valores dos campos correspondemtes sejam preenchidos
        }  
        }
} // constante criada para tratar os dados obtidos pela FETCH - no caso um Object

//Criando um evento // o BLUR permite ver o que foi digitado após o usuário tirar o foco do campo
cep.addEventListener("blur", (e) => {   
    let search = cep.value.replace("-", "") // a função REPLACE substitui o item indicado no primeiro "" pelo valor do ""
    
    const options = {
        method : 'GET', // método de tratamento dos dados
        mode : 'cors', // o CORS significa que estaremos cruzando dominios diferentes
        cache : 'default' // tipo de cache
    }

    fetch(`https://viacep.com.br/ws/${search}/json/`, options) // criação da URL que acessará as informações da API, e de que forma(options)
    .then(response => {response.json()
        .then(data => showData(data))
    })   // ação(function) a tomar em caso de sucesso - neste caso mostrar os dados(data) no console
    .catch(e => console.log('Deu erro!', e + message))  // ação(function) a tomar em caso de insucesso
    if (response = 400){
        document.getElementById('cep').value = 'CEP inválido! Clique em "NOVA CONSULTA" e tente novamente'
    }
    }) 

function limpa(){
    document.getElementById('cep').value = '';
    document.getElementById('logradouro').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('localidade').value = '';
    document.getElementById('uf').value = '';
}
