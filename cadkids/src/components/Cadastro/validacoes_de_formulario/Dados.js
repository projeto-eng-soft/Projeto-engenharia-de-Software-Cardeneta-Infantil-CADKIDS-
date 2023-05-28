export const Dados_cadastro = (route,E_mail,Senha) =>{
    var Cpf = route.params.Cpf
    Cpf = Cpf.replace('.','')
    Cpf = Cpf.replace('.','')
    Cpf = Cpf.replace('-','')
    Cpf = parseInt(Cpf)
    
    const Valor = { 
        Nome          :route.params.NomeUser       ,
        dataNascimento:route.params.dataNascimento ,    
        Rg            :route.params.Rg            ,
        Cpf           :Cpf                         ,
        Cep           :route.params.Cep            ,
        nome_Rua      :route.params.nome_Rua       ,
        numero_Rua    :route.params.numero_Rua     ,
        Bairro        :route.params.Bairro         ,
        Completemento :route.params.Completemento  ,
        Cidade        :route.params.Cidade         ,
        Estado        :route.params.Estado         ,
        E_mail        :E_mail                      ,   
        Senha         :Senha    
    } 
    return Valor
}