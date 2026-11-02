# 🩺 VitaBot
### Empowering You with Health Awareness

VitaBot is a responsive, single-page web application built using **React and TypeScript** that provides users with accessible health awareness and educational information through an interactive chatbot, disease reference guides, and wellness tips.

The platform aims to make general health information easier to understand and access through a simple, user-friendly interface.

> ⚠️ **Disclaimer:** HealthAI Chat is designed for educational and awareness purposes only. It is not a medical diagnostic tool and does not replace professional medical advice, diagnosis, or treatment.

---

## ✨ Features

- 🏠 **Home:** Landing page introducing the platform and its purpose.
- ℹ️ **About:** Explains the platform's mission, objectives, and approach to health awareness.
- 🤖 **Interactive Chatbot:** A rule-based conversational assistant that provides predefined educational responses to common health-related questions.
- 🦠 **Disease Information:** Reference cards covering causes, symptoms, and prevention methods for common health conditions.
- 📝 **Health Tips & Blog:** Informative articles and daily tips related to nutrition, physical activity, mental wellness, hydration, and healthy living.
- 📬 **Contact:** Feedback form for questions, suggestions, and issue reports.
- 📱 **Responsive Design:** Mobile-friendly interface with responsive navigation and layouts.

---

## 🤖 Chatbot Functionality

The HealthAI Chatbot uses a **rule-based keyword-matching mechanism** to process user messages and generate predefined responses.

### Supported Topics

- Malaria
- Dengue
- Diabetes
- COVID-19
- Influenza (Flu)
- General symptoms
- Disease prevention
- Health awareness
- Greetings and basic conversations

### How It Works

1. The user enters a health-related question.
2. The chatbot checks the message for predefined keywords.
3. It identifies the matching topic.
4. It displays a predefined educational response.

**Note:** The chatbot does not use an external AI API or machine learning model. All responses are predefined and processed on the client side. Its answers are limited to the topics programmed into the application.

---

## 🦠 Disease Reference Guide

| Disease | Information Covered |
|---|---|
| Malaria | Causes, symptoms, and prevention |
| Dengue | Causes, symptoms, and prevention |
| Diabetes | Types, symptoms, and management awareness |
| COVID-19 | Symptoms and preventive measures |
| Influenza | Common symptoms and prevention |
| Hypertension | Risk factors and health awareness |

---

## 🛠️ Technology Stack

| Category | Technology |
|---|---|
| Frontend Framework | React 18 |
| Programming Language | TypeScript |
| Build Tool | Vite |
| Styling | Tailwind CSS |
| Icons | Lucide React |
| Code Quality | ESLint |
| Type Checking | TypeScript ESLint |

---

## 📂 Project Structure

```text
HealthAI-Chat/
│
├── public/
│   └── (Static assets and public files)
│
├── src/
│   │
│   ├── assets/
│   │   └── (Images, illustrations, and other assets)
│   │
│   ├── components/
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   │
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Chatbot.tsx
│   │   ├── Diseases.tsx
│   │   ├── Blog.tsx
│   │   └── Contact.tsx
│   │
│   ├── App.tsx
│   ├── main.tsx
│   ├── index.css
│   └── vite-env.d.ts
│
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── vite.config.ts
│
└── README.md
