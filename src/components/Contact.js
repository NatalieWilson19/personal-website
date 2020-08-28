import React from "react";
import './Contact.css'
import LinkedIn from '..\\cute-linkedin-icon.png'
import GitHubMark from '..\\GitHub-Mark-64px.png'
import Email from '..\\cute-email-icon.png'


function Contact() {
    return(
        <div className="title" id="contact">
            <p>
                Want to get in touch?
            </p>
        <div className="body">
            <p> Send me an email or reach out to me on Linkedin</p>
            <a href="https://www.linkedin.com/in/natalie-w-08b4639b/" target="_blank" rel="noopener noreferrer">
                    <img src={Email} className="email-icon" alt="email"></img>
                </a>

                <a href="https://github.com/NatalieWilson19" target="_blank" rel="noopener noreferrer">
                    <img src={GitHubMark} className="github-mark-contact" alt="github"></img>
                </a>
                <a href="https://www.linkedin.com/in/natalie-w-08b4639b/" target="_blank" rel="noopener noreferrer">
                    <img src={LinkedIn} className="linkedin-logo" alt="linkedin"></img>
                </a>
        </div>
        </div>
    );
}

export default Contact;
