import React from "react";
import { View, ScrollView, StyleSheet, Text } from "react-native";

interface ScreenLayoutProps {
  screenTitle?: string;
  children: React.ReactNode;
  backgroundColor?: string;
  isWithoutScroll?: boolean;
}

export const ScreenLayout: React.FC<ScreenLayoutProps> = ({
  screenTitle,
  children,
  backgroundColor = "tomato",
  isWithoutScroll,
}) => {
  const ContentContainer = isWithoutScroll ? View : ScrollView;

  return (
    <ContentContainer style={[styles.container, { backgroundColor }]}>
      {screenTitle && <Text style={styles.title}>{screenTitle}</Text>}
      {children}
    </ContentContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    marginVertical: 10,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
});
