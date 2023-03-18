import 'react-native-gesture-handler';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Index from './src/pages';

const Stack = createNativeStackNavigator();
 function App() {
  return (
    <Index />
  );
}

export default App;

