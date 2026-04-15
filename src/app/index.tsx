import { FilledButton } from "@/components/buttons";
import { useLoadedFonts, useTimer } from "@/hooks";
import { Text, View } from "react-native";
import TimeDisplay from "./timeDisplay";

export default function Index() {
    const fontsLoaded = useLoadedFonts();

    const {
        minutes,
        seconds,
        isTimerRunning,
        addMinute,
        subMinute,
        addSecond,
        subSecond,
        startTimer,
    } = useTimer();

    return !fontsLoaded
        ? (
            <Text>
                LOADING FONTS
            </Text>
        ) : (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <View
                    style= {{
                        display: "flex",
                        flexDirection: "row"
                    }}
                >
                    <TimeDisplay
                        value={minutes}
                        onPlusClick={addMinute}
                        onMinusClick={subMinute}
                        disabled={isTimerRunning}
                    />

                    <TimeDisplay
                        value={seconds}
                        onPlusClick={addSecond}
                        onMinusClick={subSecond}
                        disabled={isTimerRunning}
                    />
                </View>

                {!isTimerRunning && <FilledButton
                    value="START"
                    onClick={startTimer}
                    styleOverrides={{
                        borderRadius: 6,
                        paddingHorizontal: 16,
                        paddingVertical: 8,
                    }}
                    textStyleOverrides={{
                        fontSize: 40
                    }}
                />}
            </View>
        );
}
