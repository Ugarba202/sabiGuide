# SabiGuide

**Your Future Shouldn't Depend on Guesswork.**

SabiGuide is an AI-powered student navigation platform designed to help Nigerian students seamlessly move from WAEC to NYSC. We provide proactive guidance through university admissions, scholarship discovery, NELFUND loan applications, and career opportunities—all delivered through WhatsApp and offline USSD.

![SabiGuide Web App](apps/web/public/images/hero-student.png)

---

## 🌟 Vision

**No student should miss an educational opportunity because of a lack of information, internet access, or complex bureaucracy.** SabiGuide bridges the digital divide, acting as a personal academic advisor in your pocket.

---

## 🚀 Core Features

- **Document Intelligence:** Upload a picture of your WAEC or JAMB results, and our AI will automatically parse your eligibility for various universities and scholarships.
- **Multilingual Voice & Text AI:** Communicate naturally in English, Pidgin, Hausa, Yoruba, or Igbo via WhatsApp.
- **Offline USSD Experience:** Access admission statuses, deadlines, and scholarships via feature phones without internet (`*384*SABI#`).
- **Opportunity Engine:** Background matching against local, state, and corporate scholarships (like MTN Foundation or PTDF) with automated deadline reminders.
- **Fintech Integration:** Seamless payment processing for Post-UTME fees and NELFUND loan disbursements via secure banking ecosystems (like OPay).

---

## 🏗 Architecture & Tech Stack

SabiGuide is structured as a **Monorepo** using [Turborepo](https://turbo.build/repo).

### Stack
- **Frontend / Landing Page:** Next.js (App Router), React, Tailwind CSS, Framer Motion
- **Package Manager:** `pnpm`
- **Backend Infrastructure:** NestJS, Firebase
- **AI Core:** Retrieval-Augmented Generation (RAG) powered by Gemini
- **Integrations:** WhatsApp Cloud API, USSD Gateways

### Repository Structure
```text
.
├── apps/
│   └── web/           # The Next.js landing page and frontend app
├── packages/          # Shared configurations and libraries (UI, ESLint, TypeScript)
├── turbo.json         # Turborepo build pipeline configuration
└── pnpm-workspace.yaml# Workspace definitions
```

---

## 💻 Getting Started (Local Development)

### Prerequisites
- Node.js (v18+)
- `pnpm` installed globally (`npm install -g pnpm`)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Ugarba202/sabiGuide.git
   cd sabiGuide
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Start the development server**
   ```bash
   # This will start the Next.js app on http://localhost:3000
   pnpm run dev
   ```

---

## 🌍 Deployment (Vercel)

The `apps/web` application is heavily optimized for Vercel deployment. Because this is a monorepo, you must configure the Vercel project correctly:

1. Import the repository in your Vercel Dashboard.
2. Under **Project Settings -> General**, set the **Root Directory** to `apps/web`.
3. Vercel will automatically detect the Next.js framework and use `pnpm install` based on the root lockfile.
4. Click **Deploy**.

*For full deployment details, refer to our internal [Vercel Deployment Guide].*

---

## 🤝 Contributing

We welcome contributions to SabiGuide! Please check out our [Contributing Guidelines](CONTRIBUTING.md) and [Code of Conduct](CODE_OF_CONDUCT.md) before opening a Pull Request.

---

## 📄 License
This project is proprietary and confidential. All rights reserved.