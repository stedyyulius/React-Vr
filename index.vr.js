import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  Image,
  VrButton,
} from 'react-vr';

export default class vision_vr extends React.Component {
  constructor(props){
    super(props)
    this.state={
      rooms: [{}],
      start: 0,
      limit: 2,
      space: 2,
      room: {},
      arrow: 0.4
    }
  }
  componentWillMount(){
    const rooms = [{
      name: '1',
      image: "https://firebasestorage.googleapis.com/v0/b/grayfox-dfa44.appspot.com/o/room360%2Fruang-kelas.jpeg?alt=media&token=979cfc01-f556-4f2b-a618-20b514b711d1"
    },{
      name: '2',
      image: 'http://www.lughertexture.com/spherical-hdri-360/spherical-360-interior-room-hdri/interior-hdri-36-2774/download'
    },{
      name: '4',
      image: "https://i.ytimg.com/vi/Hus6lQetb2Y/maxresdefault.jpg"
    },{
      name: '5',
      image: "https://i.ytimg.com/vi/1dxF6fEUms8/maxresdefault.jpg"
    }]

    this.setState({
      rooms: rooms,
      room: rooms[0]
    })
    console.log(this.state.rooms);
  }

  go(detail){
    this.setState({
      room: detail
    })
  }

  move(direction){
    if(direction === 'right'){
      this.setState({
        start: this.state.start + this.state.space,
        limit: this.state.limit + this.state.space
      })
    } else{
      this.setState({
        start: this.state.start - this.state.space,
        limit: this.state.limit - this.state.space
      })
    }
  }

  render() {
    return (
      <View>
      {(this.state.rooms.length > 0)
        ? <View>
            <Pano source={{uri:this.state.room.image}}/>
            {(this.state.limit < this.state.rooms.length)
              ? <View
                style={{
                    width: 0.1,
                    height: 0.1,
                    margin: 0.2,
                    transform: [{translate: [-0.92, 0.2, -3]},
                                {rotateX: 0},
                                {rotateY: 0}]}}>
                <VrButton onClick={()=>this.move('right')}>
                  <Image
                  source={{uri:'http://www.clker.com/cliparts/0/5/7/9/1195435734741708243kuba_arrow_button_set_2.svg.hi.png'}}
                  style={{
                    width: this.state.arrow,
                    height: this.state.arrow
                  }} />
                </VrButton>
                </View>
             : null
           }
           {(this.state.start !== 0)
             ? <View
               style={{
                   width: 0.1,
                   height: 0.1,
                   margin: 0.2,
                   transform: [{translate: [-2.5, 0.7, -3]},
                               {rotateX: 0},
                               {rotateY: 0}]}}>
               <VrButton onClick={()=>this.move('left')}>
                 <Image
                 source={{uri:'http://www.clker.com/cliparts/2/9/c/f/11954229651703455648kuba_arrow_button_set_1.svg.med.png'}}
                 style={{
                   width: this.state.arrow,
                   height: this.state.arrow
                 }} />
               </VrButton>
               </View>
            : null
           }
            {(this.state.rooms.slice(this.state.start,this.state.limit)).map((r,i)=>
              <View
              key={i}
              style={{
                  width: 0.8,
                  height: 0.8,
                  margin: 0.2,
                  transform: [{translate: [-2, 2, -3]},
                              {rotateX: 0},
                              {rotateY: 0}]}}>
              <VrButton onClick={()=>this.go(r)}>
                <Image
                source={{uri:r.image}}
                style={{
                  width: 1,
                  height: 1
                }} />
              </VrButton>
              </View>
            )}
            {/* <Text
              style={{
                backgroundColor: '#777879',
                fontSize: 0.8,
                fontWeight: '400',
                layoutOrigin: [0.5, 0.5],
                paddingLeft: 0.2,
                paddingRight: 0.2,
                textAlign: 'center',
                textAlignVertical: 'center',
                transform: [{translate: [3, 3, -3]},
                            {rotateX:0},
                            {rotateY:-30}],
              }}>
              {this.state.room.name}
            </Text> */}
          </View>
        : null
      }
      </View>
    );
  }
};

AppRegistry.registerComponent('vision_vr', () => vision_vr);
