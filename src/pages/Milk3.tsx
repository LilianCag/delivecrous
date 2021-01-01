import React from 'react';
import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Product.css';

const Milk3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle class="Title">Delivecow</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent class="ProductText">
        <img src="assets/milk_3.jpg" />
        <h1><b>Lait amélioré +2</b></h1>
        <h3>8€</h3>
        <p>
          Santé : +5 <br/>
          Lait provenant des vaches transformé en yaourt nature.
        </p>
      </IonContent>
    </IonPage>
  );
};

export default Milk3;
