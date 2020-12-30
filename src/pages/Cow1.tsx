import React from 'react';
import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Cow1.css';

const Cow1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Delivecow</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <img src="assets/cow_1.jpg" />
        <h1><b>Vache standard</b></h1>
        <h3>28€</h3>
        <p>
          La vache est un bovidé domestique à cornes, femelle du taureau élevée principalement pour ses qualités reproductrice et laitière.
        </p>
      </IonContent>
    </IonPage>
  );
};

export default Cow1;
