import { StyleSheet } from "react-native"
export const getStyles = (cor) =>{
    const Styles = StyleSheet.create({
        container: {
            flex           : 1,
            alignItems     : 'center',
            justifyContent : 'flex-start',
        },
        
        icone_logo:{
            width:80,
            height:80,
            marginTop:40
        },
        
        container_title:{
            backgroundColor:'rgba(255,255,255,0.500)',
            width:250,
            marginTop:30,
            marginRight:135,
            borderBottomWidth:1.5
        },        

        scrollview_vacinas:{
            marginTop:50,
            marginBottom:40
        },

        modal_container:{
            backgroundColor:'rgb(255, 255, 255)',
            justifyContent : 'center', 
            alignItems     :'center',
            width:352,
            height:320,
            left:16,
            marginTop:250,
            borderRadius:10,
            borderWidth:0.3,
        },
        
        modal_informacao:{
            alignItems: 'flex-start',
            marginTop :10,
            marginLeft:10,
        },

        text_title:{
            fontSize:25,
            marginLeft:10
        },

        modal_text_1:{
            fontSize:20,
            marginTop:5
        },
        
        modal_text_2:{
            fontSize:15,
            marginBottom:2
        },        
    });
    return Styles
}

export const getAplicadas = ()=>{
    return StyleSheet.create({
        containers_vacinas:{
            backgroundColor:'rgba(119, 255, 119,0.980)',
            justifyContent :'center',            
            width:350,
            height:70,
            paddingLeft :10,
            marginBottom:15,
            borderRadius:10,
            borderWidth:1.2
        },
    })
}


export const getPendentes = ()=>{
    return StyleSheet.create({
        containers_vacinas:{
            backgroundColor:'rgba(255, 219, 37,0.980)',
            justifyContent :'center',            
            width:350,
            height:70,
            paddingLeft :10,
            marginBottom:15,
            borderRadius:10,
            borderWidth:1.2

        },
    })
}
export const getAtrasadas = ()=>{
    return StyleSheet.create({
        containers_vacinas:{
            backgroundColor:'rgba(245, 47, 90,0.980)',
            justifyContent :'center',            
            width:350,
            height:70,
            paddingLeft :10,
            marginBottom:15,
            borderRadius:10,
            borderWidth:1.2

        },
    })
}