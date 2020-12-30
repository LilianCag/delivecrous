import React from 'react';
import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Cow3.css';

const Cow3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Delivecow</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <img src="assets/cow_3.jpg" />
        <h1><b>Vache Minecraft</b></h1>
        <h3>23.95€</h3>
        <p>
        Vache du très populaire jeu vidéo "Minecraft". <br />
        Disponible au prix de 23.95€, depuis que Microsoft ai racheté Mojang.
        </p>
      </IonContent>
    </IonPage>
  );
};

export default Cow3;
