import { FilledButton } from "@/components/buttons";
import { Title } from "@/components/texts";
import { ColorsConstants } from "@/constants";
import { View } from "react-native";

type TimeDisplayProps = {
    value: string;
    onPlusClick: () => void;
    onMinusClick: () => void;
    disabled?: boolean;
}

export default function TimeDisplay({
    value, onPlusClick, onMinusClick, disabled
}: TimeDisplayProps) {
    return (
        <View
            style={{
                marginHorizontal: 2,
                marginVertical: 8
            }}
        >
            <FilledButton
                value="+"
                onClick={onPlusClick}
                disabled={disabled}
                styleOverrides={{
                    borderTopLeftRadius: 8,
                    borderTopRightRadius: 8,
                }}
                textStyleOverrides={{
                    fontSize: 60
                }}
            />

            <Title
                value={value}
                styleOverrides={{
                    borderLeftWidth: 2,
                    borderRightWidth: 2,
                    borderColor: disabled ? ColorsConstants.red.light : ColorsConstants.red.normal,
                    paddingHorizontal: 8,
                    fontSize: 120
                }}
            />

            <FilledButton
                value="-"
                onClick={onMinusClick}
                disabled={disabled}
                styleOverrides={{
                    borderBottomLeftRadius: 8,
                    borderBottomRightRadius: 8,
                }}
                textStyleOverrides={{
                    fontSize: 60
                }}
            />
        </View>
    );
}