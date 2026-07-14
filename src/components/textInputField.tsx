import GlobalStyle from "@/globalStyle";
import { PropsWithChildren } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export enum TextBoxSize{
  small = 'small',
  medium = 'medium',
  large = 'large'
}



interface TextInputFieldProps {
  value: string;
  onChangeValue: ((text: string) => void | undefined);
  label?: string;
  placeholder?: string;
  size?: TextBoxSize;
}

export const TextInputField = <T,>({value, onChangeValue, label, placeholder, size}: PropsWithChildren<TextInputFieldProps>) => {
  const gs = GlobalStyle();

  return (
    <View style={styles.container}>
      <Text style={[gs.subtitle, styles.label]}>{label}</Text>
      <TextInput 
        style={[
          styles.inputField,
          size == TextBoxSize.small && styles.small,
          size == TextBoxSize.medium && styles.medium,
          size == TextBoxSize.large && styles.large
        ]}
        value={value}
        placeholder={placeholder}
        onChangeText={onChangeValue}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  label: {
  },
  inputField: {

  },
  small: {

  },
  medium: {

  },
  large: {

  },
});
