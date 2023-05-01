import   React,{ useState } from "react";
import { StyleSheet }     from "react-native";
import { View, Text, TextInput,ImageBackground } from "react-native";


import plano_fundo      from '../static/img/fundo_padrao.png';
import Button_continuar from './form_touch/button_continua';

export default function Formulario_2({navigation}){
    return(
        <ImageBackground source={plano_fundo} style={Style.container}>
            
            <View style={Style.formulario_view}>
                <View>
                    <Text style={Style.text}>Cep</Text>
                    <TextInput 
                        placeholder  ="Digite seu Cep"
                        style        = {Style.textInput}
                        keyboardType = "numeric"
                        maxLength    = {8}
                    />

                    <View style={Style.container_bairro_rua}>
                        <View>
                            <Text style={Style.text_bairro_rua}>Rua </Text>
                            <TextInput
                                placeholder  ="Digite o nome da rua"
                                style        = {Style.textInput_rua}
                            />
                        </View>

                        <View style={{paddingLeft:20}}>
                            <Text style={Style.text_bairro_rua}>Número </Text>
                            <TextInput
                                placeholder  ="Digite o numero"
                                keyboardType ='numeric'
                                style        = {Style.textInput_numero}
                            />
                        </View>
                    </View>

                    <Text style={Style.text}>Bairro</Text>
                    <TextInput 
                        placeholder  ="Digite nome de seu bairro"
                        style        = {Style.textInput}
                        maxLength    = {7}

                    />

                    <Text style={Style.text}>Completemento</Text>
                    <TextInput 
                        placeholder  ="Digite seu complemento"
                        style        = {Style.textInput}
                        maxLength    = {11}
                    />

                    <Text style={Style.text}>Cidade</Text>
                    <TextInput 
                        placeholder  ="Digite sua cidade"
                        style        = {Style.textInput}
                        maxLength    = {11}
                    />

                    <Text style={Style.text}>Estado</Text>
                    <TextInput 
                        placeholder  ="Digite seu Estado"
                        style        = {Style.textInput}
                        maxLength    = {11}
                    />
                </View>

                <View style = {Style.button_continua}>
                    <Button_continuar navigation={navigation} />
                </View>
            
            </View>
        </ImageBackground>
    );
}

const Style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: `url(${plano_fundo})`
    },
    
    container_bairro_rua:{
        flexDirection:'row',
        marginTop:10
    },

    formulario_view:{
        backgroundColor:'rgba(221, 222, 239, 0.419)',
        alignItems: 'center',
        width :350,
        height:540,
        padding:5,
        borderRadius:10,
    },

    text:{
        fontSize:17,
        marginTop:10,
        marginLeft:4
    },

    text_bairro_rua:{
        fontSize:17,
        marginLeft:4

    },

    textInput_rua:{
        backgroundColor:'white',
        width:180,
        height:40,
        paddingLeft :12,
        paddingRight:12, 
        borderRadius:16

    },
    
    textInput_numero:{
        backgroundColor:'white',
        width:100,
        height:40,
        paddingLeft :12,
        paddingRight:12, 
        borderRadius:16
    },

    textInput:{
        backgroundColor:'white',
        fontSize:14,
        width :300,
        height:40 ,
        paddingLeft :12,
        paddingRight:12,        
        borderRadius:16,
    },

    button_continua:{
        padding:20,
        borderRadius:20
        
    }
})