import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Input, Button } from 'react-native-elements'

class Cambio extends React.Component<any,any>{
    constructor(props){
        super(props)
        this.state={
            codigo:props.route.params.Codigo,
            nombre:props.route.params.Nombre,
            carrera:props.route.params.Carrera,
            centro:props.route.params.Centro,
        }
    }
    send =()=>{
        const url=`https://elositojuan.000webhostapp.com/Cambio.php?codigo=${this.state.codigo}&nombre=${this.state.nombre}&carrera=${this.state.carrera}&centro=${this.state.centro}`
        const xhttp = new XMLHttpRequest()
        xhttp.open("GET",url)
        xhttp.send()
        xhttp.onreadystatechange = ()=>{
            if(xhttp.readyState==4&&xhttp.status==200){
                if(xhttp.responseText=='1'){
                    alert("Modificado correctamente")
                    this.props.navigation.navigate("Menu")
                }
                else{
                    alert(xhttp.responseText)
                }
            }
        }
    }
    render(){return(
        <View style={styles.container}>
                <Input
                    containerStyle={styles.inputContainer}
                    inputStyle={styles.inputText}
                    placeholder="nombre"
                    value={this.state.nombre}
                    onChangeText={(txt) => {
                        this.setState({nombre:txt})
                    }}
                />
                <Input
                    containerStyle={styles.inputContainer}
                    inputStyle={styles.inputText}
                    placeholder="carrera"
                    value={this.state.carrera}
                    onChangeText={(txt) => {
                         this.setState({carrera:txt})
                    }}
                />
                <Input
                    containerStyle={styles.inputContainer}
                    inputStyle={styles.inputText}
                    placeholder="centro"
                    value={this.state.centro}
                    onChangeText={(txt) => {
                         this.setState({centro: txt})
                    }}
                />
                <Button
                    buttonStyle={styles.btn}
                    title="MODIFICAR"
                    onPress={this.send}
                />
            </View>
    )}

}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"space-evenly",
        
    },
    inputText:{
        textAlign:"center",
        textTransform:"uppercase"
    },
    inputContainer:{
        
    },
    btn:{
        height:100,
        marginHorizontal:20
    }
})
export default Cambio