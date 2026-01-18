
/*
 * Created by Asad on 17 JAN 2026
 */

import React, { forwardRef, memo, useId } from 'react';
import { TextInput, View, StyleSheet, TextInputProps, StyleProp, TextStyle } from 'react-native';
import Text from './Text';
import { useTheme } from '../../hooks/useTheme';

type Props = TextInputProps & { label?: string; error?: string; style?: StyleProp<TextStyle> };

const sanitizeId = (value: string) => value.replace(/[^a-zA-Z0-9_-]/g, '_');

const Input = forwardRef<React.ElementRef<typeof TextInput>, Props>(function Input(
  { label, style, error, ...rest },
  ref
) {
  const { theme } = useTheme();
  const reactId = useId(); 
  const generatedId = `input-${sanitizeId(reactId)}`; 


  const nativeID = typeof rest.nativeID === 'string' && rest.nativeID.length ? rest.nativeID : generatedId; 
  const testID = typeof rest.testID === 'string' && rest.testID.length ? rest.testID : generatedId; 
  const accessibilityLabel = rest.accessibilityLabel ?? label;

  return (
    <View style={{ marginVertical: 8 }}>
      {label ? (
        <View style={{ marginBottom: 6 }}>
          <Text variant="caption" nativeID={`${nativeID}-label`}> 
            {label} 
          </Text>
        </View>
      ) : null}
      <TextInput
        ref={ref} 
        nativeID={nativeID} 
        testID={testID} 
        accessibilityLabel={accessibilityLabel}
        placeholderTextColor={theme.colors.muted as any}
        style={[
          styles.input,
          { backgroundColor: theme.colors.inputBg, color: theme.colors.text, borderColor: theme.colors.border },
          style,
        ]}
        {...rest}
      />
      {error ? (
        <View style={{ marginTop: 6 }}>
          <Text style={{ color: theme.colors.danger }}>{error}</Text>
        </View>
      ) : null}
    </View>
  );
});

const styles = StyleSheet.create({
  input: {
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderRadius: 10,
    borderWidth: 1,
  },
});

export default memo(Input);
