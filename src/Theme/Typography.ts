
import { StyleSheet } from "react-native";
import { FontSize } from "./FontSize";
import { Color } from ".";


export const Typography = StyleSheet.create({
    main_heading: {
       fontFamily: "Urbanist-Black",
       fontSize: FontSize.Font33,
        color: Color.black,
      },
      title:{
        fontFamily: "Urbanist-Medium",
        fontSize: FontSize.Font14,
         color: Color.black,
         fontWeight: "500"
      },
      small:{
        fontFamily: "Urbanist-Medium",
        fontSize: FontSize.Font16,
        fontWeight: "500"
      },
      body:{
        fontFamily: "Poppins-Medium",
        fontSize: FontSize.Font16,
        fontWeight: "400",
        letterSpacing: 1,
      }
})