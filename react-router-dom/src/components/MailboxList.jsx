import { Link } from 'react-router-dom';

const MailboxList = ({ mailboxes }) => (
  <div>
    {mailboxes.length === 0 ? (
      <p>No mailboxes available.</p>
    ) : (
      <div className="mailboxes-grid">
        {mailboxes.map((mailbox) => (
          <Link to={`/mailboxes/${mailbox._id}`} key={mailbox._id} className="mail-box">
            {mailbox._id}
          </Link>
        ))}
      </div>
    )}
  </div>
);

export default MailboxList;
