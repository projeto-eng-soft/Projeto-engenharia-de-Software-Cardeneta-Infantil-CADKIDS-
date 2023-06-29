export function Dados_nulos(valores){
    var iter = 0;
    for (let i = 0; i < valores.length; i++) {
        if (valores[i]==null)iter+=1;
    }
    return iter;
    if (iter == 0) return false;
    else           return true;
}