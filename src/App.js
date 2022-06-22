import logo from './logo.svg';
import './App.css';
import Modal from './components/modal';
import ModalHook, {useModal} from './custom_hooks/modalHook';
import {  useState } from "react" 
import UserName from './components/modal_userName';

function App() {

  const [isOpen, setIsOpen] = useState(true)  

  const handleModal = () => {
    setIsOpen(!isOpen) 
  }

  /// HOOK
 
  const modalHook = useModal()
  
  const handleModalHook = () =>{  
    modalHook.changeShow()
  } 

  return (
    <div className="App">
      <header className="App-header">

        {isOpen ? <Modal close={handleModal} content={'Contenido '}/> : null} 
         
        <ModalHook modalHook={modalHook} content={<UserName/>}/>  

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        
        <br/>
        <button onClick={handleModal}>
          Open Modal
        </button>
        <br/>
        <button onClick={handleModalHook}>
          Open Modal HOOK
        </button>

      </header>
    </div>
  );
}

export default App;
