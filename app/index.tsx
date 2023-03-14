import "../src/localizations/i18n";
import { useTranslation } from "react-i18next";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { TailwindProvider } from "tailwind-rn";
import utilities from "../tailwind.json";
import { Provider} from "react-redux";
import { store } from "../store";

export default function App() {
  const { t } = useTranslation();

  return (
    // @ts-ignore
    <TailwindProvider utilities={utilities}>
      <Provider store={store}>
        <View style={styles.container}>
          <StatusBar style="auto" />
          <Text>{t("name")}</Text>
          <Text>{t("app.title")}</Text>
        </View>
      </Provider>
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
