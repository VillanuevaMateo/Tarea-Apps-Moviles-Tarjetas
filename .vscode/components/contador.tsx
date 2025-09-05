import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export function ClickFunction() {

  const [fontStyle, setFontStyle] = useState<TextStyle>({
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontFamily: 'sans-serif',
  });
  const [textColor, setTextColor] = useState("white");

  const cambiarColor = (color : string) =>{
      setTextColor(color);
  }
  

  const cambiarLetra = (fuente: string) => {
    switch (fuente) {
      case 'italic':
        setFontStyle({ fontWeight: 'normal', fontStyle: 'italic', fontFamily: 'sans-serif' });
        break;
      case 'negrita':
        setFontStyle({ fontWeight: 'bold', fontStyle: 'normal', fontFamily: 'sans-serif' });
        break;
      case 'sans-serif':
        setFontStyle({ fontWeight: 'normal', fontStyle: 'normal', fontFamily: 'sans-serif' });
        break;
      case 'monospace':
        setFontStyle({ fontWeight: 'normal', fontStyle: 'normal', fontFamily: 'monospace' });
        break;
      case 'serif':
        setFontStyle({ fontWeight: 'normal', fontStyle: 'normal', fontFamily: 'serif' });
        break;
      default:
        setFontStyle({ fontWeight: 'normal', fontStyle: 'normal', fontFamily: 'sans-serif' });
        break;
    }
  };

  return(
    <View style={[styles.container, {backgroundColor: "black"}]}>
      <View style={styles.columna}>

        <Pressable onPress={() => cambiarColor("blue")} style={styles.button}>
          <Text style={[styles.texto, { color: textColor }, fontStyle]}>AZUL</Text>
        </Pressable>
        <Pressable onPress={() => cambiarColor("green")} style={styles.button}>
          <Text style={[styles.texto, { color: textColor }, fontStyle]}>VERDE</Text>
        </Pressable>
        <Pressable onPress={() => cambiarColor("red")} style={styles.button}>
          <Text style={[styles.texto, { color: textColor }, fontStyle]}>ROJO</Text>
        </Pressable>
        <Pressable onPress={() => cambiarColor("white")} style={styles.button}>
          <Text style={[styles.texto, { color: textColor }, fontStyle]}>BLANCO</Text>
        </Pressable>
        <Pressable onPress={() => cambiarColor("black")} style={styles.button}>
          <Text style={[styles.texto, { color: textColor }, fontStyle]}>NEGRO</Text>
        </Pressable>

      </View>

      <View style={styles.columna}>

        <Pressable onPress={() => cambiarLetra("italic")} style={styles.button}>
          <Text style={[styles.texto, { color: textColor }, fontStyle]}>ITALICAS</Text>
        </Pressable>
        <Pressable onPress={() => cambiarLetra("negrita")} style={styles.button}>
          <Text style={[styles.texto, { color: textColor }, fontStyle]}>NEGRITA</Text>
        </Pressable>
        <Pressable onPress={() => cambiarLetra("sans-serif")} style={styles.button} >
          <Text style={[styles.texto, { color: textColor }, fontStyle]}>sans-serif</Text>
        </Pressable>
        <Pressable onPress={() => cambiarLetra("monospace")} style={styles.button}>
          <Text style={[styles.texto, { color: textColor }, fontStyle]}>monospace</Text>
        </Pressable>
        <Pressable onPress={() => cambiarLetra("serif")} style={styles.button}>
          <Text style={[styles.texto, { color: textColor }, fontStyle]}>serif</Text>
        </Pressable>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch"
  },
  button: {
    alignItems: "center",
    paddingVertical: "15%",
    backgroundColor: "#444",
    marginBottom: 20,
    width: "90%",
    borderRadius: 15,
  },
  texto: {
    fontSize: 22,
    color: "white",
  },
  columna: {
    marginHorizontal: -15,
    flexDirection: 'column',
    justifyContent: 'center',
    width: '50%',
    height: '50%',
    paddingHorizontal: 10,
  },
});


