import React from 'react'
import { Input, Button } from 'react-native-elements'
import { View, StyleSheet } from 'react-native'

class Alta extends React.Component<any, any>{
    constructor(props) {
        super(props)
        this.state = {
            codigo: "",
            nombre: "",
            carrera: "",
            centro: ""
        }
    }
    render() {
        return (
            <View style={styles.container}>

                <Input
                    containerStyle={styles.inputContainer}
                    inputStyle={styles.inputText}
                    placeholder="codigo"
                    onChangeText={(event) => {
                        this.setState({ codigo: event })
                    }}
                />
                <Input
                    containerStyle={styles.inputContainer}
                    inputStyle={styles.inputText}
                    placeholder="nombre"
                    onChangeText={(event) => {
                        this.setState({ nombre: event })
                    }}
                />
                <Input
                    containerStyle={styles.inputContainer}
                    inputStyle={styles.inputText}
                    placeholder="carrera"
                    onChangeText={(event) => {
                        this.setState({ carrera: event })
                    }}
                />
                <Input
                    containerStyle={styles.inputContainer}
                    inputStyle={styles.inputText}
                    placeholder="centro"
                    onChangeText={(event) => {
                        this.setState({ centro: event })
                    }}
                />
                <Button
                    buttonStyle={styles.btn}
                    title="CONFIRMAR"
                    onPress={this.send}
                />
            </View>
        )
    }
    send =()=>{
        const url=`https://elositojuan.000webhostapp.com/Alta.php?codigo=${this.state.codigo}&nombre=${this.state.nombre}&carrera=${this.state.carrera}&centro=${this.state.centro}`
        const xhttp = new XMLHttpRequest()
        xhttp.open("GET",url)
        xhttp.send()
        xhttp.onreadystatechange = ()=>{
            if(xhttp.readyState==4&&xhttp.status==200){
                if(xhttp.responseText=='1'){
                    alert("Registrado correctamente")
                    this.props.navigation.navigate("Menu")
                }
                else{
                    alert("No se pudo agregar")
                }
            }
        }
    }
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
export default Alta