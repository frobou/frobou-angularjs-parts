# frobou-angularjs-parts
micro projetos para uso no angularjs

- frobou.auth
fornece servicos de autenticacao diversos

    AuthBasicService
        servico personalizavel para fazer uma autenticacao do tipo basic
        metodos disponiveis:
        
        login(config)
            recebe um objeto de configuracao e retorna uma promessa com a resposta que a url chamada contiver
            config = {
                username: '',   //required
                password: '',   //required
                url: '',        //required
                hash: bool,     //default = false
                method: '',     //default = GET
                headers: {      //default = {}
                    'FROM': 'WEB'
                }
            }
