import React, { useState } from 'react';
import { View, StyleSheet, ActivityIndicator, TouchableOpacity, StatusBar, Dimensions } from 'react-native';
import { WebView } from 'react-native-webview';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TOP_COLORS, SPACING } from '../constants/theme';
import { Ionicons } from '@expo/vector-icons';

export default function WebViewScreen({ route, navigation }) {
    const { url } = route.params;
    const [loading, setLoading] = useState(true);

    return (
        <View style={styles.container}>
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

            {/* Floating Back Button - Minimalist and obscure enough to feel like full app but usable */}
            <SafeAreaView style={styles.floatingButtonContainer} pointerEvents="box-none">
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={styles.floatingBackButton}
                    activeOpacity={0.7}
                >
                    <Ionicons name="arrow-back" size={24} color="#FFF" />
                </TouchableOpacity>
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000', // Black background for immersive feel
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
    },
    floatingButtonContainer: {
        position: 'absolute',
        top: SPACING.m,
        left: SPACING.m,
        zIndex: 100,
    },
    floatingBackButton: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: 'rgba(0,0,0,0.5)', // Semi-transparent
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.2)',
    }
});
