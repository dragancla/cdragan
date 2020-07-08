import React, { Component } from 'react';
import Pdf from "../documents/resume.pdf";

export default class Header extends Component {
  render() {
    const resumeData = this.props.resumeData;
    const hrefLink = '#';
    return (
      <React.Fragment>
      
        <header id="home">
          <nav id="nav-wrap">
              <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
              <a className="mobile-btn" href={hrefLink} title="Hide navigation">Hide navigation</a>
              <ul id="nav" className="nav">
                <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                <li><a className="smoothscroll" href="#about">About</a></li>
              <li><a className="smoothscroll" href="#resume">Resume</a></li>
                {/* <li><a className="smoothscroll" href="#portfolio">Works</a></li> */}
                <li><a className="smoothscroll" href="#testimonials">Recommendations</a></li>
                {/* <li><a className="smoothscroll" href="#contact">Contact</a></li> */}
              </ul>
          </nav>

          <div className="row banner">
              <div className="banner-text">
                <h1 className="responsive-headline">{resumeData.name}</h1>
                <h2 style={{color:'#fff', fontFamily:'sans-serif '}}>{resumeData.role}</h2>
                <h3 style={{color:'#fff', fontFamily:'sans-serif '}}>{resumeData.roleDescription}</h3>
                {/* <a data-scroll="" class="btn" href={resumeData.cvLink}>My Resume</a> */}
                <hr/>
                <ul className="social">
                  {
                    resumeData.socialLinks && resumeData.socialLinks.map(item =>{
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
          </div>

          <p className="scrolldown">
              <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
          </p>

        </header>
      </React.Fragment>
    );
  }
}