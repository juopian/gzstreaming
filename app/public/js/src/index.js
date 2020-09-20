'use strict';

var {carousels,midbar_img_url,bottom_dataset} = require('./data.js')

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { index: 0,  cindex: 0 };
  }

  onSearchChange(e){
    console.log('e, ',e)
  }
  
  onpostchange(e){
    this.setState({index: e.activeIndex})
  }

  componentDidMount(){
  }

  switchCategory(idx){
    this.setState({cindex: idx})
  }

  renderToolbar(){
    return (
      <Ons.Toolbar modifier = 'more-center'>
        <div className='left'>
          <img src = '/images/logo.jpeg' className = 'logo'/>
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
        <Ons.Carousel 
          onPostChange= {this.onpostchange.bind(this)}
          index = {this.state.index}
          fullscreen 
          swipeable 
          autoScroll 
          overscrollable 
          centered = 'true'
          >
        {
          carousels.map((item)=>{
            return (
            <Ons.CarouselItem >
              <div style= {{
                width: '100%',
                height: '100%',
                backgroundSize: 'cover',
                backgroundImage : 'url(' + item.img_url + ')'}}>
              </div>
              <div className='absolute fade-text'>{item.text}</div>
            </Ons.CarouselItem>
            )
          })
        }
        </Ons.Carousel>

        <div className = 'carousel-indicator'>
        {
          carousels.map((item, index)=>{
            return (
            <span className='white'>{this.state.index === index ? '\u25CF' :  '\u25CB'} </span>
            )
          })
        }
        </div>
      </div>

      <div>
        <img width ='100%' style= {{maxHeight : '95px' }}
        src = {midbar_img_url} />
      </div>

      
      <div className ='relative' style= {{minHeight: '440px'}}>
        <div className = 'absolute left-bar-wrapper'>
          {
            bottom_dataset.map((item, idx)=>{
              return (
              <div className = {'left-bar-item' + (idx ==  this.state.cindex ? ' selected': '')}
                onClick = {this.switchCategory.bind(this, idx)}>
                  <ons-icon icon={item.icon} style = {{color: item.icon_color }}></ons-icon> 
                &nbsp;
                {item.name}
              </div>
              ) 
            })
          } 
        </div>

        <div className = 'right-bar-wrapper'>
          {
            bottom_dataset[this.state.cindex]['video_list'].map((item)=>{
              return (
                <a href= '/play/123'><div className ='sub-card' 
                style ={{backgroundImage : 'url(' + item.img_url + ')'}}></div></a>
              )
            }) 
          }
        </div>
      </div>
    </Ons.Page>
    )    
  }
}

const domContainer = document.querySelector('#main-container');
ReactDOM.render(<App  />, domContainer);
