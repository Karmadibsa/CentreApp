import React, { useState } from 'react';
import { View, StyleSheet, ActivityIndicator, StatusBar, BackHandler } from 'react-native';
import { WebView } from 'react-native-webview';
import { TOP_COLORS } from '../constants/theme';
import { useFocusEffect } from '@react-navigation/native';

export default function WebViewScreen({ route, navigation }) {
    const { url } = route.params;
    const [loading, setLoading] = useState(true);

    // Handle hardware back button on Android to go back to App list instead of closing app
    useFocusEffect(
        React.useCallback(() => {
            const onBackPress = () => {
                navigation.goBack();
                return true; // prevent default behavior (exit app)
            };

            BackHandler.addEventListener('hardwareBackPress', onBackPress);

            return () =>
                BackHandler.removeEventListener('hardwareBackPress', onBackPress);
        }, [navigation])
    );

    return (
        <View style={styles.container}>
            {/* Hidden Status Bar for full immersion */}
            <StatusBar hidden={true} backgroundColor={TOP_COLORS.background} />

            <WebView
                source={{ uri: url }}
                style={styles.webview}
                startInLoadingState={true}
                onLoadEnd={() => setLoading(false)}
                renderLoading={() => (
                    <View style={styles.loadingContainer}>
                        <ActivityIndicator size="large" color={TOP_COLORS.primary} />
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    webview: {
        flex: 1,
        backgroundColor: TOP_COLORS.background,
    },
    loadingContainer: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: TOP_COLORS.background,
        zIndex: 1,
    }
});
