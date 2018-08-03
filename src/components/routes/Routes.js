import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Scan from '../scan/Scan.js'
import RestOfApp from '../restofapp/RestOfApp'


const Routes = () => (
  <Router>
    <Scene key="root">
      <Scene key="scan" component={Scan} title="Scan" hideNavBar={true} initial={true} />
      <Scene key="restofapp" component={RestOfApp} title="" hideNavBar={true} />
    </Scene>
  </Router>
)
export default Routes;