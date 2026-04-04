import { useFonts } from "expo-font";

export default () => {
    const [loaded, error] = useFonts({
        "UbuntuSans-ExtraBold": require("assets/fonts/Ubuntu-Sans/UbuntuSans-ExtraBold.ttf"),
        "UbuntuSans-ExtraBoldItalic": require("assets/fonts/Ubuntu-Sans/UbuntuSans-ExtraBoldItalic.ttf"),
        "UbuntuSans-Bold": require("assets/fonts/Ubuntu-Sans/UbuntuSans-Bold.ttf"),
        "UbuntuSans-BoldItalic": require("assets/fonts/Ubuntu-Sans/UbuntuSans-BoldItalic.ttf"),
        "UbuntuSans-SemiBold": require("assets/fonts/Ubuntu-Sans/UbuntuSans-SemiBold.ttf"),
        "UbuntuSans-SemiBoldItalic": require("assets/fonts/Ubuntu-Sans/UbuntuSans-SemiBoldItalic.ttf"),
        "UbuntuSans-Medium": require("assets/fonts/Ubuntu-Sans/UbuntuSans-Medium.ttf"),
        "UbuntuSans-MediumItalic": require("assets/fonts/Ubuntu-Sans/UbuntuSans-MediumItalic.ttf"),
        "UbuntuSans-Regular": require("assets/fonts/Ubuntu-Sans/UbuntuSans-Regular.ttf"),
        "UbuntuSans-Italic": require("assets/fonts/Ubuntu-Sans/UbuntuSans-Italic.ttf"),
        "UbuntuSans-Light": require("assets/fonts/Ubuntu-Sans/UbuntuSans-Light.ttf"),
        "UbuntuSans-LightItalic": require("assets/fonts/Ubuntu-Sans/UbuntuSans-LightItalic.ttf"),
        "UbuntuSans-ExtraLight": require("assets/fonts/Ubuntu-Sans/UbuntuSans-ExtraLight.ttf"),
        "UbuntuSans-ExtraLightItalic": require("assets/fonts/Ubuntu-Sans/UbuntuSans-ExtraLightItalic.ttf"),
        "UbuntuSans-Thin": require("assets/fonts/Ubuntu-Sans/UbuntuSans-Thin.ttf"),
        "UbuntuSans-ThinItalic": require("assets/fonts/Ubuntu-Sans/UbuntuSans-ThinItalic.ttf"),

        "UbuntuMono-Bold": require("assets/fonts/Ubuntu-Mono/UbuntuMono-Bold.ttf"),
        "UbuntuMono-BoldItalic": require("assets/fonts/Ubuntu-Mono/UbuntuMono-BoldItalic.ttf"),
        "UbuntuMono-Regular": require("assets/fonts/Ubuntu-Mono/UbuntuMono-Regular.ttf"),
        "UbuntuMono-Italic": require("assets/fonts/Ubuntu-Mono/UbuntuMono-Italic.ttf"),
        
        "Roboto-Black": require("assets/fonts/Roboto/Roboto-Black.ttf"),
        "Roboto-BlackItalic": require("assets/fonts/Roboto/Roboto-BlackItalic.ttf"),
        "Roboto-ExtraBold": require("assets/fonts/Roboto/Roboto-ExtraBold.ttf"),
        "Roboto-ExtraBoldItalic": require("assets/fonts/Roboto/Roboto-ExtraBoldItalic.ttf"),
        "Roboto-Bold": require("assets/fonts/Roboto/Roboto-Bold.ttf"),
        "Roboto-BoldItalic": require("assets/fonts/Roboto/Roboto-BoldItalic.ttf"),
        "Roboto-SemiBold": require("assets/fonts/Roboto/Roboto-SemiBold.ttf"),
        "Roboto-SemiBoldItalic": require("assets/fonts/Roboto/Roboto-SemiBoldItalic.ttf"),
        "Roboto-Medium": require("assets/fonts/Roboto/Roboto-Medium.ttf"),
        "Roboto-MediumItalic": require("assets/fonts/Roboto/Roboto-MediumItalic.ttf"),
        "Roboto-Regular": require("assets/fonts/Roboto/Roboto-Regular.ttf"),
        "Roboto-Italic": require("assets/fonts/Roboto/Roboto-Italic.ttf"),
        "Roboto-Light": require("assets/fonts/Roboto/Roboto-Light.ttf"),
        "Roboto-LightItalic": require("assets/fonts/Roboto/Roboto-LightItalic.ttf"),
        "Roboto-ExtraLight": require("assets/fonts/Roboto/Roboto-ExtraLight.ttf"),
        "Roboto-ExtraLightItalic": require("assets/fonts/Roboto/Roboto-ExtraLightItalic.ttf"),
        "Roboto-Thin": require("assets/fonts/Roboto/Roboto-Thin.ttf"),
        "Roboto-ThinItalic": require("assets/fonts/Roboto/Roboto-ThinItalic.ttf"),
    });

    return loaded && !error;
}