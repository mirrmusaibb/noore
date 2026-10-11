"use client";

import { useState } from "react";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage("Preview only. No address was saved or sent; newsletter service is not connected.");
  };
  return <form className="newsletter-form" onSubmit={submit}>
    <label htmlFor="newsletter-email">Your email</label>
    <div className="newsletter-input-row"><input id="newsletter-email" type="email" autoComplete="email" placeholder="you@example.com" value={email} onChange={(event) => setEmail(event.target.value)} required /><button className="button button-dark" type="submit">Join the preview</button></div>
    <p className="fine-print">A preview interaction only. Your address stays in this page and is not transmitted or stored.</p>
    {message && <p className="form-message" role="status">{message}</p>}
  </form>;
}
