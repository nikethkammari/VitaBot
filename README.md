*HealthAI Chat*

Empowering You with Health Awareness — One Chat at a Time.

HealthAI Chat is a single-page React + TypeScript web application that provides educational health information through an interactive chatbot, disease reference guides, and wellness tips. Built with Vite and styled using Tailwind CSS.

⚠️ Disclaimer: HealthAI Chat is for educational purposes only and is not a medical diagnostic tool. Always consult qualified healthcare professionals for medical advice.


*Features*:

🏠 Home — Landing section introducing the platform
ℹ️ About — Mission, how the AI helps, and key goals
🤖 Chatbot — Rule-based conversational assistant that answers questions about common diseases (malaria, dengue, diabetes, COVID-19, flu) and general health topics
🦠 Diseases — Reference cards covering causes, symptoms, and prevention for common conditions (Malaria, Dengue, Diabetes, COVID-19, Influenza, Hypertension)
📝 Health Tips / Blog — Articles and daily tips on nutrition, exercise, mental health, hydration, and energy
📬 Contact — Feedback form for questions, suggestions, and issue reports
📱 Fully responsive design with a mobile-friendly navigation menu

*Tech Stack*:

Category - Technology
Framework - React 18(TypeScript)
Build Tool - Vite
Styling - Tailwind CSS 
Icons - lucide-react
Linting - ESLint + typescript-eslint


*Project Structure*:

├── src/
│   ├── components/
│   │   ├── Header.tsx        # Top navigation bar
│   │   └── Footer.tsx        # Footer with links & disclaimer
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Chatbot.tsx       # Interactive health chatbot
│   │   ├── Diseases.tsx      # Disease reference cards
│   │   ├── Blog.tsx          # Health tips & articles
│   │   └── Contact.tsx       # Contact / feedback form
│   ├── App.tsx                # Root component composing all sections
│   ├── main.tsx                # App entry point
│   ├── index.css               # Tailwind directives & global styles
│   └── vite-env.d.ts
├── eslint.config.js
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── vite.config.ts
└── package.json


*Chatbot Behavior :*
The chatbot (Chatbot.tsx) is a simple keyword-matching assistant — no external AI API is called. It matches user input against keywords (e.g. malaria, dengue, diabetes, covid, flu, symptom, prevention, greetings, and thanks) and returns a pre-written, educational response. This makes it lightweight and fully client-side, but it means responses are limited to the topics explicitly programmed in.

*Contributing :*


Fork the repository
Create a feature branch (git checkout -b feature/my-feature)
Commit your changes
Open a pull request


*License :*

Add your preferred license here (e.g. MIT).

*Disclaimer:*

This project and its chatbot provide general educational health information only. It is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of a qualified healthcare provider with any questions regarding a medical condition. For medical emergencies, contact your local emergency services immediately.
