import React from 'react';
import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Cart.css';
import './Home.tsx';

const Cart: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Delivecow</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <h1><b>Vos articles</b></h1>
        


      </IonContent>
    </IonPage>
  );
};

export default Cart;

function ShowCart(product: string, price: number){
  console.log(product+" "+price+"€ affiché dans le panier.");
}