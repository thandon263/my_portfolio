import React, { Component } from 'react';
import { Header, Arrow, Experience, Recent_blogs, Footer } from './index'

import '../css/App.css';

class App extends Component {

  scrollDown = () => alert('Scroll Down!')

  render() {
    return (
      <div className="App">
        <section className="App-header">
          <Header
            className="button"
          />
          <div className="pointer">
            <img width='200' height='140' src={Arrow} />
          </div>
          <div className="title">
            <p>FRONTEND <span style={{color:'#FAFAFA', backgroundColor: '#000', padding: '5px', fontFamily: 'cursive'}}>WEB</span><span style={{color:'#000', backgroundColor: '#FAFAFA', padding: '20px', fontFamily: 'monospace'}}>DEVELOPER</span></p>
            <code>Get Your User Interface Production Ready.</code>
          </div>

          <p onClick={this.scrollDown} className='scoll_down' > V </p>
        </section>

        <section className="App-section-1">
          <p>Technical Experience</p>
          <article>
            My experience in the front end includes <a href="#">HTML5</a>, <a href="#">CSS3</a>, <a href="#">React</a>, <a href="#">Meteor</a> and <a href="#">JQuery</a>. These are Javascript frameworks that handle the dynamic portions of the front end. I maintain css using the <a href="#">Sass</a> and <a href="#">Less</a> css pre-processing scripting languages. I have experience with the <a href="#">Webpack</a> build tools to compress your sites assets resulting in fast load times and thus a good user experience.
          </article>
          <div>
            <Experience />
          </div>
        </section>

        <section className="blog_posts">
          <h1>Recent Posts & Projects</h1>
          <Recent_blogs />
        </section>

        <footer className="footer">
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;
