import React, { Component } from 'react';
import Pdf from "../documents/resume.pdf";

export default class Footer extends Component {
  render() {
    const resumeData = this.props.resumeData;
    return (
      <footer>
      <div className="row">
        <div className="twelve columns">
          <ul className="social-links">
            {
              resumeData.socialLinks && resumeData.socialLinks.map((item)=>{
                let pdfHref = item.url;
                if (item.name === "resume") {
                  pdfHref = Pdf;
                }
                return(
                  <li>
                    <a href={pdfHref} rel="noopener noreferrer" target="_blank">
                      <i className={item.className} />
                    </a>
                  </li>
                )
              })
            }
          </ul>
          
        </div>
        <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
      </div>
    </footer>
    );
  }
}