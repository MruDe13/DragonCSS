import './App.css';
import { AppContent, AppFooter, NavHead, SideBar } from './components';

function App() {
  return (
    <div className="App">
      <NavHead/>
      <section>
        <SideBar/>
        <AppContent/>
      </section>
      <AppFooter/>
    </div>
  );
}

export default App;
