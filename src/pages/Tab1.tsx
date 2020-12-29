import React from 'react';
import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (

    
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Vaches</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>

      <IonCard>
        <IonCardHeader>
          <IonCardTitle>Vache n°1</IonCardTitle>
        </IonCardHeader>
        <img src="assets/cow_1.jpg"/>
        <IonCardContent>
          Meuh
        </IonCardContent>
      </IonCard>

        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large"></IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 1 page" />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
