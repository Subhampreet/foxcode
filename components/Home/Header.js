import React from 'react'

function Header() {
  return (
    <div className='header'>
        <div className='body'>
            <div className='left'>
                <div className='logo'>
                    <img src="./fc-3.png" />
                    {/* <h4>CODE</h4> */}
                </div>
            </div>
            <div className='right'>
                <p>Code Snippets</p>
                <p>Resources</p>
                <h5>Join the conversation</h5>
            </div>
        </div>
    </div>
  )
}

export default Header