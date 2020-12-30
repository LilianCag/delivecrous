import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  //IonIcon,
  //IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonToolbar,
  IonTitle,
  IonHeader,
  //IonTabButton,
  IonTabs,
  IonText,
  IonPage
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
//import { ellipse, square, triangle } from 'ionicons/icons';
import Home from './pages/Home';
import Cow1 from './pages/Cow1';
import Tab3 from './pages/Tab3';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        
        <IonRouterOutlet>
          <Route path="/home" component={Home} exact={true} />
          <Route path="/cow1" component={Cow1} exact={true} />
          <Route path="/" render={() => <Redirect to="/home" />} exact={true} />
        </IonRouterOutlet>
 
    
   
        <IonTabBar slot="bottom" color="grey"/>
     
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
