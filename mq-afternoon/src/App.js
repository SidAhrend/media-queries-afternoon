import React from 'react';

import './App.css';

class App extends React.Component {
  constructor(){
    super()

    this.dropdown = React.createRef()
  }
  toggleShow = () => {
    console.log(this.dropdown.current)
    let {current} = this.dropdown

    if(current.classList.contains('show-animation')){
      current.classList.add('hide-animation')
      current.classList.remove('show-animation')
    }else{
      current.classList.add('show-animation')
      current.classList.remove('hide-animation')
    }
  }
  
  render(){
    return (
      <div>
        <nav>
          <div id='logo'>Start Bootstrap</div>
          <i id='hamburder-icon' className='fas fa-bars fa-2x' onClick={this.toggleShow}/>
          <div id='nav-button-box'>
            <div className='nav-buttons'>SERVICES</div>
            <div className='nav-buttons'>PORTFOLIO</div>
            <div className='nav-buttons'>ABOUT</div>
            <div className='nav-buttons'>TEAM</div>
            <div className='nav-buttons'>CONTACT</div>
          </div>
        </nav>
       
        <div className='dropdown' ref={this.dropdown}>
            <div className='dropdown-buttons'>SERVICES</div>
            <div className='dropdown-buttons'>PORTFOLIO</div>
            <div className='dropdown-buttons'>ABOUT</div>
            <div className='dropdown-buttons'>TEAM</div>
            <div className='dropdown-buttons'>CONTACT</div>
        </div>

        <div className='content'>
            <div id='welcome'>WELCOME TO OUR STUDIO</div>

            <div id='greeting'>ITS NICE TO MEET YOU</div>
            
            <button id='info-button'>TELL ME MORE</button>
        </div>
        <div className='bottom-content'></div>
      </div>
    );
  }
}

export default App;
