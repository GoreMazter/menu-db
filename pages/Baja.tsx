import React from 'react'
import { Input, Button } from 'react-native-elements'
import { View, StyleSheet } from 'react-native'
const Baja = ({ navigation }) => {
    let codigo
    const send = () => {
        const url = `https://elositojuan.000webhostapp.com/Baja.php?codigo='${codigo}'`
        const xhttp = new XMLHttpRequest()
        xhttp.open("GET", url)
        xhttp.send()
        xhttp.onreadystatechange = () => {
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                if (xhttp.responseText == '1') {
                    alert(`${codigo} eliminado correctamente`)
                    navigation.navigate("Menu")
                }
                else {
                    alert(xhttp.responseText)
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
                title="ELIMINAR"
                buttonStyle={styles.btn}
                onPress={send}
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
export default Baja