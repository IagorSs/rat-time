import { TextsConstants } from "@/constants";
import React from "react";
import { Text, TextStyle } from "react-native";

type TitleProps = {
    value: string
    // TODO remove this dep
    styleOverrides: TextStyle
}

export default ({ value, styleOverrides }: TitleProps) => {
    return <Text style={{...TextsConstants.title, ...styleOverrides}}>{value}</Text>;
}