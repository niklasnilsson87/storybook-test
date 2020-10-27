import React from 'react';
import { Page } from './stories/page/Page';

function App() {

  const onLogin = () => {

  }

  const onLogout = () => {

  }

  const onCreateAccount = () => {
    console.log('creating account...');
  }

  return (
    <div className="App">
      <Page onCreateAccount={onCreateAccount} onLogin={onLogin} onLogout={onLogout}></Page>
    </div>
  );
}

export default App;
