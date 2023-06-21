import { StyleSheet} from "react-native";


export const getStyles = () => {
    
    return StyleSheet.create({
        container: {
            flex           : 1,
            alignItems     : 'center',
            justifyContent : 'flex-start',
            resizeMode:'center'
        },
        icone_logo:{
            width:80,
            height:80,
        },
        icone_infor:{
            width:39,
            height:39,
            marginLeft:35
        },
        container_logo:{
            marginTop:40,
            backgroundColor:'rgba(255,255,255,0.500)',
            borderRadius:800 
        },
                
        container_title:{
            alignItems:'center',
            width:400,
            marginTop:30,

        },

        container_marcos:{
            backgroundColor:'#f0c69c',
            justifyContent :'center',  
      
            width:290,
            height:80,
            paddingLeft :5,
            marginRight :60,
            marginBottom:15,
            borderRadius:10,
            borderTopRightRadius:0,
            borderBottomRightRadius:0,
            borderWidth:1.2,
        },
        
        container_infor:{
            backgroundColor:'rgba(197, 215, 247, 0.919)',
            position:'absolute',
            justifyContent:'center',
            alignItems:'center',
            width :90,
            height:80,
            marginLeft:260,
            borderEndWidth:1.2,
            borderTopWidth:1.2,
            borderBottomWidth:1.2,
            borderTopRightRadius:10,
            borderBottomRightRadius:10,
        },

        scrollview_marcos:{
            marginTop:30,
            marginBottom:0
        },

        text_title:{
            fontSize:25
        },
        vac_text:{
            fontSize:15,
            marginLeft:10
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
            alignItems: 'flex-start',
            marginTop :10,
            marginLeft:10,
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
    })   
}