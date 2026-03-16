# 🏺 Rakku

Showcase koleksi mainan dengan etalase digital.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm/yarn

### Install Dependencies
```bash
npm install
```

### Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Build for Production
```bash
npm run build
npm run start
```

## 🔐 Admin Login

**Default credentials:**
- Username: `admin`
- Password: `admin123`

**Protected routes:**
- `/admin/dashboard` - Admin panel (requires login)
- `/login` - Login page

## 📁 Project Structure

```
rakku/
├── src/
│   ├── app/
│   │   ├── admin/
│   │   │   └── dashboard/
│   │   │       └── page.tsx      # Admin dashboard
│   │   ├── login/
│   │   │   └── page.tsx          # Login page
│   │   ├── globals.css           # Global styles
│   │   ├── layout.tsx            # Root layout
│   │   └── page.tsx              # Homepage
│   ├── components/
│   │   └── Showcase.tsx          # Collection grid
│   └── lib/
│       └── auth.ts               # Auth utilities
├── .env.example                  # Environment template
├── .gitignore                    # Git ignore rules
├── next.config.js
├── package.json
├── tailwind.config.js
└── tsconfig.json
```

## 🛠️ Tech Stack

- **Next.js 14** (App Router)
- **React 18** + TypeScript
- **Tailwind CSS**
- **Cookie-based auth** (middleware protected)

## 📝 Features

- ✅ Public showcase page
- ✅ Login/logout system
- ✅ Admin dashboard with stats
- ✅ Protected routes via middleware
- ✅ Responsive design

## 🔒 Security

- Credentials stored in `.env.local` (NOT committed to Git)
- `.gitignore` blocks: `.env`, `*.key`, `*.pem`, `*credentials*`
- Cookie-based session with `SameSite=Strict`

## 📄 License

Private project
