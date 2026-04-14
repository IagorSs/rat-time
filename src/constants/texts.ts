import { TextStyle } from "react-native";
import { red } from './colors';

export const title: TextStyle = {
    // TODO improve type for this prop based on useLoadedFonts
    fontFamily: "UbuntuSans-Bold",
    color: red.dark,
    fontSize: 60
}
