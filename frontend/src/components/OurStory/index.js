import React from 'react'
import HomeHeader from '../HomePage/HomeHeader'
import './css/index.css'

const index = () => {
  return (
    
    <>
        <HomeHeader backgroundColor = {"#ffffff"} />
        <div className='our-story-head'>
          <div className='our-story-content'>
            <p>Every idea needs a <span>Medium.</span></p>
          </div>
        </div>

        {/* Story Content */}
        <div className='our-story-content-main'>
            <div className='our-story-content-main-left'>
              <div className='our-story-main-content'>
                <p>
                The best ideas can change who we are. Medium is where those ideas take shape, take off, and spark powerful conversations. We’re an open platform where over 100 million readers come to find insightful and dynamic thinking. Here, expert and undiscovered voices alike dive into the heart of any topic and bring new ideas to the surface. Our purpose is to spread these ideas and deepen understanding of the world.
                </p>
                <br />
                <p>
                We’re creating a new model for digital publishing. One that supports nuance, complexity, and vital storytelling without giving in to the incentives of advertising. It’s an environment that’s open to everyone but promotes substance and authenticity. And it’s where deeper connections forged between readers and writers can lead to discovery and growth. Together with millions of collaborators, we’re building a trusted and vibrant ecosystem fueled by important ideas and the people who think about them.
                </p>
              </div>
              </div>
              <div className='anime'>
              <iframe title='anime' src="https://player.vimeo.com/video/467834328?api=1&amp;background=1&amp;mute=1&amp;loop=1" width="100%" height="100%" positioning="relative" frameBorder="0" allow="autoplay; fullscreen" allowfullscreen=""></iframe>
              </div>
            
            
        </div>
        {/* Membership */}
            <div className='membership'>
              <div className='memership-content-left'>
                <iframe title='cube' src="https://player.vimeo.com/video/448735219?api=1&amp;background=1&amp;mute=1&amp;loop=1" width="100%" height="100%" positioning="relative" frameBorder="0" allow="autoplay; fullscreen" allowfullscreen="" />
              </div>
              <div className='membership-content-right'>
                <div className='membership-content-right-content'>
                  <h2>Read, Write</h2>
                  <br />
                  <h2>and expand</h2>
                  <br />
                  <h2>your world.</h2>
                  <button>Get Started</button>
                </div>
              </div>
            </div>
    </>
  )
}

export default index