import './App.css';
import Main from './Main';
import './Style.css';
import { Provider } from 'react-redux';
import store from './redux/store'


function App() {
  return (
    <div id="backgroundLogin">
      <Provider store={store}>
      <Main></Main>
      </Provider>
    </div>
  );
}

export default App;
