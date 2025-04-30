import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import theme from '../constants/theme';

const RobosScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Robôs</Text>
            <Text style={styles.text}>Visualização geral dos robôs será exibida aqui.</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: theme.spacing.lg,
        backgroundColor: theme.colors.background
    },
    title: {
        fontSize: theme.fontSizes.large,
        fontWeight: 'bold',
        marginBottom: theme.spacing.md
    },
    text: {
        fontSize: theme.fontSizes.medium
    }
});

export default RobosScreen;
