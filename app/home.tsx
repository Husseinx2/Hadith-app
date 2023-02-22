import "../src/localizations/i18n";
import { useTranslation } from "react-i18next";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { TailwindProvider } from "tailwind-rn";
import utilities from "../tailwind.json";

export default function App() {
  const { t } = useTranslation();
  return (
    // @ts-ignore
    <TailwindProvider utilities={utilities}>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Text>{t("name")}</Text>
        <Text>{t("name")}</Text>
        <Text>{t("name")}</Text>
        <Text>{t("app.title")}</Text>
      </View>
    </TailwindProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
