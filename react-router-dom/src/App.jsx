import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import MailboxForm from './components/MailboxForm';
import MailboxList from './components/MailboxList';
import MailboxDetails from './components/MailboxDetails';

const App = () => {
  const [mailboxes, setMailboxes] = useState([]);

  const addBox = (newBox) => {
    const nextId = mailboxes.length + 1;
    setMailboxes([...mailboxes, { _id: nextId, ...newBox }]);
  };

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<main><h1>Post Office</h1></main>} />
        <Route path="/mailboxes" element={<MailboxList mailboxes={mailboxes} />} />
        <Route path="/new-mailbox" element={<MailboxForm addBox={addBox} />} />
        <Route path="/mailboxes/:mailboxId" element={<MailboxDetails mailboxes={mailboxes} />} />
      </Routes>
    </div>
  );
};

export default App;