import React, { Component } from 'react'
import Title from './Title'
import Photowall from './PhotoWall'

const posts = [
  {
    id: '0',
    title: 'beautiful landscape',
    description: 'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.',
    imageLink: 'https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4eeacaa2dbf12d6d/version/1490299332/most-beautiful-landscapes-in-europe-lofoten-european-best-destinations-copyright-iakov-kalinin.jpg' +
      '3919321_1443393332_n.jpg'
  },
  {
    id: '1',
    title: 'Aliens???',
    description: 'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.',
    imageLink: 'https://img.purch.com/rc/640x415/aHR0cDovL3d3dy5zcGFjZS5jb20vaW1hZ2VzL2kvMDAwLzA3Mi84NTEvb3JpZ2luYWwvc3BhY2V4LWlyaWRpdW00LWxhdW5jaC10YXJpcS1tYWxpay5qcGc=' +
      '08323785_735653395_n.jpg'
  },
  {
    id: '2',
    title: 'On a vacation!',
    description: 'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.',
    imageLink: 'https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/08/24/104670887-VacationExplainsTHUMBWEB.1910x1000.jpg'
  }
]

class App extends Component {
  render () {
    return (
      <div>
        <Title title={'ReInsta'} />
        <Photowall posts={posts} />
      </div>
    )
  }
}

export default App
