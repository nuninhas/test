const getJSON = async url => {
    const response = await fetch(url);
    
  
    const data = response.json(); // 
    return data; 
  }
  
  getJSON("https://expertpeticoes.com/adm/api/vendas?type=ALL&value=null&page=1&direction=ASC").then(data => {
    console.log(data);
  }).catch(error => {
    console.error(error);
  });

  getJSON.onload = () => {
      const date = JSON.parse(getJSON.response)
      date.forEach(element => {
          tabela.appendChild(criaNovaLinha())
      })
  }

  const criaNovaLinha = () => {
    const linhaNovoCliente = document.createElement('tr')
      const content = `<td class="td" data-td>${payments}</td>`
  
    linhaNovoCliente.innerHTML = content
    return linhaNovoCliente    
    }
    const tabela = document.querySelector('[data-tabela]')