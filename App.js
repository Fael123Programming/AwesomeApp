import { StyleSheet, Text, View } from 'react-native';
import LittleLemonHeader from './components/LittleLemonHeader';
import LittleLemonFooter from './components/LittleLemonFooter';

export default function App() {
  return (
    <View style={style.content}>  
      <View style={style.contentContainer}>
        <LittleLemonHeader/>
      </View>
      <View style={style.footer}>
          <LittleLemonFooter/>
      </View>
    </View>
  );
}

var style = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: '#495E57'
  },
  contentContainer: {
    flex: 1
  },
  footer: {
    height: 55
  }
});
