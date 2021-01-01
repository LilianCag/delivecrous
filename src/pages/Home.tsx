import React from 'react';
import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCheckbox, IonContent, IonHeader, IonItem, IonPage, IonTitle, IonToolbar, IonButton, IonList, IonLabel, IonToggle, IonGrid, IonCol, IonRow } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import './Cow1'
import './Cart'
import Cow1 from './Cow1';
import { logoWindows } from 'ionicons/icons';
import { JsxEmit } from 'typescript';

const form = [
  { val: 'cow1', isChecked: false},
]

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle class="Title">Delivecow</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
<IonList>
      <IonGrid>
        <IonRow>
          <IonCol>

          <IonCard href="./Cow1" class="CardStyle">
            <IonCardHeader>
              <IonCardTitle class="FontTitle">Vache standard</IonCardTitle>
            </IonCardHeader>
            <img src="assets/cow_1.jpg" alt="cow_1"/>
            <IonCardContent>
              28€
            </IonCardContent>
            <IonCheckbox class="CheckboxStyle" value="cow2" onIonChange={e => {
              if (e.detail.value == undefined) return;
              UpdateCart("cow1",28);
            }}></IonCheckbox>
            
          </IonCard>

          </IonCol>
          <IonCol>

          <IonCard href="./Cow2" class="CardStyle">
            <IonCardHeader>
              <IonCardTitle class="FontTitle">Vache sourire</IonCardTitle>
            </IonCardHeader>
            <img src="assets/cow_2.jpg" alt="cow_2" />
            <IonCardContent>
              45€
          </IonCardContent>
          <IonCheckbox class="CheckboxStyle" value="cow2" onIonChange={e => {
              if (e.detail.value == undefined) return;
              UpdateCart("Vache sourire",45);
            }}></IonCheckbox>
          </IonCard>

          </IonCol>
        </IonRow>

        <IonRow>
          <IonCol>

          <IonCard href="./Cow3" class="CardStyle">
            <IonCardHeader>
              <IonCardTitle class="FontTitle">Vache Minecraft</IonCardTitle>
            </IonCardHeader>
            <img src="assets/cow_3.jpg" alt="cow_3" />
            <IonCardContent>
              23.95€
          </IonCardContent>
          <IonCheckbox class="CheckboxStyle" value="cow3" onIonChange={e => {
              if (e.detail.value == undefined) return;
              UpdateCart("Vache Minecraft",23.95);
            }}></IonCheckbox>
          </IonCard>

          </IonCol>
          <IonCol>


          <IonCard href="./Cow4" class="CardStyle">
            <IonCardHeader>
              <IonCardTitle class="FontTitle">Vache en kit</IonCardTitle>
            </IonCardHeader>
            <img src="assets/vache_occasion.jpg" alt="cow_4" />
            <IonCardContent>
              5€
          </IonCardContent>
          <IonCheckbox class="CheckboxStyle" value="cow3" onIonChange={e => {
              if (e.detail.value == undefined) return;
              UpdateCart("Vache en kit",5);
            }}></IonCheckbox>
          </IonCard>

          </IonCol>
          </IonRow>
          <IonRow>
          <IonCol>
          <IonCard href="./Milk1" class="CardStyle">
            <IonCardHeader>
              <IonCardTitle class="FontTitle">Lait</IonCardTitle>
            </IonCardHeader>
            <img src="assets/milk_1.jpg" alt="milk_1" />
            <IonCardContent>
              3€
          </IonCardContent>
          <IonCheckbox class="CheckboxStyle" value="milk1" onIonChange={e => {
              if (e.detail.value == undefined) return;
              UpdateCart("Lait",3);
            }}></IonCheckbox>
          </IonCard>
          </IonCol>
          <IonCol>
          <IonCard href="./Milk2" class="CardStyle">
            <IonCardHeader>
              <IonCardTitle class="FontTitle">Lait amélioré +1</IonCardTitle>
            </IonCardHeader>
            <img src="assets/milk_2.jpg" alt="milk_2" />
            <IonCardContent>
              5€
          </IonCardContent>
          <IonCheckbox class="CheckboxStyle" value="milk2" onIonChange={e => {
              if (e.detail.value == undefined) return;
              UpdateCart("Lait amélioré+1",5);
            }}></IonCheckbox>
          </IonCard>
          </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
          <IonCard href="./Milk3" class="CardStyle">
            <IonCardHeader>
              <IonCardTitle class="FontTitle">Lait amélioré +2</IonCardTitle>
            </IonCardHeader>
            <img src="assets/milk_3.jpg" alt="milk_3" />
            <IonCardContent>
              8€
          </IonCardContent>
          <IonCheckbox class="CheckboxStyle" value="milk3" onIonChange={e => {
              if (e.detail.value == undefined) return;
              UpdateCart("Lait amélioré +2",8);
            }}></IonCheckbox>
          </IonCard>
          </IonCol>
          <IonCol>
          <IonCard href="./Milk4" class="CardStyle">
            <IonCardHeader>
              <IonCardTitle class="FontTitle">Lait amélioré +3</IonCardTitle>
            </IonCardHeader>
            <img src="assets/milk_4.jpg" alt="milk_4" />
            <IonCardContent>
              12€
          </IonCardContent>
          <IonCheckbox class="CheckboxStyle" value="milk4" onIonChange={e => {
              if (e.detail.value == undefined) return;
              UpdateCart("Lait amélioré +3",12);
            }}></IonCheckbox>
          </IonCard>
          </IonCol>
          </IonRow>
          </IonGrid>
          </IonList>
      </IonContent>
    </IonPage>
  );
};
export default Home;


function UpdateCart(product: string, price: number){
  console.log(product+" "+price+"€ ajouté au panier.");
  //ShowCart(product, price);
}