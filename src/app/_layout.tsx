import { Stack } from "expo-router";
import Head from "expo-router/head";

export default function RootLayout() {
    return (
        <>
            <Head>
                <title>Rat Time!</title>
            </Head>
            <Stack
                screenOptions={{
                    headerShown: false
                }}
            />
        </>
    );
}
