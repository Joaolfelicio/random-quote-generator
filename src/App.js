import React from 'react';

import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      isLoading: false,
      quoteData: [],
      quote: '',
      quoteAuthor: ''
    };
    this.handleClick = this.handleClick.bind(this);
  };


  componentDidMount() {
    let randNum = Math.floor(Math.random() * 102)
    this.setState({ isLoading: true })
    fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json/')
      .then(response => response.json())
      .then(data => {
        this.setState({
          isLoading: false,
          quoteData: data.quotes,
          quote: data.quotes[randNum].quote,
          quoteAuthor: data.quotes[randNum].author

        })
      });
  }

  handleClick() {
    let randNum = Math.floor(Math.random() * 102)
    let background =
      this.setState({
        quote: this.state.quoteData[randNum].quote,
        quoteAuthor: this.state.quoteData[randNum].author
      })
  }


  render() {
    const text = this.state.isLoading ? 'Loading...' : this.state.quote;
    const tweetLink = `https://twitter.com/intent/tweet?url=https%3A%2F%2Frandomquote-generator.netlify.com&hashtags=quotes&text='${this.state.quote}'  -${this.state.quoteAuthor},`;
    const tumblrLink = `https://www.tumblr.com/share/link?url=https%3A%2F%2Frandomquote-generator.netlify.com%2F&name=Quotes&description=${this.state.quote} -${this.state.quoteAuthor}`
    const fbLink = `https://www.facebook.com/sharer/sharer.php?u=https://randomquote-generator.netlify.com%2F&quote= ${this.state.quote} -${this.state.quoteAuthor}`;
    const linkedInLink = `http://www.linkedin.com/shareArticle?url=https%3A%2F%2Frandomquote-generator.netlify.com%2F&title=${this.state.quote} -${this.state.quoteAuthor}`;
    const authorSearch = `https://www.google.com/search?q=${this.state.quoteAuthor}+Quotes`;

    return (

      <div id="root-container" >

        <div id="quote-container">

          <div id='textAndAuthor'>

            <div id='text-box'>

              <i className="quotes fa fa-quote-left"></i>
              <div id='text'>{text}</div>
              <i className="quotes fa fa-quote-right"></i>

            </div>

            <a id='author' target='_blank' href={authorSearch}>-{this.state.quoteAuthor}</a>

          </div>

          <div className='share-bar'>

            <div className='share'>

              <a href={tweetLink} id='tweet-quote' target='_blank'><i className='share-icons fa fa-twitter'></i></a>
              <a href={tumblrLink} id='tumblr-quote' target='_blank'><i className='share-icons fa fa-tumblr' ></i></a>
              <a href={fbLink} id='tumblr-quote' target='_blank'><i className='share-icons fa fa-facebook-official' ></i></a>
              <a href={linkedInLink} id='insta-quote' target='_blank'><i className="share-icons fa fa-linkedin" aria-hidden="true" ></i></a>

            </div>

            <button id='new-quote' className='btn btn-primary btn-change-1' onClick={this.handleClick}>New quote</button>

          </div>

          <div id='credits'>

            <a href='https://github.com/Joaolfelicio' target='_blank'><em>By Joao Felicio</em></a>

          </div>

        </div>

      </div>
    )
  }
}


export default App;
