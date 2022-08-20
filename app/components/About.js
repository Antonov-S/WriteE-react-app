import React from "react";
import { Link } from "react-router-dom";
import Page from "./Page";

function About() {
  return (
    <Page title="About Us">
      <h2>About Us</h2>
      <p className="lead text-muted">WriteE is what’s happening and what people are talking about right now.</p>
      <p>Are you sick of short tweets and impersonal “shared” posts that are reminiscent of the late 90’s email forwards? We believe getting back to actually writing is the key to enjoying the internet again. We serve the public conversation. That’s why it matters to us that people have a free and safe space to talk.</p>
      <p>WriteE is an open service that's home to a world of diverse people, perspectives, ideas, and information. Life’s not about a job, it’s about purpose. We believe real change starts with conversation. Here, your voice matters. Come as you are and together we’ll do what’s right (not what’s easy) to serve the public conversation.</p>
      <p>
        Go to <Link to={"/"}>WriteE</Link> to sign up for free account or login in to catch up.
      </p>
    </Page>
  );
}

export default About;
