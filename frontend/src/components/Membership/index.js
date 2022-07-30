import React from 'react'
import HomeHeader from '../HomePage/HomeHeader'
import './css/index.css'

const index = () => {
  return (<>
            <HomeHeader backgroundColor={"#4479ff"} />

            <div className='member'>
                <div  className='member-top-content'>
                    <p><strong>Fuel great thinking.</strong></p>
                    <p>Become a Medium member to enjoy unlimited access <br />
                        and
                       directly support the writers you read most.
                    </p>
                    <button>Get unlimited access</button>
                </div>

                <div className='member-grid'>
                    <div className='member-grid-content'>
                        <div className='grid-left'>
                            <p><strong>Get unlimited access to every story.</strong></p>

                            <img alt = 'fallback' src='https://cdn-static-1.medium.com/sites/medium.com/membership/images/UnlimitedReading.svg'></img>

                            <p>Read any article in our entire library across all your devices — with no paywalls, story limits or ads.</p>
                        </div>
                        <div className='grid-left'>
                            <p><strong>Support the voices you want to hear more from.</strong></p>

                            <img alt = 'fallback' src='https://cdn-static-1.medium.com/sites/medium.com/membership/images/SupportWriters.svg'></img>

                            <p>A portion of your membership will directly support the writers and thinkers you read the most.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    
  )
}

export default index