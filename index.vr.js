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
    
    let id = location.href.split('?')[1].split('=')[1]
    let rooms = []
    switch (id) {
      case '1000': 
        rooms = [
          {
            name: '',
            image: 'https://firebasestorage.googleapis.com/v0/b/grayfox-dfa44.appspot.com/o/room360%2Findosat%2Fmall_1.jpg?alt=media&token=bff191dc-a1ec-47ea-a817-d614f148d8ff'
          },
          {
            name: '',
            image: 'https://firebasestorage.googleapis.com/v0/b/grayfox-dfa44.appspot.com/o/room360%2Findosat%2Forori_2.jpg?alt=media&token=62ff5fab-9462-4298-aa7c-1278643892cf'
          },
          {
            name: '',
            image: 'https://firebasestorage.googleapis.com/v0/b/grayfox-dfa44.appspot.com/o/room360%2Findosat%2Forori_3.jpg?alt=media&token=7c01cd8b-a0e8-429b-9387-a002fb4c4673'
          }
      ]
        break
      case '1001': 
        rooms = [
            {
              name: '',
              image: 'https://firebasestorage.googleapis.com/v0/b/grayfox-dfa44.appspot.com/o/room360%2Findosat%2Forori_1.jpg?alt=media&token=e822ddb5-8fdf-430b-a659-a4e47615e116'
            },
            {
              name: '',
              image: 'https://firebasestorage.googleapis.com/v0/b/grayfox-dfa44.appspot.com/o/room360%2Findosat%2Froom1_2.jpg?alt=media&token=cfe78188-7cdf-4c28-9874-0fe822d8d55b'
            },
            {
              name: '',
              image: 'https://firebasestorage.googleapis.com/v0/b/grayfox-dfa44.appspot.com/o/room360%2Findosat%2Froom1_3.jpg?alt=media&token=e2a19314-b460-4c69-8238-e28ed05de50f'
            }
        ]
        break
      case '1002': 
        rooms = [
            {
              name: '',
              image: 'https://firebasestorage.googleapis.com/v0/b/grayfox-dfa44.appspot.com/o/room360%2Findosat%2Froom1_3.jpg?alt=media&token=e2a19314-b460-4c69-8238-e28ed05de50f'
            },
            {
              name: '',
              image: 'https://firebasestorage.googleapis.com/v0/b/grayfox-dfa44.appspot.com/o/room360%2Findosat%2Fmall_2.jpg?alt=media&token=2e907896-de8e-415e-8ee4-e5fe72657591'
            },
            {
              name: '',
              image: 'https://firebasestorage.googleapis.com/v0/b/grayfox-dfa44.appspot.com/o/room360%2Findosat%2Fmall_3.jpg?alt=media&token=096c09ad-66b4-4943-9370-8afabb593de7'
            }
        ]
        break
      case '1003': 
        rooms = [
            {
              name: '',
              image: 'https://firebasestorage.googleapis.com/v0/b/grayfox-dfa44.appspot.com/o/room360%2Findosat%2Froom2_1.jpg?alt=media&token=3ba2eccd-099b-4c0c-88af-025c1076a906'
            },
            {
              name: '',
              image: 'https://firebasestorage.googleapis.com/v0/b/grayfox-dfa44.appspot.com/o/room360%2Findosat%2Froom2_2.jpg?alt=media&token=1c4aa340-d10f-407e-8e31-b8e6528651c3'
            },
            {
              name: '',
              image: 'https://firebasestorage.googleapis.com/v0/b/grayfox-dfa44.appspot.com/o/room360%2Findosat%2Froom2_3.jpg?alt=media&token=005d9e86-e13f-4f57-9e97-de3f6256cb16'
            }
        ]
        break
    }
    
    this.setState({
      rooms: rooms,
      room: rooms[0]
    })
    
    //split get
    //switchcase id 
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
                  source={{uri:'https://firebasestorage.googleapis.com/v0/b/grayfox-dfa44.appspot.com/o/room360%2F1195435734741708243kuba_arrow_button_set_2.svg.hi.png?alt=media&token=0b129d8d-66cf-4cb3-84a9-c0047fb27dc8'}}
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
                 source={{uri:'https://firebasestorage.googleapis.com/v0/b/grayfox-dfa44.appspot.com/o/room360%2F1195435734741708243kuba_arrow_button_set_2.svg.hi.png?alt=media&token=0b129d8d-66cf-4cb3-84a9-c0047fb27dc8'}}
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
