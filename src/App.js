import Slider from './slider';
import React, { useState, useEffect } from 'react';
import { Typography } from '@material-ui/core';
import wordsToNumbers from 'words-to-numbers';
import alanBtn from '@alan-ai/alan-sdk-web';
import CollapsibleExample from './Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NewsCards, Modal } from './components';
import useStyles from './styles';
import NavPillsExample from './cards';
// import './App.css'
import { useSpeechSynthesis } from 'react-speech-kit';
import { Button } from 'bootstrap';
import axios from 'axios'

const App = () => {
  const [activeArticle, setActiveArticle] = useState(0);
  const [newsArticles, setNewsArticles] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const classes = useStyles();

  useEffect(() => {
    alanBtn({
      key: '64370f4c903e66c5b517887fefa45c1b2e956eca572e1d8b807a3e2338fdd0dc/stage',
      onCommand: ({ command, articles, number }) => {
        if (command === 'newHeadlines') {
          setNewsArticles(articles);
          setActiveArticle(-1);
        } else if (command === 'instructions') {
          setIsOpen(true);
        } else if (command === 'highlight') {
          setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
        } else if (command === 'open') {
          const parsedNumber = number.length > 2 ? wordsToNumbers((number), { fuzzy: true }) : number;
          const article = articles[parsedNumber - 1];

          if (parsedNumber > articles.length) {
            alanBtn().playText('Please try that again...');
          } else if (article) {
            window.open(article.url, '_blank');
            alanBtn().playText('Opening...');
          } else {
            alanBtn().playText('Please try that again...');
          }
        }
      },
    });

    const body = document.body
    const slides = document.querySelectorAll('.slide')
    const leftBtn = document.getElementById('left')
    const rightBtn = document.getElementById('right')

    let activeSlide = 0

    rightBtn.addEventListener('click', () => {
      activeSlide++

      if (activeSlide > slides.length - 1) {
        activeSlide = 0
      }

      setBgToBody()
      setActiveSlide()
    })

    leftBtn.addEventListener('click', () => {
      activeSlide--

      if (activeSlide < 0) {
        activeSlide = slides.length - 1
      }

      setBgToBody()
      setActiveSlide()
    })

    setBgToBody()

    function setBgToBody() {
      body.style.backgroundImage = slides[activeSlide].style.backgroundImage
    }

    function setActiveSlide() {
      slides.forEach((slide) => slide.classList.remove('active'))

      slides[activeSlide].classList.add('active')
    }
  });

  const [data, setData] = useState([])
  const getNews = () => {
    axios.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=35541c85ab1f4527b6b2aed6e580c56b")
      .then((response) => {
        //  console.log(response);
        setData(response.data.articles)
      })
  }

  return (
    <div>
      <CollapsibleExample />
      {/* <NavPillsExample /> */}
      <Slider />
      <NewsCards articles={newsArticles} activeArticle={activeArticle} />
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} />

      {!newsArticles.length ? (
        <div className="next" >
          <button className='btn btn-primary' onClick={getNews} >Fetch News</button>

          <div className='container1' >
            <div className="row">
              {
                data.map((value) => {
                  return (
                    <div className="col-3">
                      <div className="card" style={{ width: "20rem",target:"_blank",overflow:"scroll" }}>
                        <img  src={value.urlToImage} className="card-img-top" alt="Card image cap" />
                        <div className="card-body">
                          <h5 className="card-title">{value.title}</h5>
                          <p className="card-text">{value.description}</p>
                          <a href={value.url} className="btn btn-primary">Main News</a>
                        </div>
                      </div>
                    </div>
                  );
                })
              }
            </div>
          </div>
          {/* <Typography variant="body1" component="h2">
                  Created by
                  <a className={classes.link} href="https://www.linkedin.com/in/adrian-hajdin/"> Adrian Hajdin</a> -
                  <a className={classes.link} href="http://youtube.com/javascriptmastery"> JavaScript Mastery</a>
                </Typography> */}
          {/* <img className={classes.image} src={logo} height="50px" alt="JSMastery logo" /> */}
        </div>
      ) : null}
    </div>
  );
};

      export default App;
