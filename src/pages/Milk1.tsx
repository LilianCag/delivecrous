import React from 'react';
import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Milk1.css';

const Milk1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Delivecow</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <img src="assets/milk_1.jpg" />
        <h1><b>Lait</b></h1>
        <h3>3€</h3>
        <p>
          Santé : +1 <br/>
          Breuvage provenant des vaches.
        </p>
      </IonContent>
    </IonPage>
  );
};

export default Milk1;
