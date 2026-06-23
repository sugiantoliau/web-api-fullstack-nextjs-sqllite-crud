
## 📖 Description

This project is a **full‑stack web application** built with **Next.js** as the frontend framework and **SQLite** as the database engine.  
It demonstrates a clean **MVC (Model–View–Controller)** architecture and implements full **CRUD (Create, Read, Update, Delete)** functionality for managing Products and Customers.

- **Next.js** is a modern React framework maintained by Vercel. It provides powerful features such as:
  - **App Router** for file‑based routing and server components
  - **API routes** for building backend endpoints directly inside the project
  - **Automatic compilation & bundling** with hot reload
  - **Built‑in support for Tailwind CSS** and other developer tools
  - **Full‑stack capabilities**: you can write both frontend and backend logic in one project

- **SQLite** is a lightweight, file‑based relational database. It is ideal for local development and small to medium applications because:
  - It requires no separate server process
  - The database is stored in a single `.db` file
  - It integrates seamlessly with **Prisma ORM**, which generates type‑safe queries for Next.js

Together, Next.js and SQLite (via Prisma) make this project simple to set up, easy to maintain, and powerful enough to demonstrate real‑world CRUD operations.


### 🔧 Create Repository on Github and Clone it

se `git clone` to clone your GitHub repository into your local machine.  

It is recommended to include a **.gitignore** file to avoid committing unnecessary files (e.g., `node_modules`, `.env`, `.next`, `dev.db`).


### 🔧 Install Nextjs

After cloning the repository, navigate into the project folder and run:

```bash
npx create-next-app@latest .
```

Answer the questions as Follow:
√ Would you like to use the recommended Next.js defaults? » No, customize settings

√ Would you like to use TypeScript? ... No

√ Which linter would you like to use? » ESLint

√ Would you like to use React Compiler? ... No

√ Would you like to use Tailwind CSS? ... Yes

√ Would you like your code inside a `src/` directory? Yes

√ Would you like to use App Router? (recommended) Yes

√ Would you like to customize the import alias (`@/*` by default)? Yes

