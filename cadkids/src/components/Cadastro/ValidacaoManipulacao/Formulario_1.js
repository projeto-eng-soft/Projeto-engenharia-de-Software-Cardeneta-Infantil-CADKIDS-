
export function VdataNascimento(dataNascimento)
{
    if (dataNascimento == null) return false;

    const mes_nascimento = parseInt(dataNascimento.split("/")[1]);
    const ano_nascimento = parseInt(dataNascimento.split("/")[2]);
    
    const bool_mes = mes_nascimento >=1 && mes_nascimento <=12;
    const bool_ano = ano_nascimento >=1988 && ano_nascimento <=2002;
    
    if (bool_ano && bool_mes) return true
    else                      return false
}

export function VRg(Rg)
{
    if (Rg == null) return false

    if (Rg.length == 9) return true
    else                return false
}
export function Vcpf(Cpf){
    if (Cpf == null) return false
    
    if (Cpf.length == 14)  return true
    else                   return false
}