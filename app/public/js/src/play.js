'use strict';

var {carousels,midbar_img_url,bottom_dataset, video_url} = require('./data.js')

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { index: 0 };
  }

  switchTab(idx){
    this.setState({index: idx})
  }

  onSearchChange(e){
    console.log('e, ',e)
  }

  componentDidMount(){
  }
  
  renderToolbar(){
    return (
      <Ons.Toolbar modifier = 'more-center'>
        <div className='left'>
          <a href = '/'>
          <img src = '/images/logo.jpeg' className = 'logo'/>
          </a>
        </div>
        <div className="center">
          <Ons.SearchInput
            class = 'search-bar'
            placeholder = '搜索'
            onChange = {this.onSearchChange.bind(this)}
            />
        </div>
        <div className="right">
          <Ons.ToolbarButton>
            <Ons.Icon icon="md-account-o" size="20px" style={{color:'#433e3e'}} />
          </Ons.ToolbarButton>
        </div> 
      </Ons.Toolbar>
    )
  }

  render(){
    return (
    <Ons.Page id="gz-page" modifier= 'pure'
      renderToolbar = {this.renderToolbar.bind(this)}
      >
      <div style={{height: '250px', position:'relative'}} > 
        <video
          class="video-js play"
          controls
          preload="auto"
          poster="/res/dy1.jpeg"
          data-setup='{"fluid": true}'
        >
          <source src={video_url} type="video/mp4" />
          <source src={video_url} type="video/webm" />
          <p class="vjs-no-js">
            To view this video please enable JavaScript, and consider upgrading to a
            web browser that
            <a href="https://videojs.com/html5-video-support/" target="_blank"
              >supports HTML5 video</a
            >
          </p>
        </video>   
      </div>

      <div className= 'l-tabs'>
        <div className ='c-tabs'>
          <div className = 'c-tabs-header'>
            <div className={'item' + (this.state.index == 0? ' cur':'')} 
            onClick ={this.switchTab.bind(this,0)}>评论</div>
            <div className={'item' + (this.state.index == 1? ' cur':'')} 
            onClick = {this.switchTab.bind(this,1)}>预告</div>
          </div> 
          <div className = {'c-tabs-content ' + (this.state.index == 0? 'cur0': 'cur1')}>
            <div className='c-tabs-wrap'>
              <div className ='item chat'>
                <div className = 'c-chat'>
                  <div className = 'barrage-scroll '>
                    <div style ={{height: '1000px'}}>
                      12312\n
                      12312\n
                      12312\n
                      12312\n
                    </div>
                  </div>
                </div>
                <div className = 'c-operate'>
                  <div className = 'comment-bar-wrap'>
                    <Ons.Input 
                      class = 'comment-bar'
                      placeholder = '说点什么呢'/>
                    <div className = 'absolute send-button'>
                      <Ons.Button modifier = 'small'>发送</Ons.Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className ='item anchor'>
                <div className = 'c-anchor'>
                </div>
              </div>
            </div>
          </div> 
        </div> 
      </div>
    </Ons.Page>
    )    
  }
}

const domContainer = document.querySelector('#main-container');
ReactDOM.render(<App  />, domContainer);