√ What import alias would you like configured? ... @/*

√ Would you like to include AGENTS.md to guide coding agents to write up-to-date Next.js code? Yes


### 🔧 Install the Install Dependencies

```bash
npm install @prisma/client
npm install prisma --save-dev
```


### 🔧 Install Prisma (Downgrade to v6)

By default, `npm install prisma @prisma/client` will install the latest Prisma (currently v7).  
Since this project uses **Prisma v6**, you need to uninstall the latest version and reinstall v6:

```bash
npm uninstall prisma @prisma/client
npm install prisma@6 @prisma/client@6
npx prisma -v
```


## 📖 Some Code that often used

### Clean and Rebuild Everything
These commands remove the `.next` build folder, re‑run Prisma migrations, regenerate the Prisma client, and restart the Next.js development server:

```bash
rmdir /s /q .next
npx prisma migrate dev --name init
npx prisma generate
npm run dev
```


### Quick Refresh
Use this shorter sequence when you just want to clear the .next cache and restart the dev server:

```bash
cls
rmdir /s /q .next
npm run dev
```

### Start the development server:

```bash
npm run dev
```



## 📖 Details Step by Step on Created This Development

### 🔧 Create Folder Structure
```bash

@echo off
echo Starting the creation process for Next.js MVC folder structure...

:: Create only the prisma folder (since src is already created by Next.js)
mkdir prisma

:: Create a folder for the local database inside the default Next.js src folder
mkdir src\localdb

:: Create folders for Routing and API (entry points for Web & Mobile App)
mkdir src\app\api\products
mkdir src\app\api\customers
mkdir src\app\products
mkdir src\app\customers

:: Create the main MVC Core folders
mkdir src\models
mkdir src\controllers
mkdir src\lib

:: Create Views folders to separate UI components per module
mkdir src\views\products
mkdir src\views\customers

echo MVC folder structure successfully created inside src!

```


### 🔧 Verify MVC folder structure

after folder created,  the MVC folder structure, The project will look like this:


ias-fullstack-nextjs/
├── .next/                     <-- [BAWAAN NEXT.JS] Hasil kompilasi otomatis (Jangan diubah manual)
├── node_modules/              <-- [BAWAAN NEXT.JS] Semua library & dependencies Node.js (Isinya sangat besar)
├── prisma/                    
│   └── schema.prisma          <-- Tempat mendefinisikan tabel database (Product & Customer)
├── public/                    <-- [BAWAAN NEXT.JS] Tempat menyimpan aset statis (Logo, Icon, Favicon)
│   ├── favicon.ico            <-- Ikon tab browser bawaan Next.js
│   └── file-aset-anda.png     
│
├── src/                       <-- Folder utama kode program aplikasi Anda
│   ├── localdb/               
│   │   └── dev.db             <-- File fisik database lokal (SQLite) Anda berada (Otomatis muncul setelah migrate)
│   │
│   ├── app/                   <-- [BAWAAN NEXT.JS - ROUTING PINTU MASUK]
│   │   ├── api/               <-- Gerbang REST API (Format JSON untuk Mobile App)
│   │   │   ├── products/
│   │   │   │   └── route.js   <-- Menghubungkan API Produk ke Controller
│   │   │   └── customers/
│   │   │       └── route.js   <-- Menghubungkan API Customer ke Controller
│   │   │
│   │   ├── products/          <-- Gerbang Frontend Web Produk
│   │   │   └── page.js        <-- Mengambil data dari Controller untuk Tampilan Web
│   │   ├── customers/         <-- Gerbang Frontend Web Customer
│   │   │   └── page.js        <-- Mengambil data dari Controller untuk Tampilan Web
│   │   │
│   │   ├── globals.css        <-- [BAWAAN NEXT.JS] File CSS utama (Konfigurasi Tailwind CSS)
│   │   ├── layout.js          <-- [BAWAAN NEXT.JS] Kerangka template dasar web (Header/Footer global)
│   │   └── page.js            <-- [BAWAAN NEXT.JS] Halaman utama pertama saat web dibuka (Landing Page)
│   │
│   ├── controllers/           <-- [C - CONTROLLERS] Tempat logika bisnis utama
│   │   ├── productController.js
│   │   └── customerController.js
│   │
│   ├── models/                <-- [M - MODELS] Tempat murni query database (Prisma Client)
│   │   ├── productModel.js
│   │   └── customerModel.js
│   │
│   ├── views/                 <-- [V - VIEWS] Tempat komponen tampilan UI (HTML/React)
│   │   ├── products/
│   │   │   ├── ProductForm.js
│   │   │   └── ProductTable.js
│   │   └── customers/
│   │       ├── CustomerForm.js
│   │       └── CustomerTable.js
│   │
│   └── lib/                   
│       └── prisma.js          <-- Instance koneksi database Prisma global
│
├── .env                       <-- [POSISI BARU] Konfigurasi string database (DATABASE_URL="file:../src/localdb/dev.db")
├── .gitignore                 <-- [BAWAAN NEXT.JS] Daftar file/folder yang tidak boleh masuk ke Git (Pastikan isi .env & dev.db terdaftar)
├── AGENTS.md                  <-- Panduan khusus untuk AI Coding Agent (Cursor/Copilot/Cline) Anda
├── CLAUDE.md                  <-- File guideline tambahan untuk AI
├── eslint.config.mjs          <-- [BAWAAN NEXT.JS] Konfigurasi standarisasi dan pengecekan error kode
├── jsconfig.json              <-- [BAWAAN NEXT.JS] Konfigurasi path mapping (Fitur alias `@/*` yang Anda pilih)
├── next.config.mjs            <-- [BAWAAN NEXT.JS] File konfigurasi utama untuk pengaturan Next.js
├── package.json               <-- [BAWAAN NEXT.JS] Informasi nama proyek, versi, dan daftar script (npm run dev)
├── package-lock.json          <-- [BAWAAN NEXT.JS] Catatan versi detail library node_modules
├── postcss.config.mjs         <-- [BAWAAN NEXT.JS] Konfigurasi compiler CSS untuk Tailwind
├── tailwind.config.mjs        <-- [BAWAAN NEXT.JS] Tempat settingan utility class desain Tailwind CSS
└── README.md                  <-- [BAWAAN NEXT.JS] Dokumentasi teks penjelasan proyek Anda


### 🔧 Hands on Code

Update the code in **package.json**, then install dependencies:
```bash
npm install
```

Create a new file and update the code in .env.
Also update the following files:
- prisma/schema.prisma
- src/lib/prisma.js


Run the migration and generate the Prisma client:
```bash
npx prisma migrate dev --name init
npx prisma generate
```

### 🔧 Create Product Management
Implement the following files:

√ src/models/productModel.js

√ src/controllers/productController.js

√ src/views/products/ProductForm.js

√ src/views/products/ProductTable.js

√ src/app/products/page.js

√ src/app/api/products/route.js

URLs to run:

√ Product Management Web Page → http://localhost:3000/products

√ Product REST API (JSON for Mobile) → http://localhost:3000/api/products


### 🔧 Create Customer Management
Implement the following files:

√ src/models/customerModel.js

√ src/controllers/customerController.js

√ src/views/customers/CustomerForm.js

√ src/views/customers/CustomerTable.js

√ src/app/customers/page.js

√ src/app/api/customers/route.js

URLs to run:

√ Customer Management Web Page → http://localhost:3000/customers

√ Customer REST API (JSON for Mobile) → http://localhost:3000/api/customers




