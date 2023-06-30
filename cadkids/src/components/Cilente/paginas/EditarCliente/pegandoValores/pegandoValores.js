export const GetValores = (valores) =>{
    return {
        Nome          :valores[0],
        dataNascimento:valores[1],
        Rg            :valores[2],
        Cep           :valores[3],
        nome_Rua      :valores[4],
        numero_Rua    :valores[5],
        Bairro        :valores[6],
        Complemento   :valores[7],
        Cidade        :valores[8],
        Estado        :valores[9]
    }
}