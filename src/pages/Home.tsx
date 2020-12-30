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
            <IonCardTitle>Vache lambda</IonCardTitle>
          </IonCardHeader>
          <img src="assets/cow_1.jpg" alt="cow_1"/>
          <IonCardContent>
           28€
            <IonCheckbox></IonCheckbox>
            
          </IonCardContent>
          

        </IonCard>



        <IonCard href="./Cow2">
          <IonCardHeader>
            <IonCardTitle>Vache sourire</IonCardTitle>
          </IonCardHeader>
          <img src="assets/cow_2.jpg" alt="cow_2"/>
          <IonCardContent>
            45€
          </IonCardContent>
          <IonCheckbox class="item-checkbox-right"></IonCheckbox>
        </IonCard>



        <IonCard href="./Cow3">
          <IonCardHeader>
            <IonCardTitle>Vache 3D</IonCardTitle>
          </IonCardHeader>
          <img src="assets/cow_3.jpg" alt="cow_3"/>
          <IonCardContent>
            4.90€
          </IonCardContent>
          <IonCheckbox class="item-checkbox-right"></IonCheckbox>
        </IonCard>

        <IonCard href="./Cow4">
          <IonCardHeader>
            <IonCardTitle>Vache en kit</IonCardTitle>
          </IonCardHeader>
          <img src="assets/vache_occasion.jpg" alt="cow_4"/>
          <IonCardContent>
            5€
          </IonCardContent>
          <IonCheckbox class="item-checkbox-right"></IonCheckbox>
        </IonCard>


        <IonCard href="./Milk1">
          <IonCardHeader>
            <IonCardTitle>Lait</IonCardTitle>
          </IonCardHeader>
          <img src="assets/milk_1.jpg" alt="milk_1"/>
          <IonCardContent>
            3€
          </IonCardContent>
          <IonCheckbox class="item-checkbox-right"></IonCheckbox>
        </IonCard>

        <IonCard href="./Milk2">
          <IonCardHeader>
            <IonCardTitle>Lait amélioré +1</IonCardTitle>
          </IonCardHeader>
          <img src="assets/milk_2.jpg" alt="milk_2"/>
          <IonCardContent>
            5€
          </IonCardContent>
          <IonCheckbox class="item-checkbox-right"></IonCheckbox>
        </IonCard>

        <IonCard href="./Milk3">
          <IonCardHeader>
            <IonCardTitle>Lait amélioré +2</IonCardTitle>
          </IonCardHeader>
          <img src="assets/milk_3.jpg"  alt="milk_3"/>
          <IonCardContent>
            8€
          </IonCardContent>
          <IonCheckbox class="item-checkbox-right"></IonCheckbox>
        </IonCard>

      </IonContent>
    </IonPage>
  );
};

export default Home;
