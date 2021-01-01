import React from 'react';
import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Product.css';

const Cow4: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle class="Title">Delivecow</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent class="ProductText">
        <img src="assets/vache_occasion.jpg" />
        <h1><b>Vache en kit</b></h1>
        <h3>5€</h3>
        <p>J'espère sincèrement que vous n'êtes pas vegan, sinon ma note en pâtir.</p>
      </IonContent>
    </IonPage>
  );
};

export default Cow4;
