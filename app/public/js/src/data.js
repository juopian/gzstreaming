const carousels = [
  {
    img_url: '/res/slider1.jpeg',
    text: '说明111111'
  }, {
    img_url: '/res/slider2.jpeg',
    text: '说明111111'
  }, {
    img_url: '/res/slider3.jpeg',
    text: '说明111111'
  }
]

const midbar_img_url = '/res/middle.png'
const video_url = 'https://vali-dns.cp31.ott.cibntv.net/67740BB479D3F71A492DA510C/03000808005F5F10F87F877F58A228A6A4456A-2A82-46B0-AC3D-F585E364F964.mp4?ccode=0501&duration=390&expire=18000&psid=e954619e0cd03cb42c0f7c8fb45630ce43f2d&ups_client_netip=23ecb39c&ups_ts=1600415654&ups_userid=&utid=4vXXF2hQqmgCAXcgY5qFsoOe&vid=XNDg1Njc0NjQ0NA&vkey=Be2fc2b45c0c3d38aff08758730e125d2&eo=0&rid=200000001B043CF66E09DE0414D8FDE1ACEE04F302000000&bc=2&dre=u17&si=45&dst=1'

const bottom_dataset = [
  {
    name: '云讲堂',
    icon : 'play',
    icon_color: 'red',
    video_list : [{
      img_url : '/res/dy1.jpeg',
      text: ''
    },{
      img_url : '/res/dy1.jpeg' ,
      text: ''
    },{
      img_url : '/res/dy1.jpeg' ,
      text: ''
    },{
      img_url : '/res/dy1.jpeg' ,
      text: ''
    },{
      img_url : '/res/dy1.jpeg' ,
      text: ''
    },{
      img_url : '/res/dy1.jpeg' ,
      text: ''
    }]
  }, {
    name: '慢直播',
    icon : 'bug',
    icon_color: 'yellow',
    video_list : [{
      img_url : '/res/dy2.jpeg',
      text: ''
    },{
      img_url : '/res/dy2.jpeg' ,
      text: ''
    }]
  }, {
    name: '文旅',
    icon : 'bus',
    icon_color: 'orange',
    video_list : [{
      img_url : '/res/dy3.jpeg',
      text: ''
    },{
      img_url : '/res/dy3.jpeg' ,
      text: ''
    },{
      img_url : '/res/dy3.jpeg' ,
      text: ''
    },{
      img_url : '/res/dy3.jpeg' ,
      text: ''
    },{
      img_url : '/res/dy3.jpeg' ,
      text: ''
    },{
      img_url : '/res/dy3.jpeg' ,
      text: ''
    }]
  }
]

exports.carousels = carousels
exports.midbar_img_url = midbar_img_url
exports.bottom_dataset = bottom_dataset
exports.video_url = video_url
