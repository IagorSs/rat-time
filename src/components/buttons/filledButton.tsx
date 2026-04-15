import { ColorsConstants, TextsConstants } from "@/constants";
import { Text, TouchableOpacity } from "react-native"

type FilledButtonProps = {
    value: string;
    disabled?: boolean;
    onClick?: () => void;
    styleOverrides?: {
        borderTopRightRadius?: number;
        borderTopLeftRadius?: number;
        borderBottomLeftRadius?: number;
        borderBottomRightRadius?: number;
        borderRadius?: number;
        paddingHorizontal?: number;
        paddingVertical?: number;
    };
    textStyleOverrides?: {
        fontSize?: number;
    }
}

export default function FilledButton ({
    value, disabled, onClick, styleOverrides: commonStyleOverrides, textStyleOverrides
}: FilledButtonProps) {
    return (
        // TODO custom click animation
        <TouchableOpacity
            onPress={onClick}
            disabled={disabled}
            style={commonStyleOverrides}
        >
            <Text
                style={{
                    ...TextsConstants.title,
                    backgroundColor: disabled ? ColorsConstants.red.light : ColorsConstants.red.normal,
                    color: ColorsConstants.white.normal,
                    textAlign: "center",
                    ...commonStyleOverrides,
                    ...textStyleOverrides,
                }}
            >
                {value}
            </Text>
        </TouchableOpacity>
    );
}