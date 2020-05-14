import React from 'react';
import {IonButton,IonRow,IonCol, IonIcon} from '@ionic/react';
import {calculatorOutline,refreshCircleOutline} from 'ionicons/icons';

const BmiControllers:  React.FC<{onCalculate: () => void; onReset: ()=> void}> = props => {
    return (
        <IonRow>
        <IonCol className="ion-text-left">
          <IonButton onClick={props.onCalculate}><IonIcon slot="start" icon={calculatorOutline}></IonIcon>Calculate</IonButton>
        </IonCol>
        <IonCol className="ion-text-right">
          <IonButton onClick={props.onReset}><IonIcon slot="start" icon={refreshCircleOutline} />Reset</IonButton>
        </IonCol>
      </IonRow>

    )

}

export default BmiControllers;