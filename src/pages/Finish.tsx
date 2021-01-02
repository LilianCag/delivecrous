import React from 'react';
import { IonButton, IonContent, IonHeader, IonLabel, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import './Finish.css';

const Finish: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Delivecow</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent class="FinishStyle">
        
        <IonLabel class="ThanksStyle">Merci pour votre achat !</IonLabel>
        <br /> <br /> <br />
        <IonText class="TextStyle">Vos vaches et vos produits laitiers vous seront envoyés sous peu par la poste.</IonText>
        <br /> <br /> <br />
        <IonButton class="ButtonFinishStyle" href="/home">Retour à l'accueil</IonButton>

      </IonContent>
    </IonPage>
  );
};

export default Finish;
