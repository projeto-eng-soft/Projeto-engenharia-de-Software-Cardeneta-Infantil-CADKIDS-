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
        },
        container_logo:{
            marginTop:40,
            backgroundColor:'rgba(255,255,255,0.500)',
            borderRadius:800 
        },
        
        container_title:{
            alignItems:'center',
            width:250,
            marginTop:30,
            borderBottomWidth:1.0
        },        

        scrollview_vacinas:{
            marginTop:50,
            marginBottom:40
        },

        modal_container:{
            backgroundColor:'rgb(255, 255, 255)',
            justifyContent : 'flex-start', 
            alignItems     :'center',
            width:352,
            left:16,
            marginTop:250,
            borderRadius:10,
            borderWidth:0.3,
        },
        
        modal_informacao:{
            flexGrow:1,
            marginTop :10,
            marginLeft:10,
        },

        text_title:{
            fontSize:25,
        },

        modal_text_1:{
            fontSize:20,
            marginTop:10,
            fontWeight:'bold'
        },
        
        modal_text_2:{
            fontSize:15,
            marginBottom:2.5
        },
        modal_button:{
            marginTop:5,
            marginBottom:10
        }        
    });
    return Styles
}

export const getAplicadas = ()=>{
    return StyleSheet.create({
        containers_vacinas:{
            backgroundColor:'rgba(119, 255, 162, 0.98)',
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
            backgroundColor:'rgba(255, 223, 64, 0.98)',
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
            backgroundColor:'rgba(255, 100, 100, 0.98)',
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