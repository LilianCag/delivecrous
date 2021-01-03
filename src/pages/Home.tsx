import React, {} from 'react';
import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCheckbox, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonGrid, IonCol, IonRow } from '@ionic/react';
import './Home.css';
import './Cow1'
import './Cart'
import { Plugins } from "@capacitor/core";

const { Storage } = Plugins;
const products = [false, false, false, false, false, false, false, false];

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
                  <img src="assets/cow_1.jpg" alt="cow_1" />
                  <IonCardContent>
                    28€
                  </IonCardContent>
                  <IonCheckbox class="CheckboxStyle" onIonChange={e => {
                    
                    UpdateCart(0);
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
                  <IonCheckbox class="CheckboxStyle" onIonChange={e => {
                    
                    UpdateCart(1);
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
                  <IonCheckbox class="CheckboxStyle" onIonChange={e => {
                    
                    UpdateCart(2);
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
                  <IonCheckbox class="CheckboxStyle" onIonChange={e => {
                    
                    UpdateCart(3);
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
                  <IonCardContent> 3€ </IonCardContent>
                  <IonCheckbox class="CheckboxStyle" onIonChange={e => {
                    
                    UpdateCart(4);
                  }}>
                  </IonCheckbox>
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
                  <IonCheckbox class="CheckboxStyle" onIonChange={e => {
                    
                    UpdateCart(5);
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
                  <IonCheckbox class="CheckboxStyle" onIonChange={e => {
                    
                    UpdateCart(6);
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
                  <IonCheckbox class="CheckboxStyle" onIonChange={e => {
                    
                    UpdateCart(7);
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

//Mise a jour du panier
async function UpdateCart(id: number) {
  if (products[id] === false)   //Si un objet est sélectionné, l'index correspondant dans le tableau passe à 'true', s'il est déselectionné, il passe à false
    products[id] = true;
  else
    products[id] = false;
  await Storage.set({ key: 'p', value: JSON.stringify(products) });   //On stocke un JSON pour l'envoyer à la page /cart
}