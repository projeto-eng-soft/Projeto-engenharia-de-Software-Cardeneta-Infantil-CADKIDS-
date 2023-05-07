import { StyleSheet }  from "react-native";

import  plano_de_fundo    from 'static/imagens/plano_de_fundo_padrao.png';

export const getStyles = () => 
{
    const Style = StyleSheet.create({
        container: {
            flex           : 1,
            alignItems     : 'center',
            justifyContent : 'center',
            backgroundImage: `url(${plano_de_fundo})`,
        },
        icone:{
            width :50,
            height:50
        }
    });
    return Style;
}