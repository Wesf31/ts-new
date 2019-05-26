import React, { Component } from 'react';
import router from './router/router'

// const App: React.FC = () => {
//   return (
//     <div>
//       { router }
//     </div>
//   );
// }

// export default App;

class App extends Component {
  render() {
    return (
      <div>
        { router }
      </div>
    )
  }

}