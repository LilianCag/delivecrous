import React from 'react';
import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Milk1.css';

const Milk1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Delivecow</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <img src="assets/milk_1.jpg" />
        <h1><b>Lait</b></h1>
        <h3>28€</h3>
        <p>Vache est le nom vernaculaire donné à la femelle du mammifère domestique de l'espèce Bos taurus, un ruminant appartenant à la famille des bovidés, généralement porteur de deux cornes sur le front.
        Les individus mâles sont appelés taureaux et les jeunes, veaux. Une génisse ou vachette, appelée aussi taure au Québec ou dans le Poitou, est une vache qui n'a pas vêlé. Descendant de plusieurs sous-espèces d'aurochs, les bovins actuels (zébus compris) sont élevés pour produire du lait et de la viande, ou comme animaux de trait. En Inde, la vache est sacrée. Le mot vache vient du latin vacca, de même sens.
        </p>
      </IonContent>
    </IonPage>
  );
};

export default Milk1;
