import RestOfApp from './components/RestOfApp';
import FirebaseProvider from './providers/FirebaseProvider';

function App() {
  return (
    <FirebaseProvider>
      <RestOfApp />;
    </FirebaseProvider>
  );
}

export default App;
