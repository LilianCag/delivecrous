import React from 'react';
import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Milk3.css';

const Milk3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Delivecow</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <img src="assets/milk_3.jpg" />
        <h1><b>Lait amélioré +2</b></h1>
        <h3>8€</h3>
        <p>
          Santé : +5 <br/>
          Lait provenant des vaches transformé en fromage. <br/>
          En plus, c'est du comté.
        </p>
      </IonContent>
    </IonPage>
  );
};

export default Milk3;
