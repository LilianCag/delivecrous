import React from 'react';
import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Product.css';

const Cow2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle class="Title">Delivecow</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent class="ProductText">
        <img src="assets/cow_2.jpg" />
        <h1><b>Vache sourire</b></h1>
        <h3>45€</h3>
        <p>
          Vache qui sourit. <br />
          Et c'est très beau.
        </p>
      </IonContent>
    </IonPage>
  );
};

export default Cow2;
