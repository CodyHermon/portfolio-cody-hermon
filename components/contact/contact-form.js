import { useEffect, useState } from 'react';

import Notification from '../ui/notification';
import classes from './contact-form.module.css';

const sendContactData = async (contactDetails) => {
  const response = await fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(contactDetails),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Something went wrong!');
  }
};

const ContactForm = () => {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredName, setEnteredName] = useState('');
  const [enteredMessage, setEnteredMessage] = useState('');

  const [requestStatus, setRequestStatus] = useState(); // pending, success, or error
  const [requestError, setRequestError] = useState();

  useEffect(() => {
    if (requestStatus === 'success' || requestStatus === 'error') {
      const timer = setTimeout(() => {
        setRequestStatus(null);
        setRequestError(null);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [requestStatus]);

  const onChangeEmail = (e) => {
    setEnteredEmail(e.target.value);
  };

  const onChangeName = (e) => {
    setEnteredName(e.target.value);
  };

  const onChangeMessage = (e) => {
    setEnteredMessage(e.target.value);
  };

  const sendMessageHandler = async (e) => {
    e.preventDefault();

    setRequestStatus('pending');

    try {
      await sendContactData({
        email: enteredEmail,
        name: enteredName,
        message: enteredMessage,
      });
      setRequestStatus('success');
      setEnteredMessage('');
      setEnteredEmail('');
      setEnteredName('');
    } catch (error) {
      setRequestError(error.message);
      setRequestStatus('error');
    }
  };

  let notification;

  if (requestStatus === 'pending') {
    notification = {
      status: 'pending',
      title: 'Sending message...',
      message: 'Your message is on the way!',
    };
  }

  if (requestStatus === 'success') {
    notification = {
      status: 'success',
      title: 'Success!',
      message: 'Message sent successfully!',
    };
  }

  if (requestStatus === 'error') {
    notification = {
      status: 'error',
      title: 'Error!',
      message: requestError,
    };
  }

  return (
    <section className={classes.contact}>
      <h1>Have any questions or comments?</h1>
      <form className={classes.form} onSubmit={sendMessageHandler}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label id='email'>Your Email</label>
            <input
              id='email'
              type='email'
              required
              placeholder='Email'
              value={enteredEmail}
              onChange={onChangeEmail}
            />
          </div>
          <div className={classes.control}>
            <label id='name'>Your Name</label>
            <input
              id='name'
              type='text'
              required
              placeholder='Name'
              value={enteredName}
              onChange={onChangeName}
            />
          </div>
        </div>
        <div className={classes.control}>
          <label id='message'>Your Message</label>
          <textarea
            id='message'
            rows='5'
            required
            placeholder='Message'
            value={enteredMessage}
            onChange={onChangeMessage}
          />
        </div>
        <div className={classes.actions}>
          <button className={classes.submitButton}>Send Message</button>
        </div>
      </form>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
    </section>
  );
};

export default ContactForm;
