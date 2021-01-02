import React, { useCallback, useState } from 'react';
import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonLabel, IonItem, IonInput, IonGrid, IonCol, IonRow, IonList, IonThumbnail } from '@ionic/react';
import './Cart.css';
import './Home.tsx';
import { Plugins } from "@capacitor/core";

const listproducts = [false, false, false, false, false, false, false, false];
let total = 0;

const { Storage } = Plugins;
const Cart: React.FC = () => {
  const forceUpdate = useForceUpdate();
  ShowCart();
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle class="Title">Delivecow</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent class="PageStyle">
        <IonLabel class="TitleStyle"> Adresse de livraison</IonLabel>

        <form id="adress">
          <IonItem class="InputStyle">
            <IonLabel>Rue :</IonLabel>
            <IonInput type="text" required name="street" id="street" placeholder="1 rue Jean Jaurès"></IonInput>
          </IonItem>
          <IonGrid>
            <IonRow class="InputStyle2">
              <IonCol>
                <IonItem>
                  <IonLabel>Ville :</IonLabel>
                  <IonInput type="text" required name="city" id="city" placeholder="Valenciennes" ></IonInput>
                </IonItem>
              </IonCol>
              <IonCol>
                <IonItem>
                  <IonLabel>CP :</IonLabel>
                  <IonInput type="number" required name="postalcode" id="postalcode" placeholder="59300"></IonInput>
                </IonItem>
              </IonCol>
            </IonRow>
          </IonGrid>

          <br />
          <IonButton class="ButtonStyle" onClick={forceUpdate}>Rafraîchir le panier</IonButton>
          <br />

          <IonList>
            {listproducts[0] === true &&
              <IonItem>
                <IonThumbnail> <img src="assets/cow_1.jpg"  alt=""/></IonThumbnail>
                <IonLabel class="ListTitle">Vache standard</IonLabel>
                <IonLabel class="ListPrice">28€</IonLabel>
              </IonItem>
            }

            {listproducts[1] === true &&
              <IonItem>
                <IonThumbnail> <img src="assets/cow_2.jpg"  alt=""/></IonThumbnail>
                <IonLabel class="ListTitle">Vache sourire</IonLabel>
                <IonLabel class="ListPrice">45€</IonLabel>
              </IonItem>
            }
 
            {listproducts[2] === true &&
              <IonItem>
                <IonThumbnail> <img src="assets/cow_3.jpg"  alt=""/></IonThumbnail>
                <IonLabel class="ListTitle">Vache Minecraft</IonLabel>
                <IonLabel class="ListPrice">23.95€</IonLabel>
              </IonItem>
            }

            {listproducts[3] === true &&
              <IonItem>
                <IonThumbnail> <img src="assets/vache_occasion.jpg"  alt=""/></IonThumbnail>
                <IonLabel class="ListTitle">Vache en kit</IonLabel>
                <IonLabel class="ListPrice">5€</IonLabel>
              </IonItem>
            }

            {listproducts[4] === true &&
              <IonItem>
                <IonThumbnail> <img src="assets/milk_1.jpg"  alt=""/></IonThumbnail>
                <IonLabel class="ListTitle">Lait</IonLabel>
                <IonLabel class="ListPrice">3€</IonLabel>
              </IonItem>
            }

            {listproducts[5] === true &&
              <IonItem>
                <IonThumbnail> <img src="assets/milk_2.jpg"  alt=""/></IonThumbnail>
                <IonLabel class="ListTitle">Lait amélioré +1</IonLabel>
                <IonLabel class="ListPrice">5€</IonLabel>
              </IonItem>
            }

            {listproducts[6] === true &&
              <IonItem>
                <IonThumbnail> <img src="assets/milk_3.jpg"  alt=""/></IonThumbnail>
                <IonLabel class="ListTitle">Lait amélioré +2</IonLabel>
                <IonLabel class="ListPrice">8€</IonLabel>
              </IonItem>
            }

            {listproducts[7] === true &&
              <IonItem>
                <IonThumbnail> <img src="assets/milk_4.jpg"  alt=""/></IonThumbnail>
                <IonLabel class="ListTitle">Lait amélioré +3</IonLabel>
                <IonLabel class="ListPrice">12€</IonLabel>
              </IonItem>
            }
          </IonList><br />
          <IonLabel class="TotalStyle">Total : {total}€</IonLabel><br /><br />
          <IonButton   onClick={buy} class="ButtonStyle">Acheter</IonButton>
        </form>
      </IonContent>
    </IonPage>
  );
};

export default Cart;


//Affichage du panier
async function ShowCart() {
  //Tableau des prix
  var prix = [28, 45, 23.95, 5, 3, 5, 8, 12]; 
  if ((await Storage.get({ key: 'p' })).value != null) { 
    //Récupération des données JSON   
    const temp = (await Storage.get({ key: 'p' }));
    const temp2 = JSON.parse(temp.value!);
    if (temp2 !== null) { 
      total = 0;
      for (let i = 0; i < 8; i++) {
        if (listproducts[i] !== temp2[i]) {
          listproducts[i] = temp2[i];
        }
        //Calcul du total
        if (listproducts[i] === true) {
          total = total + prix[i];
        }
      }
    }
  }
  
}

//Fonction Achat
function buy() {

  //Récupération des valeurs des input de la rue, de la ville et du code postal
  var street = document.getElementsByTagName("input")[0].value;
  var city = document.getElementsByTagName("input")[1].value;
  var postalcode = document.getElementsByTagName("input")[2].value;

  for (let i = 0; i < 8; i++) {

    //Vérification si le panier est vide & si le 
    if (listproducts[i] === true && street !== "" && city !== "" && postalcode !== "") {         
      deleteCart();                         //Le panier est repassé à false
      document.location.href = "/finish";   //Redirection vers la page /finish
    }
  }
}

//Suppression du panier
async function deleteCart() {
  for (let i = 0; i < 8; i++) {
    listproducts[i] = false;
  }
  await Storage.set({ key: 'p', value: JSON.stringify(listproducts) });

}

//Force la mise a jour de l'affichage de la page
function useForceUpdate() {
  const [, setTick] = useState(0);
  const update = useCallback(() => {
    setTick(tick => tick + 1);
  }, [])
  return update;
}

