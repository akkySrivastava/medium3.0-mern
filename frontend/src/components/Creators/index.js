import React from 'react'
import HomeHeader from '../HomePage/HomeHeader'
import './css/index.css'

const index = () => {
  return (
    <>
        <HomeHeader backgroundColor={"#f24d2e"} />
        <div className='creators'>
            <div className='creators-main'>
                    <small>START A BLOG FOR FREE</small>
                    <p><strong>Publish, grow, and earn, all in one place.</strong></p>
                    <p>If you have a story to tell, knowledge to share, or a perspective to offer — welcome home. Sign up for free so your writing can thrive in a network supported by millions of readers — not ads.</p>
                    <button>Start writing</button>
            </div>
        </div>
        <div className='creator-learn'>
            <p><strong>Earn money from your writing.</strong></p>
            <p>Writing has its rewards when you join the Partner Program. Learn how to get paid for the content you publish and the audiences you build.</p>
            <button>Learn more</button>
        </div>
    </>
  )
}

export default index