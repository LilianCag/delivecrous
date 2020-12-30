import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { home, cart} from 'ionicons/icons';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Cow1 from './pages/Cow1';
import Cow2 from './pages/Cow2';
import Cow3 from './pages/Cow3';
import Cow4 from './pages/Cow4';
import Milk1 from './pages/Milk1';
import Milk2 from './pages/Milk2';
import Milk3 from './pages/Milk3';

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
          <Route path="/cart" component={Cart} exact={true} />
          <Route path="/cow1" component={Cow1} exact={true} />
          <Route path="/cow2" component={Cow2} exact={true} />
          <Route path="/cow3" component={Cow3} exact={true} />
          <Route path="/cow4" component={Cow4} exact={true} />
          <Route path="/milk1" component={Milk1} exact={true} />
          <Route path="/milk2" component={Milk2} exact={true} />
          <Route path="/milk3" component={Milk3} exact={true} />
          <Route path="/" render={() => <Redirect to="/home" />} exact={true} />
        </IonRouterOutlet>
 
    
   
        <IonTabBar slot="bottom">
          <IonTabButton tab="Home" href="/home">
            <IonIcon icon={home} />
            <IonLabel>Accueil</IonLabel>
          </IonTabButton>
          <IonTabButton tab="Cart" href="/cart">
            <IonIcon icon={cart} />
            <IonLabel>Panier</IonLabel>
          </IonTabButton>
        </IonTabBar>
     
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
