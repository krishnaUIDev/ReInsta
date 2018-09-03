// import React, { Component } from 'react'

// class App extends Component {
//   render () {
//     const task = ['1', '2', '423', '234']
//     const spread = [...task]
//     const filterdData = spread.filter(data => {
//       return data > 2
//     })
//     const element = filterdData.map((data, l) => <div key={l}> {data} </div>)
//     return (
//       <div>
//         {element}
//       </div>
//     )
//   }
// }

// export default App

import React, { Component } from 'react'
import Title from './Title'
import List from './List'
class App extends Component {
  render () {
    return (
      <div>
        <Title title={'Header'} />
        <List tasks={['te']} />
      </div>
    )
  }
}

export default App
