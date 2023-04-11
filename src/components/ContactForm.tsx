import React, { FormEvent, useRef, useState } from 'react';
import styled from 'styled-components';
import { HeartArrow } from 'react-bootstrap-icons';

interface Props {}

const encode = (data: Record<string, any>): string => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

export const ContactForm: React.FC<Props> = () => {
  const [status, setStatus] = useState<'entry' | 'submitting' | 'success' | 'error'>('entry');
  const [name, setName] = useState('');
  const [subject, setSubject] = useState(''); // This is the honeypot field
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const scrollRef = useRef<HTMLHeadingElement | null>(null);

  const isValid = name && email && email.includes('@') && message;

  const handleSubmit = (e: FormEvent) => {
    setStatus('submitting');

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', name, email, phone, message, subject }),
    })
      .then(() => {
        setStatus('success');
      })
      .catch(() => setStatus('error'))
      .finally(() => {
        scrollRef.current?.scrollIntoView();
      });

    e.preventDefault();
  };

  if (status === 'error') {
    return (
      <>
        <h4 id="contact-form__message">This is embarrassing...</h4>
        <p>We've encountered an issue with our form. Please contact us directly using one of the methods above.</p>
      </>
    );
  }

  if (status === 'success') {
    return (
      <>
        <h4 id="contact-form__message">Message sent!</h4>
        <p>Thank you for contacting us. We will get in touch with you shortly.</p>
      </>
    );
  }

  return (
    <>
      <h4 ref={scrollRef}>Send us a message</h4>
      <p>Feel free to message us directly using our website and we will respond by email.</p>
      <Container onSubmit={handleSubmit} data-netlify-honeypot={'subject'} data-netlify="true" name="contact">
        <div className="input-block">
          <label htmlFor="name">Full name</label>
          <input name="name" onChange={(e) => setName(e.target.value)} value={name} type="text" />
        </div>

        <div className="input-block input-block__subject-field">
          <label htmlFor="subject">Subject (required)</label>
          <input name="subject" onChange={(e) => setSubject(e.target.value)} value={subject} type="text" />
        </div>

        <div className="input-block">
          <label htmlFor="email">Email address</label>
          <input name="email" onChange={(e) => setEmail(e.target.value)} value={email} type="email" />
        </div>

        <div className="input-block input-block--optional">
          <label htmlFor="phone">Phone number</label>
          <input name="phone" onChange={(e) => setPhone(e.target.value)} value={phone} type="tel" />
        </div>

        <div className="input-block">
          <label htmlFor="message">Question or message</label>
          <textarea name="message" onChange={(e) => setMessage(e.target.value)} value={message} rows={5} />
        </div>

        <button type="submit" disabled={!isValid || status === 'submitting'}>
          Send
          <HeartArrow size={24} />
        </button>
      </Container>
    </>
  );
};

const Container = styled.form`
  display: flex;
  flex-direction: column;
  min-height: 0;
  gap: 24px;

  .input-block__subject-field {
    display: none;
  }

  .input-block {
    label {
      display: block;
      margin-bottom: 2px;
      font-weight: bold;
      color: var(--color-primary);
      font-size: 1em;
    }

    input,
    textarea {
      display: block;
      width: 100%;
      padding: 8px 12px;
      border-radius: 8px;
      border: 2px solid transparent;
      background: var(--color-blank);
      color: var(--color-text-default);
      resize: none;
      outline: none;

      &:focus {
        outline: none;
        border-color: var(--color-primary);
      }
    }
  }

  .input-block--optional {
    label::after {
      content: '(Optional)';
      opacity: 0.8;
      padding-left: 4px;
      font-size: 0.8em;
    }
  }

  button {
    display: inline-flex;
    height: 48px;
    background-color: var(--color-secondary);
    border-radius: 8px;
    align-items: center;
    padding: 0 24px;
    align-self: flex-start;
    color: white;
    margin-bottom: 12px;
    font-family: 'Open Sans', sans-serif;

    &:hover:not([disabled]) {
      background-color: var(--color-secondary-light);
    }

    &[disabled] {
      cursor: not-allowed;
      opacity: 0.6;
    }

    svg {
      margin-left: 8px;
    }
  }
`;
