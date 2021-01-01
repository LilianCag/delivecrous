import React from 'react';
import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Product.css';

const Milk2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle class="Title"> Delivecow</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent class="ProductText">
        <img src="assets/milk_2.jpg" />
        <h1><b>Lait amélioré +1</b></h1>
        <h3>5€</h3>
        <p>
          Santé : +3 <br/>
          Lait provenant des vaches transformé en beurre.
        </p>
      </IonContent>
    </IonPage>
  );
};

export default Milk2;
