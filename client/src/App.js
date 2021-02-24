import Main from './components/main';
import './Style.css';
import { Provider } from 'react-redux';
import store from './redux/store'


function App() {
  return (
      <Provider store={store}>
      <Main></Main>
      </Provider>
  );
}

export default App;
