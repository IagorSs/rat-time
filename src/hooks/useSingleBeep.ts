import { useAudioPlayer } from "expo-audio";

const beepSource = require('assets/sounds/beep.mp3');

export default () => {
    const beepPlayer = useAudioPlayer(beepSource);

    return {
        playBeep: () => {
            beepPlayer.seekTo(0);
            beepPlayer.play();
        }
    }

}