// import { StyleSheet, TextInput, View } from "react-native";
// import React from "react";
// import Octicons from 'react-native-vector-icons/Octicons';
// import { Color } from "../../Theme";
// import { FontSize } from "../../Theme/FontSize";

// interface ISearch {
//     style?: any;
//     placeHolder?: string;
//     onChangeText?: any;
//     value?: string
// }

// const SearchContent = (search: ISearch) => {
//     return (
//         <View style={[styles.textInput, search.style]}>
//             <Octicons name="search" size={29} color={Color.black} />
//             <TextInput
//                 style={styles.input}
//                 placeholder={search?.placeHolder || "Search...."}
//                 value={search?.value}
//                 onChangeText={search?.onChangeText}
//             // cursorColor={Theme.black}
//             />
//         </View>
//     );
// };

// export default SearchContent;

// const styles = StyleSheet.create({
//     textInput: {
//         // alignSelf: "center",
//         backgroundColor: Color.white,
//         borderRadius: 6,
//         flexDirection: "row",
//         alignItems: "center",
//         paddingHorizontal: 10,
//         width: "90%",
//         // justifyContent: "center",
//     },
//     input: {
       
//         marginHorizontal: 10,
//         fontSize: FontSize.Font16,
//         fontFamily: "Poppins-Medium"
//     },
// });


import { StyleSheet, TextInput, View } from "react-native";
import React from "react";
import { Color } from "../../Theme";
import Octicons from 'react-native-vector-icons/Octicons';
import { moderateScale } from "../../Theme/ResposiveSize";
import { FontSize } from "../../Theme/FontSize";

interface ISearch {
  searchData?: Function;
  text?: string;
  style?: any;
  placeHolder?: string;
  onChangeText?: any,
  value?: string
}

const SearchBar = (search: ISearch) => {
//   const [searchUser, { isLoading }] = useSearchUserMutation();

//   const getSearchData = async (text: string) => {
//     try {
//       if (search.text) text = "";
//       const { data } = await searchUser(text).unwrap();
//       search.searchData(data);
//       if (!text) {
//         search.searchData([]);
//       }
//       //   console.log(data);
//     } catch (err) {
//       console.log("search", err);
//     }
//   };
  return (
    <View style={[styles.textInput, search.style]}>
     <Octicons name="search" size={29} color={Color.black} />
      <TextInput
        style={styles.input}
        placeholder={search?.placeHolder || "Search...."}
        value={search?.value}
        onChangeText={search?.onChangeText}
        placeholderTextColor={Color.chatBg}
        // cursorColor={Color.black}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  textInput: {
    height: moderateScale(48),
    backgroundColor: Color.white,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    width: "80%",
    alignSelf: "center"
  },
  input: { 
    marginHorizontal: 10, 
    fontFamily: "Poppins-Medium",
    top: 2,
    fontSize: FontSize.Font16 },
});
