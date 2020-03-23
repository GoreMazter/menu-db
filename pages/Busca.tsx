import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Input, Button } from 'react-native-elements'

const Busca = ({navigation})=>{
    let codigo
    const Busca = () => {
        const url = `https://elositojuan.000webhostapp.com/Busca.php?codigo='${codigo}'`
        const xhttp = new XMLHttpRequest()
        xhttp.open("GET", url)
        xhttp.send()
        xhttp.onreadystatechange = () => {
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                if (xhttp.responseText!='0') {
                    const params = JSON.parse(xhttp.responseText)
                    navigation.navigate("Cambio",params)
                }
                else{
                    alert("No se encontró")
                }
            }
        }
    }
    return (
        <View style={styles.container}>
            <Input
                placeholder="CODIGO"
                inputStyle={{ textAlign: 'center' }}
                onChangeText={(txt) => {
                    codigo = txt
                }}
            />
            <Button
                title="BUSCAR"
                buttonStyle={styles.btn}
                onPress={Busca}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-around"
    },
    btn: {
        height: 200
    }
})
export default Busca