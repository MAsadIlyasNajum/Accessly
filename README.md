# 📱 User Authentication App

A **multilingual React Native app** featuring **user authentication**, **theme switching (Light / Dark / System)**, and **persistent storage** — built using **React Context API**, **AsyncStorage**, and **React Navigation**.

---

## 🎯 Project Objective

This app was created as part of an assignment with the following goals:

> **Create a React Native Authentication Flow** using **Context API** to manage global state.

### ✅ Requirements Implemented

- Login & Signup Screens with Validations  
- Authentication stored globally using **React Context**  
- Persistent login using **AsyncStorage**  
- Navigation using **React Navigation**  
- Elegant UI with reusable components  
- Password visibility toggle  
- 🎁 **Bonus:**  
  - ✅ **Multilingual Support** (English 🇬🇧 / Bahasa Malaysia 🇲🇾)  
  - ✅ **Theme Support** (Light / Dark / System-based auto-selection)  

---

## 🚀 Features

| Feature | Description |
|---------|-------------|
| 🔐 Authentication | Login / Signup / Logout using Context API |
| 📦 Persistent Storage | Authentication & preferences stored using AsyncStorage |
| 🌗 Dark / Light Theme | System default with manual toggle |
| 🌍 Multilingual Support | English & Bahasa Malaysia |
| 👁️ Password Visibility | Show/hide password input |
| 🧭 Navigation | React Navigation (Stack-based flow) |
| 🎨 Reusable Components | Custom Input, Button, Text, Header, StatusBar |

---

## 🛠 Tech Stack

| Category | Technology |
|----------|------------|
| Framework | React Native CLI |
| Language | TypeScript |
| State Management | React Context API |
| Storage | AsyncStorage |
| Navigation | React Navigation |
| Internationalization | i18next |
| Icons | React Native Vector Icons |

---


---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
https://github.com/MAsadIlyasNajum/Accessly.git
cd Accessly
```

### 2️⃣ Install Dependencies

```bash

npm install

```

### 3️⃣ Install iOS Pods

```bash

cd ios && pod install && cd ..

```

### ▶️ Running the App

#### ✅ Android (Development)
```bash

npm run android
# OR
npx react-native run-android

```

#### ✅ IOS (Development)
```bash

npm run ios

```


### 📦 Production Build

```bash

cd android && ./gradlew clean && cd ..

cd android && ./gradlew assembleRelease && cd ..


