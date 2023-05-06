import React , { useState} from "react"; import './Home.css';
import  { IonContent, IonInput, IonItem, IonLabel,IonButton, IonPage ,IonToolbar,IonCheckbox,IonTitle} from '@ionic/react';
import { Icon } from '@iconify/react';

const Signup: React.FC =() => {
  const[email, setemail] =useState('');
  const[password,setPassword]=useState('');
  const Signup = () => {

  };
  return(
    <IonPage>
      <IonContent>
      <IonToolbar>
        <IonTitle color="primary" font-size="30px">Sign Up</IonTitle>
      </IonToolbar>
        <div className="LOGIN FORM ">
       <IonItem> 
          <Icon icon ="ion:mail-outline" font-size="20px"/>
          <IonLabel/><IonInput  placeholder= "email" type="text" value={email} onIonChange={(e) => setemail(e.detail.value!)}></IonInput></IonItem>

      <IonItem>
        <Icon icon ="ion:lock-closed-outline" font-size="20px"/>
          <IonLabel></IonLabel>
          <IonInput placeholder="password" type="password" value={password} onIonChange={(e) => setPassword(e.detail.value!)}></IonInput></IonItem>
          <h5>Forgot Password?</h5>
          <IonCheckbox>Remember Me</IonCheckbox>

         </div>
         <IonButton size="default" type="submit" shape="round" expand="block" >Login</IonButton>

      </IonContent>         

    </IonPage>
  );

};
export default Signup;




































































// import { IonContent, IonInput, IonItem, IonLabel, IonPage, IonButton } from '@ionic/react';
// import React, { useState } from 'react';
// import './home.css';

// const Signup: React.FC = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');

//   const handleSignup = () => {
//   };

//   return (
//     <IonPage>
//       <IonContent>
//         <div className="signup-form"><h1>SignUp Form</h1> 
//           <IonItem>
//             <IonLabel position="floating">Full Name</IonLabel>
//             <IonInput type="text" value={name} onIonChange={(e) => setName(e.detail.value!)} />
//           </IonItem>
//           <IonItem>
//             <IonLabel position="floating">Email Address</IonLabel>
//             <IonInput type="email" value={email} onIonChange={(e) => setEmail(e.detail.value!)} />
//           </IonItem>
//           <IonItem>
//             <IonLabel position="floating">Password</IonLabel>
//             <IonInput type="password" value={password} onIonChange={(e) => setPassword(e.detail.value!)} />
//           </IonItem>
//           <IonItem>
//             <IonLabel position="floating">Confirm Password</IonLabel>
//             <IonInput type="password" value={confirmPassword} onIonChange={(e) => setConfirmPassword(e.detail.value!)} />
//           </IonItem>
//           <IonButton expand="block" size="small" color="success"   shape="round" onClick={handleSignup}>Sign Up</IonButton>
          
//         </div>
//       </IonContent>
//     </IonPage>
//   );
// };

// export default Signup;
































// // // import { IonContent, IonPage, IonText, IonInput, IonButton, IonCheckbox, IonItem, IonLabel } from "@ionic/react";
// // // import React from "react";
// // // import "./Home.css";
// // // import { useForm } from "react-hook-form";
// // // import Input, { InputProps } from "../Input";


// // // const Home: React.FC = () => {
// // //   const { control, handleSubmit } = useForm();
  
// // //   const formFields: InputProps[] = [
// // //     {
// // //       name: "email",
// // //       component: <IonInput type="email" />,
// // //       label: "Email",
// // //     },
// // //     {
// // //       name: "fullName",
// // //       label: "Full Name",
// // //     },
// // //     {
// // //       name: "password",
// // //       component: <IonInput type="password" clearOnEdit={false} />,
// // //       label: "Password",
// // //     },
// // //   ];

// // //   const registerUser = () => {
// // //     console.log("creating a new user account with: ", );
// // //   };

// // //   return (
// // //     <IonPage>
// // //       <IonContent>
// // //         <div className="ion-padding">
// // //           <IonText color="muted">
// // //             <h2>Create Account</h2>
// // //           </IonText>
// // //           <form onSubmit={handleSubmit(registerUser)}>
// // //             {formFields.map((field, index) => (
// // //               <Input {...field} control={control} key={index} />
// // //             ))}
// // //             <IonItem>
// // //               <IonLabel>I agree to the terms of service</IonLabel>
// // //               <IonCheckbox slot="start" />
// // //             </IonItem>
// // //             <IonButton expand="block" type="submit" className="ion-margin-top">
// // //               Register
// // //             </IonButton>
// // //           </form>
// // //         </div>
// // //       </IonContent>
// // //     </IonPage>
// // //   );
// // // };

// // // export default Home;


// // import React from 'react';
// // import { IonButton, IonInput } from '@ionic/react';

// // const LoginPage = () => {
// //   const [username, setUsername] = React.useState('');
// //   const [password, setPassword] = React.useState('');

// //   const handleLogin = () => {
// //     console.log(`Logging in with username: ${username} and password: ${password}`);
// //   };

// //   return (
// //     <StyledPage>
// //       <StyledForm>
// //         <StyledHeader>Login Form</StyledHeader>
// //         <StyledInput type="text" placeholder="Username" value={username} onIonChange={e => setUsername(e.detail.value!)}></StyledInput>
// //         <StyledInput type="password" placeholder="Password" value={password} onIonChange={e => setPassword(e.detail.value!)}></StyledInput>
// //         <StyledButton onClick={handleLogin}>Log in</StyledButton>
// //       </StyledForm>
// //     </StyledPage>
// //   );
// // };

// // const StyledPage = styled.div`
// //   display: flex;
// //   justify-content: center;
// //   align-items: center;
// //   height: 100%;
// //   background-color: #f0f0f0;
// // `;

// // const StyledForm = styled.div`
// //   display: flex;
// //   flex-direction: column;
// //   align-items: center;
// //   padding: 20px;
// //   border-radius: 10px;
// //   background-color: #fff;
// // `;

// // const StyledHeader = styled.h1`
// //   margin-bottom: 20px;
// //   font-size: 24px;
// // `;

// // const StyledInput = styled(IonInput)`
// //   margin-bottom: 10px;
// //   width: 100%;
// // `;

// // const StyledButton = styled(IonButton)`
// //   margin-top: 20px;
// //   width: 100%;
// // `;

// // export default styled;
