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
        <img src="assets/milk_4.jpg" />
        <h1><b>Lait amélioré +3</b></h1>
        <h3>12€</h3>
        <p>
          Santé : +8 <br/>
          Lait provenant des vaches transformé en fromage. <br/>
          En plus, c'est du comté.
        </p>
      </IonContent>
    </IonPage>
  );
};

export default Milk3;
