import React from 'react';
import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCheckbox, IonContent, IonHeader, IonItem, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import './Cow1'

const Home: React.FC = () => {
  return (

    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Delivecow</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>

        <IonCard href="./Cow1">
          <IonCardHeader>
            <IonCardTitle>Vache n°1</IonCardTitle>
          </IonCardHeader>
          <img src="assets/cow_1.jpg"/>
          <IonCardContent>
            Meuh
          </IonCardContent>
          <IonCheckbox class="item-checkbox-right"></IonCheckbox>
        
        </IonCard>
 


        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Vache n°2</IonCardTitle>
          </IonCardHeader>
          <img src="assets/cow_2.jpg"/>
          <IonCardContent>
            Meuh
          </IonCardContent>
          <IonCheckbox class="item-checkbox-right"></IonCheckbox>
        </IonCard>
     

    
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Vache n°3</IonCardTitle>
          </IonCardHeader>
          <img src="assets/cow_3.jpg"/>
          <IonCardContent>
            Meuh
          </IonCardContent>
          <IonCheckbox class="item-checkbox-right"></IonCheckbox>
        </IonCard>
 


       
      </IonContent>
    </IonPage>
  );
};

export default Home;
