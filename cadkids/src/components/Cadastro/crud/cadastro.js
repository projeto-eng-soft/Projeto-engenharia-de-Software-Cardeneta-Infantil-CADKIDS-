

export default class Usuario{
    #nome;
    #data;
    #registro_geral;
    #cadastro_de_pessoa_fisica;
    #cep;
    #rua; #numero;

    setNome(nome){ this.nome = nome;}
    setDate(data){ this.data = data;}
    setRegistro(registro_geral){ this.registro_geral = registro_geral;}
    setCpf(Cpf){ this.cadastro_de_pessoa_fisica = Cpf;}
    setCep(Cep){ this.cep;}
}