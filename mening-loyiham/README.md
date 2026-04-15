# React + TypeScript Talabalar Menejer App

Bu loyiha React va TypeScript yordamida yaratilgan talabalar menejer dasturi bo'lib, boshlang'ich darajadagi dasturchilar uchun o'quv maqsadida ishlab chiqilgan.

## 🚀 Ishga tushirish

1. Loyihani klonlang yoki yuklab oling
2. Terminalda loyiha papkasiga o'ting
3. `npm install` buyrug'ini ishga tushiring
4. `npm run dev` buyrug'i bilan dasturni ishga tushiring
5. Brauzerda `http://localhost:5173` manziliga o'ting

## 📋 Xususiyatlar

- ✅ Talaba qo'shish
- ✅ Talaba tahrirlash
- ✅ Talaba o'chirish
- ✅ Talabalar ro'yxatini ko'rish
- ✅ Statistika (jami talabalar, o'rtacha baho)
- ✅ Form validatsiyasi
- ✅ TypeScript tip tekshiruvi

## 🛠️ Texnologiyalar

- **React 18** - UI kutubxonasi
- **TypeScript** - Tip tizimi
- **Vite** - Build vositasi
- **ESLint** - Kod tekshiruvi

## 📁 Fayl Strukturasi

```
src/
├── components/
│   ├── Salom.tsx           # Oddiy komponent
│   ├── Kartochka.tsx       # JSX.Element qaytaruvchi komponent
│   ├── Xush.tsx            # Props bilan komponent
│   ├── MahsulotKartasi.tsx # Murakkab props
│   ├── Hisoblagich.tsx     # useState misoli
│   ├── FoydalanuvchiProfil.tsx # Obyekt holati
│   ├── EventMisol.tsx      # Event handling
│   ├── FormMisol.tsx       # Form va validatsiya
│   └── StudentManager.tsx  # To'liq real loyiha
├── App.tsx                 # Asosiy komponent
├── main.tsx                # Kirish nuqtasi
└── App.css                 # Stil fayli
```

## 🎯 O'quv Maqsadlari

Bu loyiha quyidagi TypeScript va React tushunchalarini o'rgatadi:

1. **TypeScript Asoslari**
   - Oddiy tiplar (string, number, boolean)
   - Massiv va obyekt tiplar
   - Interface va type ta'riflar
   - Funksiya tiplar

2. **React Konseptlari**
   - Functional Components
   - Props va Props Types
   - useState Hook
   - Event Handling
   - Form Management
   - State Management

3. **Amaliy Ko'nikmalar**
   - CRUD operatsiyalari
   - Form validatsiyasi
   - UI/UX dizayn
   - Kod tashkil qilish

## 🔧 Ishlatish

Dastur ishga tushganda siz:

1. **Komponentlar Misollari** bo'limida har bir tushuncha uchun misol ko'rasiz
2. **Talabalar Menejer** bo'limida real loyihani sinab ko'rishingiz mumkin

### Talaba Qo'shish
- Ism, yosh, kurs va baho maydonlarini to'ldiring
- "Qo'shish" tugmasini bosing

### Talaba Tahrirlash
- "Tahrirlash" tugmasini bosing
- Ma'lumotlarni o'zgartiring
- "Saqlash" tugmasini bosing

### Talaba O'chirish
- "O'chirish" tugmasini bosing
- Tasdiqlash oynasida "OK" ni bosing

## 🐛 Muammolar va Yechimlar

### Build xatoligi
```bash
npm run build
```
Agar xatolik bo'lsa, TypeScript tiplarini tekshiring.

### Dev server ishlamaydi
Port 5173 band bo'lsa:
```bash
npm run dev -- --port 3000
```

### Import xatoligi
Barcha komponentlar `src/components/` papkasida joylashganligini tekshiring.

## 📞 Aloqa

Savollaringiz bo'lsa, kodni o'rganing yoki o'z versiyangizni yarating!

---

**Muallif:** React + TypeScript Tutorial
**Versiya:** 1.0.0
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
