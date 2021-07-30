            //My api key
            var apikey = {
                key: 'b071834e-3783-4d53-b020-6584a876b0ba'
            }

        //GET Fetch Requisition
        fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY=' +
                apikey.key)
                .then((response) => {
                    if(!response.ok) throw new Error('Erro ao executar a requisição, status ' + response.status);
                    return response.json();
            })
            .then((api) => {
                
                var texto = "";
                // Get 10 coins and symbols 
                for(let i = 0; i < 30; i++){



                //Show API information

                   texto = texto + `
                  
                    <div class="media">
                        <img src="image/coin.png" class="align-self-center mr-3" alt="coin" width="80" height="80">
                        <div class="media-body">
                        <h5 class="mt-2">${api.data[i].name}</h5>
                        <h6 class="mb-1">${api.data[i].symbol}</h6>
                        <p>${api.data[i].first_historical_data}</p>
                        </div>
                    </div>
               
                    `;

                    document.getElementById("coins").innerHTML = texto;
                    
                }
            })
            .catch((error) => {
                console.error(error.message);
            });