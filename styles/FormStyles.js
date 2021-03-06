import { StyleSheet,Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;

export const FormStyles=StyleSheet.create({
    container: {
      flex: 1,
      height: "100%",
      justifyContent: "center",
      width:windowWidth,
      padding:20
    },
  
    button: {
      backgroundColor: "blue",
      height: 40,
      borderRadius: 5,
      justifyContent: "center",
    },
  
    buttonText: {
      textTransform: "uppercase",
      color: "white",
      textAlign: "center",
    },
  
    links: {
      flexDirection: "row",
      justifyContent: "space-between",
      color:'black'
    },
  
    input: {
      height: 40,
      borderColor: "gray",
      borderWidth: 1,
      borderRadius: 10,
      marginBottom: 5,
      padding: 5,
    },
  
    title: {
      textAlign: "center",
      fontSize: 18,
      fontWeight: "600",
      textTransform: "uppercase",
    },
  
    error:{
        color:'red',
        paddingBottom:10,
        marginLeft:5
    },
  
    label: {
      marginLeft: 5,
      marginBottom: 5,
    },
  });
  