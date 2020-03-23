import React from 'react'
import { Button } from 'react-native-elements';
import { View,StyleSheet } from 'react-native';
const Menu = ({navigation})=>(
    <View style = {styles.container}>
        <Button
            title="Altas"
            titleStyle={styles.txt}
            buttonStyle={styles.btn}
            onPress={()=>{
                navigation.navigate('Alta')
            }}
        />
        <Button
            title="Bajas"
            titleStyle={styles.txt}
            buttonStyle={styles.btn}
            onPress={()=>{
                navigation.navigate('Baja')
            }}
        />
        <Button
            title="Cambios"
            buttonStyle={styles.btn}
            titleStyle={styles.txt}
            onPress={()=>{
                navigation.navigate('Busca')
            }}
        />
    </View>
)
const styles=StyleSheet.create(
    {
        container:{
            flex:1,
            justifyContent:"space-evenly",
            alignItems:"stretch"
        },
        btn:{
            flexBasis:100,
            marginHorizontal:20
        },
        txt:{
            fontSize:30
        }
    }
)
export default Menu