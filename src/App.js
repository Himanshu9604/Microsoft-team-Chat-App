import { ChatEngine } from 'react-chat-engine';


import Chat from './components/Chat';
import LoginForm from './components/Login';
import './App.css';

const projectID = '22336d74-fada-431d-944b-552fda30edb4';

const App = () => {
  if (!localStorage.getItem('username')) return <LoginForm />;

  return (
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <Chat {...chatAppProps} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
  );
};



export default App;