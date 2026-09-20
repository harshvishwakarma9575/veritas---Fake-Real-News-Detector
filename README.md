# 🔎 Veritas — Fake & Real News Detector

> **An AI-powered news verification assistant that analyzes news content and helps identify whether it is likely to be Real or Fake.**

Veritas is a modern AI-powered web application designed to assist users in evaluating the credibility of news articles and claims. It uses **Google Gemini AI** to analyze submitted news content and provides an easy-to-understand result with supporting insights.

---

## 🚀 Features

* 📰 **News Analysis** — Enter or submit news content for analysis.
* 🤖 **AI-Powered Detection** — Uses Google Gemini AI for intelligent content analysis.
* ✅ **Real / Fake Classification** — Provides a classification based on the AI analysis.
* 📊 **Confidence Score** — Displays an analysis score to make the result easier to understand.
* 📈 **Visual Results** — Presents analysis results using interactive UI components and charts.
* 💡 **Reasoning & Insights** — Provides contextual information behind the prediction.
* 🎨 **Modern UI** — Clean and responsive interface built with React and TypeScript.
* ⚡ **Fast Development** — Powered by Vite for a fast development experience.

---

## 🧠 How Veritas Works

The application follows a simple workflow:

```text
User enters news
       ↓
Veritas receives the content
       ↓
Content is sent to Gemini AI
       ↓
AI analyzes the news
       ↓
Result is generated
       ↓
Real / Fake + Confidence + Analysis
       ↓
Result displayed to the user
```

> **Note:** AI-generated classifications should be treated as an assistance tool, not as definitive proof that a news story is true or false. Users should verify important claims using reliable primary sources.

---

## 🛠️ Tech Stack

| Technology                  | Purpose                             |
| --------------------------- | ----------------------------------- |
| **React**                   | User interface                      |
| **TypeScript**              | Type-safe application development   |
| **Vite**                    | Development server and build tool   |
| **Google Gemini API**       | AI-powered news analysis            |
| **JavaScript / HTML / CSS** | Web application foundation          |
| **npm**                     | Package management                  |
| **Git & GitHub**            | Version control and project hosting |

---

## 📂 Project Structure

```text
veritas---Fake-Real-News-Detector/
│
├── components/
│   ├── Navbar.tsx
│   ├── ResultCard.tsx
│   └── ScoreChart.tsx
│
├── services/
│   └── geminiService.ts
│
├── App.tsx
├── index.tsx
├── index.html
├── types.ts
├── metadata.json
├── package.json
├── package-lock.json
├── tsconfig.json
├── vite.config.ts
├── .gitignore
└── README.md
```

---

## ⚙️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/harshvishwakarma9575/veritas---Fake-Real-News-Detector.git
```

Navigate into the project:

```bash
cd veritas---Fake-Real-News-Detector
```

---

### 2. Install Dependencies

Make sure **Node.js** and **npm** are installed.

Then run:

```bash
npm install
```

---

### 3. Configure Gemini API

Create a `.env.local` file in the project root:

```text
GEMINI_API_KEY=your_gemini_api_key
```

Replace:

```text
your_gemini_api_key
```

with your actual Gemini API key.

### 🔐 Security

**Never upload your API key to GitHub.**

Make sure `.env.local` is included in `.gitignore`.

Example:

```text
.env
.env.local
.env.*.local
```

---

### 4. Run the Application

Start the development server:

```bash
npm run dev
```

Vite will provide a local URL similar to:

```text
http://localhost:3000/
```

Open the URL in your browser.

---

## 🖥️ Application Workflow

### Step 1 — Enter News

The user provides a news article, headline, or claim.

### Step 2 — AI Analysis

Veritas sends the submitted content to the Gemini AI service for analysis.

### Step 3 — Result Generation

The application processes the AI response and prepares the result.

### Step 4 — Result Display

The user receives an easy-to-understand result containing the classification, score, and analysis.

---

## 📊 Example Result

```text
News Analysis
────────────────────────────

Classification: REAL

Confidence: 92%

Analysis:
The submitted content appears consistent with
the information analyzed by the AI model.

────────────────────────────
```

> Results are AI-generated and should be independently verified before being used for important decisions.

---

## 🎯 Project Objectives

The main objectives of Veritas are:

1. To provide an accessible AI-based news analysis tool.
2. To demonstrate the use of Generative AI in misinformation analysis.
3. To build a modern and responsive web interface.
4. To make AI analysis understandable through clear results and visualizations.
5. To explore practical integration of Gemini AI into a real-world application.

---

## 🔮 Future Improvements

Planned improvements may include:

* 📰 Real-time news source verification
* 🔗 URL-based article analysis
* 🌐 Multiple-language support
* 📚 Integration with trusted news and fact-checking sources
* 🧠 Advanced misinformation detection
* 📊 Historical analysis dashboard
* 👤 User accounts and analysis history
* 🔍 Source credibility analysis
* 📱 Improved mobile experience
* 🗂️ News analysis history and export functionality

---

## ⚠️ Disclaimer

Veritas is an **AI-assisted news analysis project** developed for educational and research purposes.

The application does not guarantee that a news article is objectively true or false. AI models can make mistakes, misunderstand context, or produce inaccurate conclusions.

For important claims, users should verify information through **reliable primary sources, official records, and established fact-checking organizations**.

---

## 👨‍💻 Author

**Harsh Vishwakarma**

Integrated MCA Student | Python | Data Analysis | AI/ML

* GitHub: [@harshvishwakarma9575](https://github.com/harshvishwakarma9575)
* LinkedIn: [Harsh Vishwakarma](https://linkedin.com/in/harshvishkarma9575)

---

## ⭐ Support

If you find this project useful, consider giving the repository a ⭐ on GitHub.

---

## 📜 License

This project is intended for educational and development purposes.
