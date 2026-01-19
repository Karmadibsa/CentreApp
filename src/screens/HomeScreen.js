import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, RefreshControl, Dimensions, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TOP_COLORS, SPACING, SIZES } from '../constants/theme';
import { CONFIG } from '../constants/config';

const { width } = Dimensions.get('window');
const CARD_WIDTH = (width - SPACING.m * 3) / 2;

export default function HomeScreen({ navigation }) {
    const [tools, setTools] = useState(CONFIG.DEFAULT_TOOLS);
    const [refreshing, setRefreshing] = useState(false);

    const fetchTools = async () => {
        try {
            const response = await fetch(CONFIG.TOOLS_CONFIG_URL);
            if (response.ok) {
                const data = await response.json();
                setTools(data);
            }
        } catch (error) {
            console.log('Utilisation des outils par défaut suite à une erreur réseau:', error);
        }
    };

    const onRefresh = async () => {
        setRefreshing(true);
        await fetchTools();
        setRefreshing(false);
    };

    useEffect(() => {
        fetchTools();
    }, []);

    const renderItem = ({ item }) => (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate('WebView', { url: item.url, title: item.name })}
            style={styles.cardContainer}
        >
            <LinearGradient
                colors={[TOP_COLORS.cardBg, 'rgba(255, 255, 255, 0.05)']}
                style={styles.card}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
            >
                <View style={[styles.iconContainer, { backgroundColor: item.color || TOP_COLORS.primary }]}>
                    <MaterialCommunityIcons name={item.icon || 'web'} size={24} color="#FFF" />
                </View>
                <Text style={styles.cardTitle} numberOfLines={1}>{item.name}</Text>
                <Text style={styles.cardDescription} numberOfLines={3}>{item.description}</Text>
            </LinearGradient>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor={TOP_COLORS.background} />
            <LinearGradient
                colors={[TOP_COLORS.background, '#1a1a2e']}
                style={StyleSheet.absoluteFill}
            />

            <SafeAreaView style={styles.safeArea}>
                <View style={styles.header}>
                    <View>
                        <Text style={styles.greeting}>Bonjour</Text>
                        <Text style={styles.title}>Mes Outils</Text>
                    </View>
                    {/* Profile button removed as requested */}
                </View>

                <FlatList
                    data={tools}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    contentContainerStyle={styles.listContent}
                    numColumns={2}
                    columnWrapperStyle={styles.row}
                    refreshControl={
                        <RefreshControl
                            refreshing={refreshing}
                            onRefresh={onRefresh}
                            tintColor={TOP_COLORS.primary}
                        />
                    }
                    ListEmptyComponent={
                        <Text style={styles.emptyText}>Aucun outil trouvé. Tirez pour rafraîchir.</Text>
                    }
                />
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: TOP_COLORS.background,
    },
    safeArea: {
        flex: 1,
    },
    header: {
        paddingHorizontal: SPACING.m,
        paddingTop: SPACING.m,
        paddingBottom: SPACING.l,
        justifyContent: 'center',
    },
    greeting: {
        fontSize: SIZES.body,
        color: TOP_COLORS.textSecondary,
        marginBottom: 4,
    },
    title: {
        fontSize: SIZES.title,
        fontWeight: 'bold',
        color: TOP_COLORS.text,
    },
    listContent: {
        paddingHorizontal: SPACING.m,
        paddingBottom: SPACING.xl,
    },
    row: {
        justifyContent: 'space-between',
    },
    cardContainer: {
        width: CARD_WIDTH,
        marginBottom: SPACING.m,
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8,
    },
    card: {
        borderRadius: 20,
        padding: SPACING.m,
        height: 180, // Increased slightly for French descriptions
        borderWidth: 1,
        borderColor: TOP_COLORS.cardBorder,
        justifyContent: 'space-between',
    },
    iconContainer: {
        width: 44,
        height: 44,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: SPACING.s,
    },
    cardTitle: {
        fontSize: SIZES.body,
        fontWeight: '700',
        color: TOP_COLORS.text,
        marginBottom: 4,
    },
    cardDescription: {
        fontSize: SIZES.caption,
        color: TOP_COLORS.textSecondary,
        lineHeight: 18,
    },
    emptyText: {
        color: TOP_COLORS.textSecondary,
        textAlign: 'center',
        marginTop: 50,
    }
});
