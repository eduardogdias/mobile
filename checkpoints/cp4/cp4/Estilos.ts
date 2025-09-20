import { StyleSheet } from "react-native"


const estilos = StyleSheet.create({
    campo_valor: {
        justifyContent:"space-between",
        flexDirection: "row",
        paddingHorizontal: 20,
        marginVertical: 5
    },
    campo: {
        color: "white",
        fontSize: 17
    },
    valor: {
        backgroundColor: "white",
        borderColor: "blue",
        borderRadius: 10,
        borderWidth: 1,
        padding: 10,
        width: 200,  
    },
    botao: {
        marginTop: 50, 
        paddingHorizontal: 20,
        marginBottom: 20
    },
    tela: {
        backgroundColor: "#603813",
        flex:1
    },
    titulo: {
        fontSize: 35, 
        alignSelf: "center", 
        color: "white", 
        marginTop: 20, 
        marginBottom: 40,
        fontWeight: "bold"
    },
    flatlist: {
        backgroundColor: "lightyellow", 
        borderColor: "red", 
        borderWidth: 2, 
        padding: 10, 
        marginVertical: 5,
        marginHorizontal: 20,
        flexDirection:'row', 
        justifyContent:"space-between"
    },
    item: {
        fontSize: 15
    }
})

export {estilos}
