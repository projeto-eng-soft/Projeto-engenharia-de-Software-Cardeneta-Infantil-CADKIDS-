export function VSenha(Senha,reSenha){
    if (Senha == null || reSenha == null) return false;
    if (Senha == reSenha && Senha.length != 0 && reSenha != 0) {
          return true;
    }else return false;
}

