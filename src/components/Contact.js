import React from "react";
import './Contact.css'
import LinkedIn from '..\\cute-linkedin-icon.png'
import GitHubMark from '..\\GitHub-Mark-64px.png'
import Email from '..\\cute-email-icon.png'


function Contact() {
    return(
        <div className="title" id="contact" display="block">
            <p>
                Want to get in touch?
            </p>
        <div className="body">
            <p> Send me an email or reach out to me on Linkedin</p>
            <a href="mailto:nataliewilson519@gmail.com" target="_blank" rel="noopener noreferrer">
                    <img src={Email} className="email-icon" alt="email"></img>
                </a>

                <a href="https://github.com/NatalieWilson19" target="_blank" rel="noopener noreferrer">
                    <img src={GitHubMark} className="github-mark-contact" alt="github"></img>
                </a>
                <a href="https://www.linkedin.com/in/natalie-w-08b4639b/" target="_blank" rel="noopener noreferrer">
                    <img src={LinkedIn} className="linkedin-logo" alt="linkedin"></img>
                </a>
        
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="url(#MyGradient2" d="M0,192L48,197.3C96,203,192,213,288,181.3C384,149,480,75,576,69.3C672,64,768,128,864,154.7C960,181,1056,171,1152,149.3C1248,128,1344,96,1392,80L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        <defs>
          <linearGradient id="MyGradient2">
            <stop offset="0%" stop-color="#ACF6CA" />
            <stop offset="100%" stop-color="#3C9169" />
            </linearGradient>
          </defs>
        </svg>
        </div>
        </div>
    );
}

export default Contact;