```



## 🖼 Screenshots

<table>
  <tr>
    <td><img src="https://github-production-user-asset-6210df.s3.amazonaws.com/33259757/497563855-7b798f2d-06c3-4f24-a8db-32728c5874a9.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20260119%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20260119T152654Z&X-Amz-Expires=300&X-Amz-Signature=384648f8405cce2086db8486cc408d88f1814e2bc54f40c571278fa39fafbb3a&X-Amz-SignedHeaders=host" width="250"/></td>
    <td><img src="https://github-production-user-asset-6210df.s3.amazonaws.com/33259757/497563853-33d80e86-5f98-4b26-ab6f-8553d96f51f1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20260119%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20260119T153121Z&X-Amz-Expires=300&X-Amz-Signature=e398c3686af982e754f38996c055bebc75640de122fb10426855a276e938beb4&X-Amz-SignedHeaders=host" width="250"/></td>
    <td><img src="https://github-production-user-asset-6210df.s3.amazonaws.com/33259757/497563851-e5d01139-379e-46cf-87aa-83afa5584247.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20260119%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20260119T153126Z&X-Amz-Expires=300&X-Amz-Signature=2c4dfeffebe3ff3b64182c7b716a12cd4d508727fc8717126ed44c052e7e6de8&X-Amz-SignedHeaders=host" width="250"/></td>
  </tr>
  <tr>
    <td><img src="https://github-production-user-asset-6210df.s3.amazonaws.com/33259757/497563847-fbf3abfb-a96e-47d6-a753-02edf21e1024.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20260119%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20260119T153128Z&X-Amz-Expires=300&X-Amz-Signature=df059790f91f975b63291ec0100b779e09446d2e1563a7a819df9936695762d1&X-Amz-SignedHeaders=host" width="250"/></td>
    <td><img src="https://github-production-user-asset-6210df.s3.amazonaws.com/33259757/497563846-1228a570-01aa-4095-bec4-3a32ec2f80f3.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20260119%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20260119T153130Z&X-Amz-Expires=300&X-Amz-Signature=2d047b75630db2926e503c5af3795368e9475909c66570dcf79fc5b5fb9f05be&X-Amz-SignedHeaders=host" width="250"/></td>
    <td><img src="https://github-production-user-asset-6210df.s3.amazonaws.com/33259757/497563845-89dddf3f-b9d9-4e45-9e95-d08ee435f204.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20260119%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20260119T153131Z&X-Amz-Expires=300&X-Amz-Signature=59862caa4bcd2c38bb8b87166cf0376d2a78d5544de2bb32ab2e8f1e13517f0b&X-Amz-SignedHeaders=host" width="250"/></td>
  </tr>
  <tr>
    <td><img src="https://github-production-user-asset-6210df.s3.amazonaws.com/33259757/497563842-2ba609ff-16b6-4a9b-9602-770ccb317c9d.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20260119%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20260119T153133Z&X-Amz-Expires=300&X-Amz-Signature=9627e383fd60f1c28790a11e3bb00973532fe0a3fe236c42c8ebd02598276e6a&X-Amz-SignedHeaders=host" width="250"/></td>
    <td><img src="https://github-production-user-asset-6210df.s3.amazonaws.com/33259757/497563839-01bcad0e-6b76-4a82-9551-b16789ac1dda.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20260119%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20260119T153135Z&X-Amz-Expires=300&X-Amz-Signature=c7a2d76e7e540a8d9eb8016b3bf594cf96e1a6f3539a9098bafb3ed7fbaa0f1e&X-Amz-SignedHeaders=host" width="250"/></td>
    <td><img src="https://github-production-user-asset-6210df.s3.amazonaws.com/33259757/497563836-59b7966a-6584-4de3-84ec-f824380f40d6.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20260119%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20260119T153136Z&X-Amz-Expires=300&X-Amz-Signature=dae77554cb449ef3bb8d2f5483068a0c288f03127586a7862960922901dec96a&X-Amz-SignedHeaders=host" width="250"/></td>
  </tr>
  <tr>
    <td><img src="https://github-production-user-asset-6210df.s3.amazonaws.com/33259757/497563833-f407651b-5218-48e0-b9c7-481fd7a20404.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20260119%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20260119T153139Z&X-Amz-Expires=300&X-Amz-Signature=cd163a1d8928f9a627c1744eaaac4807d09ca3da98376fab5a23183812633732&X-Amz-SignedHeaders=host" width="250"/></td>
    <td><img src="https://github-production-user-asset-6210df.s3.amazonaws.com/33259757/497563829-457ca1cb-1b3d-4f42-9bcf-6120b1e79ef2.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20260119%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20260119T153140Z&X-Amz-Expires=300&X-Amz-Signature=a6057abce41a4519d90d854cb0b0b4a23e5214d77d8a630c3d0870dd94a716da&X-Amz-SignedHeaders=host" width="250"/></td>
    <td><img src="https://github-production-user-asset-6210df.s3.amazonaws.com/33259757/497563828-be3e722f-797b-43fd-9785-d7f72c552d6d.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20260119%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20260119T153141Z&X-Amz-Expires=300&X-Amz-Signature=d30ecd87bc398cc98e546ec6e31b36414c8f8c7e60074f13b561c57cf45c8dce&X-Amz-SignedHeaders=host" width="250"/></td>
  </tr>
  <tr>
    <td><img src="https://github-production-user-asset-6210df.s3.amazonaws.com/33259757/497563813-faafd736-f955-4272-8278-3fc1ecd418b4.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20260119%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20260119T153144Z&X-Amz-Expires=300&X-Amz-Signature=3b78ee25dcb4f4d980d870f8712bf578a01377cb3cabe818e66c814df71bf501&X-Amz-SignedHeaders=host" width="250"/></td>
  </tr>
</table>
# Accessly
