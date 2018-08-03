# Medico App

## What's the issue and how does Medico solve it?

Medico aims to reduce the time required to reach the doctor. It all starts by scanning the Barcode that that Ha’aj has as a breaclete. This breaclete countaines the medical record of the patient and details about them such as the gender, if they are diabetic or have high blood pressure and the list goes on.
This will automatically creates a profile for the patient with all the required medical details and he will have the option to pick their preferred language. 

Afterwards, the patient will have to answer some questions driven by the chatbot, and then connect him immediately to any available doctor to treat him, and if a prescription required it will be saved automatically in the dashboard where the patient can take to the pharmacy and get the medicine he needs. 

Because of this process, Medico has tackled several problems during hajj period. 
To start with, Medico solves the issue of the require of transportation to the medical facility unless there is emergency requirece seeing the doctor. Therefore, it saves time for both the patient and the doctor and reduce the traffic that is result of the want to see a doctor for an un-urgent case. 

Secondly, it is easy, reliable and accessible for the majority who have smartphones. 
Third, it gives an opportunity for the health facilities during Hajj time focus more on the urgent cases that require a sophisticated treatments. And by this it reduces the pressure on the medical equipments. 

The second feature of this application is for the emergencies. 
There is only one step to reach a doctor during emergencies by one click only in the app. When someone requests the emergency line it will automatically locate the caller on the map, which allows the emergency department send their location to the nearest medical staff or hospital. This feature solves another major problem, because many life losses happened due to the delay to reach the person who needs help due to the difficulty to locate them in the large crowd. This enhances the efficiency of the emergency department and may probably reduce the life losses. 

However, in the emergency segment there is an application that already exists in the market, called Asefni’i that is used specifically for the urgent cases. But the app lacks the location tracking as it only provides if there is internet connection. Moreover, our app as well as calling the emergency department, it notifies the nearest emergency team or hospital via sms.

## Inspiration
The idea came from considering the high demand during hajj time on the health sector facilities.
During this time people from everywhere will be all in one place which means higher risk of getting sick and spread infections which require an efficient method to provide patients with medical advice and prescription, if required,
saving effort, time and money. 

## What it does
The application will provide a quick and easy access to a qualified doctor from all around the world speaking different languages. The app will make use of the QR code that is available with every pligirm (bracelet). The doctor will provide a prescription after the diagnosing the patient which is sent by email or as a notification through the app. Patients can then take the perscription to a pharmacy to buy medications. Non-emergency situations are the main targeted cases. 
Adding an emergency calling features to enable pilgrims companions to perform first aid until emergency staff arrive with location allocation.

## How we built it
The app is built using the react-native framework in order to support a multitude of platforms without having to build separate native apps for each platform. The core video-calling functionality is implemented using the WebRTC javascript API and web sockets using Socket.io. The mobile app also utilizes Google's Firebase to store user data in the cloud. All the above mentioned libraries, tools and APIs are opensource and were available prior to the hackathon.

During the hackathon, an intuitive user interface has been designed using SketchApp which will be ported to the React app project. We are building QR code scanner which will be powered by the Expo Vision API to scan the pilgrim's e-bracelet. We will also simulate access to pilgrims' data from the Ministry of Hajj for the purposes of this hackathon. We are also building an electronic prescription system through which a doctor can issue a prescription to a user who will be able to access it through the app

## Challenges we ran into
During development we ran into a number of challenges. First, we had to setup the android build tools for our react project. Since the internet was not fast enough, it took long to download all the tools, and configure the environment variables. After we've completed that, we ran into an issue with the react-camera-native package, that did not allow us to build the app. Thus, we decided to switch to using the Google Cloud Vision API, and moved to the CRNA platform of react to speed up the development process.

## Accomplishments that we're proud of
Coming up with the idea of a booth where people can pop up and book an appointment with the doctor in a few minutes. Booths will target those who are less familiar with technology and/or illiterate. The application will be a direct connection between smart-phone users and doctors in non emergency cases. Member of technical team will be available on site to provide technical assistance.

## What's next
### Killing Feature
Using Speech To Text (STT) function with natural language processing, so the machine can learn from analysed data and then feed it to a virtual doctor chatbot that handle future assessment of patients after ensuring accuracy.
_ We care about privacy: Anonymization of patient and doctor identities _
