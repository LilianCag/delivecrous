import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Product.css';

const Cow1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle class="Title">Delivecow</IonTitle>
        </IonToolbar>
      </IonHeader>
      <img src="assets/cow_1.jpg" alt=""/>
      <IonContent class="ProductText">
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
