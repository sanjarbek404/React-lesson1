# ⚛️ React + TypeScript To'liq Dars Qo'llanmasi
### Boshlovchilar uchun bosqichma-bosqich

---

## 📌 MUNDARIJA
1. [Nazariy qism](#1-nazariy-qism)
2. [Boshlang'ich sozlash](#2-boshlangich-sozlash)
3. [Asosiy tushunchalar](#3-asosiy-tushunchalar)
4. [Real Loyiha: Student Manager App](#4-real-loyiha-student-manager-app)
5. [Fayl strukturasi](#5-fayl-strukturasi)
6. [Eng ko'p uchraydigan xatolar](#6-eng-kop-uchraydigan-xatolar)
7. [Amaliy mashqlar](#7-amaliy-mashqlar)

---

## 1. NAZARIY QISM

### 🤔 TypeScript nima?

TypeScript — bu JavaScript'ning "kuchaytirilgan" versiyasi.  
JavaScript'ga **tip (type) tizimi** qo'shadi.

> **Oddiy qilib aytganda:**  
> JavaScript — erkin, qoidasiz. TypeScript — qoidali, xatolarni oldindan ko'rsatadigan.

---

### 🔄 JavaScript va TypeScript farqi

**JavaScript (eski usul):**
```javascript
// ❌ JavaScript - xatoni faqat dastur ishlaganda ko'rasiz
function greet(name) {
  return "Salom, " + name;
}

greet(123); // Xato yo'q, lekin natija noto'g'ri: "Salom, 123"
greet();    // Runtime xato - faqat ishlatganda bilinadi
```

**TypeScript (yangi usul):**
```typescript
// ✅ TypeScript - xatoni yozayotganda ko'rasiz
function greet(name: string): string {
  //           ^^^^^^^^^^^  ^^^^^^^^
  //           name string bo'lishi kerak, return ham string
  return "Salom, " + name;
}

greet(123);   // 🔴 Xato: Argument of type 'number' is not assignable to type 'string'
greet();      // 🔴 Xato: Expected 1 argument, but got 0
greet("Ali"); // ✅ To'g'ri!
```

---

### 📊 Asosiy TypeScript tiplari

```typescript
// ==========================================
// ODDIY TIPLAR
// ==========================================

let ism: string = "Sardor";          // Matn
let yosh: number = 25;               // Son
let talaba: boolean = true;          // true/false
let noaniq: null = null;             // null
let aniqlanmagan: undefined = undefined; // undefined

// ==========================================
// MASSIV (Array)
// ==========================================

let sonlar: number[] = [1, 2, 3, 4, 5];        // Sonlar massivi
let ismlar: string[] = ["Ali", "Vali", "Soli"]; // Matnlar massivi
let aralash: (string | number)[] = ["Ali", 25]; // Aralash

// ==========================================
// OBJECT
// ==========================================

let talaba1: { ism: string; yosh: number } = {
  ism: "Sardor",
  yosh: 20,
};

// ==========================================
// FUNCTION
// ==========================================

// Parametr tipi va qaytarish tipi
function qoshish(a: number, b: number): number {
  return a + b;
}

// Qaytarishi yo'q funksiya
function chop(xabar: string): void {
  console.log(xabar);
}
```

---

### ✅ React'da TypeScript ishlatishning afzalliklari

| Muammo (JS bilan) | Yechim (TS bilan) |
|---|---|
| Props noto'g'ri uzatilsa — runtime xato | Yozayotganda xato ko'rsatadi |
| Kod o'qish qiyin | Tiplar orqali kod o'zi tushuntiradi |
| Katta loyihalarda chalkashlik | Avtokomplete va tip tekshiruvi |
| Refactoring qiyin | Xatolar avtomatik topiladi |

---

## 2. BOSHLANG'ICH SOZLASH

### 🚀 Vite orqali loyiha yaratish

```bash
# 1-qadam: Yangi loyiha yaratish
# "npm create vite@latest" — Vite yordamida loyiha yaratish buyrug'i
# "mening-loyiham" — loyiha papkasi nomi (o'zgartirishingiz mumkin)
npm create vite@latest mening-loyiham

# Buyruq ishlaganda shu savollar chiqadi:
# ✔ Select a framework: › React          ← React tanlang
# ✔ Select a variant: › TypeScript       ← TypeScript tanlang

# 2-qadam: Loyiha papkasiga o'tish
cd mening-loyiham

# 3-qadam: Kerakli paketlarni o'rnatish
# "npm install" — package.json dagi barcha paketlarni yuklab oladi
npm install

# 4-qadam: Dasturni ishga tushirish
# "npm run dev" — lokal server ishga tushadi (odatda http://localhost:5173)
npm run dev
```

---

### 📁 Yaratilgan loyiha strukturasi

```
mening-loyiham/
├── public/              ← Statik fayllar (rasmlar va h.k.)
├── src/                 ← Asosiy kod shu yerda
│   ├── App.tsx          ← Bosh komponent (tsx = TypeScript + JSX)
│   ├── App.css          ← App uchun stil
│   ├── main.tsx         ← Dastur kirish nuqtasi
│   └── vite-env.d.ts    ← Vite type ta'riflari
├── index.html           ← Asosiy HTML fayl
├── package.json         ← Loyiha ma'lumotlari va bog'liqliklar
├── tsconfig.json        ← TypeScript sozlamalari
└── vite.config.ts       ← Vite sozlamalari
```

---

### 🧹 Loyihani tozalash

`src/App.tsx` faylini oching va hamma narsani o'chirib, quyidagini yozing:

```tsx
// src/App.tsx
// Bu faylga butun loyihamizning bosh komponenti joylashadi

function App() {
  return (
    <div>
      <h1>Salom, TypeScript!</h1>
    </div>
  );
}

// App komponentini boshqa fayllarda ishlatish uchun export qilamiz
export default App;
```

---

## 3. ASOSIY TUSHUNCHALAR

### 📦 3.1 Functional Component — TypeScript bilan

#### Sodda misol:

```tsx
// src/components/Salom.tsx

// React.FC — "Function Component" degani
// <{}> — bu komponent hech qanday props olmaydi degani
const Salom: React.FC = () => {
  return (
    <div>
      <h2>Salom, Dunyo!</h2>
    </div>
  );
};

export default Salom;
```

#### Realga yaqin misol:

```tsx
// src/components/Kartochka.tsx

// Komponent JSX qaytaradi — shuning uchun qaytarish tipi JSX.Element
const Kartochka: React.FC = (): JSX.Element => {
  // O'zgaruvchilar
  const sarlavha: string = "Mening Kartochkam";
  const sana: string = new Date().toLocaleDateString("uz-UZ");

  return (
    <div style={{ border: "1px solid #ccc", padding: "16px", borderRadius: "8px" }}>
      <h3>{sarlavha}</h3>
      <p>Bugungi sana: {sana}</p>
    </div>
  );
};

export default Kartochka;
```

---

### 🎁 3.2 Props — type/interface bilan

Props — bu komponentga tashqaridan beriladigan ma'lumotlar.

#### Sodda misol:

```tsx
// src/components/Xush.tsx

// Interface — props strukturasini ta'riflaydi
interface XushProps {
  ism: string;       // Majburiy: matn tipida ism
  yosh: number;      // Majburiy: son tipida yosh
  talaba?: boolean;  // Ixtiyoriy: "?" belgisi ixtiyoriy degani
}

// Props ni destructuring orqali olamiz
const Xush: React.FC<XushProps> = ({ ism, yosh, talaba = false }) => {
  //                 ^^^^^^^^^^^           ^^^^^^^^^^^^^^^^^^^^^^^^
  //                 Props tipi            Props ni olish usuli
  return (
    <div>
      <h2>Salom, {ism}!</h2>
      <p>Yoshingiz: {yosh}</p>
      {/* talaba true bo'lsa "Talaba" deb ko'rsatadi */}
      {talaba && <span>🎓 Talaba</span>}
    </div>
  );
};

export default Xush;

// ==========================================
// Ishlatilishi (App.tsx da):
// ==========================================
// <Xush ism="Sardor" yosh={22} talaba={true} />
// <Xush ism="Malika" yosh={19} />
```

#### Realga yaqin misol — Mahsulot kartasi:

```tsx
// src/components/MahsulotKartasi.tsx

// Ichma-ich interface yozish mumkin
interface Rasm {
  url: string;
  alt: string;
}

interface MahsulotProps {
  id: number;                              // Unikal raqam
  nomi: string;                            // Mahsulot nomi
  narxi: number;                           // Narx
  chegirma?: number;                       // Ixtiyoriy chegirma foizi
  rasm: Rasm;                              // Rasm obyekti
  kategoriyalar: string[];                 // Kategoriyalar massivi
  onClick: (id: number) => void;           // Funksiya tipi
  //        ^^^^^^^^^^^^^^^^^^^
  //        id qabul qilib, hech narsa qaytarmaydi
}

const MahsulotKartasi: React.FC<MahsulotProps> = ({
  id,
  nomi,
  narxi,
  chegirma = 0,       // Default qiymat: 0
  rasm,
  kategoriyalar,
  onClick,
}) => {
  // Chegirmali narxni hisoblash
  const yakuniyNarx: number = narxi - (narxi * chegirma) / 100;

  return (
    <div className="karta" onClick={() => onClick(id)}>
      <img src={rasm.url} alt={rasm.alt} />
      <h3>{nomi}</h3>
      
      {/* Kategoriyalarni ko'rsatish */}
      <div>
        {kategoriyalar.map((kat, index) => (
          <span key={index} className="kat-badge">
            {kat}
          </span>
        ))}
      </div>

      {/* Chegirma bormi? */}
      {chegirma > 0 ? (
        <div>
          <s>{narxi.toLocaleString()} so'm</s>  {/* Kesib tashlangan narx */}
          <strong>{yakuniyNarx.toLocaleString()} so'm</strong>
        </div>
      ) : (
        <strong>{narxi.toLocaleString()} so'm</strong>
      )}
    </div>
  );
};

export default MahsulotKartasi;
```

---

### 🔄 3.3 useState — type bilan ishlatish

`useState` — komponent ichidagi o'zgaruvchi holatini saqlaydi.

#### Sodda misol:

```tsx
// src/components/Hisoblagich.tsx

// useState React dan import qilinadi
import { useState } from "react";

const Hisoblagich: React.FC = () => {
  // useState<number>(0) — son tipidagi holat, boshlang'ich qiymati 0
  //          ^^^^^^^^
  //          Bu tip ko'rsatilmasa ham bo'ladi — TypeScript o'zi topadi
  const [son, setSon] = useState<number>(0);
  //     ^^^  ^^^^^
  //     qiymat  qiymatni o'zgartiruvchi funksiya

  return (
    <div>
      <h2>Son: {son}</h2>
      
      {/* Son ni 1 ga oshirish */}
      <button onClick={() => setSon(son + 1)}>+1</button>
      
      {/* Son ni 1 ga kamaytirish */}
      <button onClick={() => setSon(son - 1)}>-1</button>
      
      {/* Nolga qaytarish */}
      <button onClick={() => setSon(0)}>Nol</button>
    </div>
  );
};

export default Hisoblagich;
```

#### Realga yaqin misol — Murakkab holat:

```tsx
// src/components/FoydalanuvchiProfil.tsx

import { useState } from "react";

// Foydalanuvchi turi
interface Foydalanuvchi {
  id: number;
  ism: string;
  email: string;
  aktiv: boolean;
}

const FoydalanuvchiProfil: React.FC = () => {
  // Obyekt holatini saqlash
  const [foydalanuvchi, setFoydalanuvchi] = useState<Foydalanuvchi>({
    id: 1,
    ism: "Sardor Rahimov",
    email: "sardor@example.com",
    aktiv: true,
  });

  // Boolean holat
  const [tahrirlash, setTahrirlash] = useState<boolean>(false);

  // String holat
  const [yangiIsm, setYangiIsm] = useState<string>(foydalanuvchi.ism);

  // Ismni saqlash
  const ismniSaqla = (): void => {
    // Mavjud obyektni yangilab, faqat ism ni o'zgartirish
    setFoydalanuvchi({ ...foydalanuvchi, ism: yangiIsm });
    setTahrirlash(false);
  };

  return (
    <div>
      {tahrirlash ? (
        // Tahrirlash rejimi
        <div>
          <input
            value={yangiIsm}
            onChange={(e) => setYangiIsm(e.target.value)}
          />
          <button onClick={ismniSaqla}>Saqlash</button>
          <button onClick={() => setTahrirlash(false)}>Bekor</button>
        </div>
      ) : (
        // Ko'rish rejimi
        <div>
          <h2>{foydalanuvchi.ism}</h2>
          <p>{foydalanuvchi.email}</p>
          <p>Holat: {foydalanuvchi.aktiv ? "✅ Aktiv" : "❌ Aktiv emas"}</p>
          <button onClick={() => setTahrirlash(true)}>Tahrirlash</button>
        </div>
      )}
    </div>
  );
};

export default FoydalanuvchiProfil;
```

---

### 🖱️ 3.4 Event Handling — onClick, onChange

```tsx
// src/components/EventMisol.tsx

import { useState } from "react";

const EventMisol: React.FC = () => {
  const [matn, setMatn] = useState<string>("");
  const [xabar, setXabar] = useState<string>("");

  // ==========================================
  // onClick — tugma bosilganda
  // React.MouseEvent<HTMLButtonElement> — button uchun event tipi
  // ==========================================
  const tugmaBosildi = (event: React.MouseEvent<HTMLButtonElement>): void => {
    console.log("Tugma bosildi!", event.currentTarget.textContent);
    setXabar("Tugma bosildi! ✅");
  };

  // ==========================================
  // onChange — input o'zgarganda
  // React.ChangeEvent<HTMLInputElement> — input uchun event tipi
  // ==========================================
  const inputOzgardi = (event: React.ChangeEvent<HTMLInputElement>): void => {
    // event.target.value — inputga yozilgan matn
    setMatn(event.target.value);
  };

  // ==========================================
  // Textarea uchun alohida tip
  // ==========================================
  const textareaOzgardi = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
    console.log("Textarea:", event.target.value);
  };

  // ==========================================
  // Select uchun alohida tip
  // ==========================================
  const selectOzgardi = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    console.log("Tanlandi:", event.target.value);
  };

  return (
    <div>
      {/* INPUT */}
      <input
        type="text"
        placeholder="Biror narsa yozing..."
        value={matn}               // Input qiymati
        onChange={inputOzgardi}    // O'zgarganda
      />
      <p>Yozilgan: {matn}</p>

      {/* TEXTAREA */}
      <textarea onChange={textareaOzgardi} placeholder="Ko'p qatorli matn..." />

      {/* SELECT */}
      <select onChange={selectOzgardi}>
        <option value="uzb">O'zbek</option>
        <option value="rus">Rus</option>
        <option value="eng">Ingliz</option>
      </select>

      {/* BUTTON */}
      <button onClick={tugmaBosildi}>Bosing!</button>
      
      {/* Xabarni ko'rsatish */}
      {xabar && <p style={{ color: "green" }}>{xabar}</p>}
    </div>
  );
};

export default EventMisol;
```

---

### 📝 3.5 Form bilan ishlash

```tsx
// src/components/FormMisol.tsx

import { useState } from "react";

// Form ma'lumotlari turi
interface FormMalumot {
  ism: string;
  email: string;
  parol: string;
}

// Xatolar turi (barcha maydonlar ixtiyoriy, chunki barchasi xato bo'lmasligi mumkin)
interface FormXatolar {
  ism?: string;
  email?: string;
  parol?: string;
}

const FormMisol: React.FC = () => {
  // Form ma'lumotlari holati
  const [malumot, setMalumot] = useState<FormMalumot>({
    ism: "",
    email: "",
    parol: "",
  });

  // Xatolar holati
  const [xatolar, setXatolar] = useState<FormXatolar>({});
  
  // Muvaffaqiyat xabari
  const [muvaffaqiyat, setMuvaffaqiyat] = useState<boolean>(false);

  // Input o'zgarganda — keyName bilan universal handler
  const ozgartirish = (key: keyof FormMalumot) => 
    (event: React.ChangeEvent<HTMLInputElement>): void => {
    // keyof FormMalumot — "ism" | "email" | "parol" degani
    setMalumot({ ...malumot, [key]: event.target.value });
    
    // Xatoni tozalash
    setXatolar({ ...xatolar, [key]: undefined });
  };

  // Validatsiya
  const tekshir = (): boolean => {
    const yangiXatolar: FormXatolar = {};

    if (!malumot.ism.trim()) {
      yangiXatolar.ism = "Ism bo'sh bo'lmasligi kerak";
    }

    if (!malumot.email.includes("@")) {
      yangiXatolar.email = "Email noto'g'ri formatda";
    }

    if (malumot.parol.length < 6) {
      yangiXatolar.parol = "Parol kamida 6 ta belgidan iborat bo'lishi kerak";
    }

    setXatolar(yangiXatolar);

    // Xatolar obyekti bo'sh bo'lsa — validatsiya muvaffaqiyatli
    return Object.keys(yangiXatolar).length === 0;
  };

  // Form yuborilganda
  const yuborish = (event: React.FormEvent<HTMLFormElement>): void => {
    // Sahifani yangilashni to'xtatish
    event.preventDefault();

    if (tekshir()) {
      console.log("Yuborildi:", malumot);
      setMuvaffaqiyat(true);

      // Formni tozalash
      setMalumot({ ism: "", email: "", parol: "" });
    }
  };

  if (muvaffaqiyat) {
    return <div style={{ color: "green" }}>✅ Ro'yxatdan o'tish muvaffaqiyatli!</div>;
  }

  return (
    <form onSubmit={yuborish}>
      <div>
        <label>Ism:</label>
        <input
          type="text"
          value={malumot.ism}
          onChange={ozgartirish("ism")}
          placeholder="Ismingizni kiriting"
        />
        {/* Xato bo'lsa ko'rsatish */}
        {xatolar.ism && <span style={{ color: "red" }}>{xatolar.ism}</span>}
      </div>

      <div>
        <label>Email:</label>
        <input
          type="email"
          value={malumot.email}
          onChange={ozgartirish("email")}
          placeholder="email@example.com"
        />
        {xatolar.email && <span style={{ color: "red" }}>{xatolar.email}</span>}
      </div>

      <div>
        <label>Parol:</label>
        <input
          type="password"
          value={malumot.parol}
          onChange={ozgartirish("parol")}
          placeholder="Parol kiriting"
        />
        {xatolar.parol && <span style={{ color: "red" }}>{xatolar.parol}</span>}
      </div>

      <button type="submit">Ro'yxatdan o'tish</button>
    </form>
  );
};

export default FormMisol;
```

---

## 4. REAL LOYIHA: STUDENT MANAGER APP

### 📁 Loyiha fayl strukturasi

```
src/
├── types/
│   └── index.ts          ← Barcha TypeScript tiplari
├── components/
│   ├── TalabalarRoyxati.tsx    ← Talabalar ro'yxati
│   ├── TalabaElement.tsx       ← Har bir talaba elementi
│   └── TalabaForm.tsx          ← Qo'shish/tahrirlash formasi
├── App.tsx               ← Bosh komponent
└── App.css               ← Stillar
```

---

### 📄 1-fayl: src/types/index.ts

```typescript
// src/types/index.ts
// Barcha loyihada ishlatiladigan TypeScript tiplarini shu yerga yozamiz

// ==========================================
// ASOSIY TALABA TURI
// ==========================================
export interface Talaba {
  id: number;          // Unikal identifikator
  ism: string;         // Talabaning ismi
  familiya: string;    // Talabaning familiyasi
  yosh: number;        // Yoshi
  guruh: string;       // Guruhi (masalan "CS-101")
  baho: number;        // O'rtacha bahosi (1-5)
  aktiv: boolean;      // Aktiv talabami?
}

// ==========================================
// FORM HOLATI TURI
// ==========================================
export interface TalabaFormMalumot {
  ism: string;
  familiya: string;
  yosh: string;        // Input string qaytaradi, keyin number ga o'giramiz
  guruh: string;
  baho: string;        // Xuddi shu sabab
}

// ==========================================
// FORM XATOLARI TURI
// ==========================================
export interface FormXatolar {
  ism?: string;
  familiya?: string;
  yosh?: string;
  guruh?: string;
  baho?: string;
}

// ==========================================
// SORT TURI — saralash uchun
// ==========================================
export type SortTuri = "ism" | "yosh" | "baho" | "guruh";
//          ^^^^^^^
//          "type" — bu faqat qiymatlar to'plami

// ==========================================
// FILTER TURI
// ==========================================
export interface FilterMalumot {
  qidiruv: string;     // Qidiruv matni
  guruh: string;       // Guruh bo'yicha filter
  aktiv: boolean | null; // Aktiv/passiv filter (null = hammasi)
}
```

---

### 📄 2-fayl: src/components/TalabaForm.tsx

```tsx
// src/components/TalabaForm.tsx
// Talaba qo'shish va tahrirlash uchun forma

import { useState, useEffect } from "react";
import type { Talaba, TalabaFormMalumot, FormXatolar } from "../types";

// ==========================================
// PROPS INTERFEYSI
// ==========================================
interface TalabaFormProps {
  // tahrirlashTalaba bo'lsa — tahrirlash rejimi, null bo'lsa — qo'shish rejimi
  tahrirlashTalaba: Talaba | null;
  
  // Qo'shganda chaqiriladigan funksiya (id siz, chunki id avtomatik yaratiladi)
  qoshish: (malumot: Omit<Talaba, "id">) => void;
  //                  ^^^^^^^^^^^^^^^^^^^^
  //                  Omit<Talaba, "id"> = Talaba dan "id" ni chiqarib tashlash
  
  // Tahrirlashda chaqiriladigan funksiya
  tahrirlash: (id: number, malumot: Omit<Talaba, "id">) => void;
  
  // Bekor qilish
  bekorQilish: () => void;
}

// ==========================================
// BOSHLANG'ICH FORM QIYMATI
// ==========================================
const boshlangichForm: TalabaFormMalumot = {
  ism: "",
  familiya: "",
  yosh: "",
  guruh: "",
  baho: "",
};

const TalabaForm: React.FC<TalabaFormProps> = ({
  tahrirlashTalaba,
  qoshish,
  tahrirlash,
  bekorQilish,
}) => {
  const [form, setForm] = useState<TalabaFormMalumot>(boshlangichForm);
  const [xatolar, setXatolar] = useState<FormXatolar>({});

  // ==========================================
  // TAHRIRLASH REJIMI: mavjud talaba ma'lumotlarini formga yuklash
  // useEffect — tahrirlashTalaba o'zgarganda ishga tushadi
  // ==========================================
  useEffect(() => {
    if (tahrirlashTalaba) {
      // Talabaning mavjud ma'lumotlarini formga solish
      setForm({
        ism: tahrirlashTalaba.ism,
        familiya: tahrirlashTalaba.familiya,
        yosh: String(tahrirlashTalaba.yosh),    // number → string
        guruh: tahrirlashTalaba.guruh,
        baho: String(tahrirlashTalaba.baho),    // number → string
      });
    } else {
      // Qo'shish rejimi: formni tozalash
      setForm(boshlangichForm);
    }
  }, [tahrirlashTalaba]); // tahrirlashTalaba o'zgarganda ishga tushadi

  // ==========================================
  // UNIVERSAL INPUT HANDLER
  // ==========================================
  const ozgartirish = (
    key: keyof TalabaFormMalumot
  ) => (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ): void => {
    setForm({ ...form, [key]: event.target.value });
    // Xatoni tozalash
    if (xatolar[key]) {
      setXatolar({ ...xatolar, [key]: undefined });
    }
  };

  // ==========================================
  // VALIDATSIYA
  // ==========================================
  const tekshir = (): boolean => {
    const yangiXatolar: FormXatolar = {};

    if (!form.ism.trim()) yangiXatolar.ism = "Ism kiritilishi shart";
    if (!form.familiya.trim()) yangiXatolar.familiya = "Familiya kiritilishi shart";

    const yosh = Number(form.yosh);
    if (!form.yosh || isNaN(yosh) || yosh < 16 || yosh > 60) {
      yangiXatolar.yosh = "Yosh 16 dan 60 gacha bo'lishi kerak";
    }

    if (!form.guruh.trim()) yangiXatolar.guruh = "Guruh kiritilishi shart";

    const baho = Number(form.baho);
    if (!form.baho || isNaN(baho) || baho < 1 || baho > 5) {
      yangiXatolar.baho = "Baho 1 dan 5 gacha bo'lishi kerak";
    }

    setXatolar(yangiXatolar);
    return Object.keys(yangiXatolar).length === 0;
  };

  // ==========================================
  // FORM YUBORISH
  // ==========================================
  const yuborish = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    if (!tekshir()) return; // Validatsiya o'tmasa — to'xtatamiz

    // string → number ga o'giramiz
    const malumot: Omit<Talaba, "id"> = {
      ism: form.ism.trim(),
      familiya: form.familiya.trim(),
      yosh: Number(form.yosh),
      guruh: form.guruh.trim(),
      baho: Number(form.baho),
      aktiv: true,
    };

    if (tahrirlashTalaba) {
      // Tahrirlash
      tahrirlash(tahrirlashTalaba.id, malumot);
    } else {
      // Qo'shish
      qoshish(malumot);
    }

    setForm(boshlangichForm);
  };

  // Tahrirlash yoki qo'shish rejimini aniqlaymiz
  const sarlavha = tahrirlashTalaba ? "✏️ Talabani tahrirlash" : "➕ Yangi talaba qo'shish";

  return (
    <div className="form-konteyner">
      <h2>{sarlavha}</h2>

      <form onSubmit={yuborish}>
        {/* ISM */}
        <div className="form-maydon">
          <label htmlFor="ism">Ism:</label>
          <input
            id="ism"
            type="text"
            value={form.ism}
            onChange={ozgartirish("ism")}
            placeholder="Ismni kiriting"
            className={xatolar.ism ? "xato" : ""}
          />
          {xatolar.ism && <span className="xato-matn">{xatolar.ism}</span>}
        </div>

        {/* FAMILIYA */}
        <div className="form-maydon">
          <label htmlFor="familiya">Familiya:</label>
          <input
            id="familiya"
            type="text"
            value={form.familiya}
            onChange={ozgartirish("familiya")}
            placeholder="Familiyani kiriting"
            className={xatolar.familiya ? "xato" : ""}
          />
          {xatolar.familiya && <span className="xato-matn">{xatolar.familiya}</span>}
        </div>

        {/* YOSH */}
        <div className="form-maydon">
          <label htmlFor="yosh">Yosh:</label>
          <input
            id="yosh"
            type="number"
            value={form.yosh}
            onChange={ozgartirish("yosh")}
            placeholder="Yoshni kiriting"
            min={16}
            max={60}
            className={xatolar.yosh ? "xato" : ""}
          />
          {xatolar.yosh && <span className="xato-matn">{xatolar.yosh}</span>}
        </div>

        {/* GURUH */}
        <div className="form-maydon">
          <label htmlFor="guruh">Guruh:</label>
          <input
            id="guruh"
            type="text"
            value={form.guruh}
            onChange={ozgartirish("guruh")}
            placeholder="Masalan: CS-101"
            className={xatolar.guruh ? "xato" : ""}
          />
          {xatolar.guruh && <span className="xato-matn">{xatolar.guruh}</span>}
        </div>

        {/* BAHO */}
        <div className="form-maydon">
          <label htmlFor="baho">O'rtacha baho (1-5):</label>
          <input
            id="baho"
            type="number"
            value={form.baho}
            onChange={ozgartirish("baho")}
            placeholder="1 dan 5 gacha"
            min={1}
            max={5}
            step={0.1}
            className={xatolar.baho ? "xato" : ""}
          />
          {xatolar.baho && <span className="xato-matn">{xatolar.baho}</span>}
        </div>

        {/* TUGMALAR */}
        <div className="form-tugmalar">
          <button type="submit" className="saqlash-btn">
            {tahrirlashTalaba ? "💾 Saqlash" : "➕ Qo'shish"}
          </button>
          <button type="button" className="bekor-btn" onClick={bekorQilish}>
            ❌ Bekor qilish
          </button>
        </div>
      </form>
    </div>
  );
};

export default TalabaForm;
```

---

### 📄 3-fayl: src/components/TalabaElement.tsx

```tsx
// src/components/TalabaElement.tsx
// Ro'yxatdagi har bir talabani ko'rsatish

import type { Talaba } from "../types";

// ==========================================
// PROPS
// ==========================================
interface TalabaElementProps {
  talaba: Talaba;
  tahrirlashBoshlash: (talaba: Talaba) => void;
  ochirish: (id: number) => void;
  aktivToggle: (id: number) => void;
}

// ==========================================
// YORDAMCHI FUNKSIYA — baho rangini aniqlash
// ==========================================
const bahoRangi = (baho: number): string => {
  if (baho >= 4.5) return "#27ae60"; // Yashil — A'lo
  if (baho >= 3.5) return "#f39c12"; // Sariq — Yaxshi
  if (baho >= 2.5) return "#e67e22"; // To'q sariq — Qoniqarli
  return "#e74c3c";                   // Qizil — Qoniqarsiz
};

const TalabaElement: React.FC<TalabaElementProps> = ({
  talaba,
  tahrirlashBoshlash,
  ochirish,
  aktivToggle,
}) => {
  // To'liq ismni birlashtirish
  const toliqIsm: string = `${talaba.ism} ${talaba.familiya}`;

  // Tasdiqlash bilan o'chirish
  const tasdiqlanganOchirish = (): void => {
    if (window.confirm(`"${toliqIsm}"ni o'chirishni tasdiqlaysizmi?`)) {
      ochirish(talaba.id);
    }
  };

  return (
    <div
      className={`talaba-element ${!talaba.aktiv ? "passiv" : ""}`}
      // Passiv talabalar uchun maxsus stil qo'shish
    >
      {/* TALABA MA'LUMOTLARI */}
      <div className="talaba-info">
        {/* Aktiv/Passiv belgisi */}
        <span
          className="aktiv-nuqta"
          style={{ backgroundColor: talaba.aktiv ? "#27ae60" : "#e74c3c" }}
          title={talaba.aktiv ? "Aktiv" : "Passiv"}
        />

        <div>
          <h3 className="talaba-ism">{toliqIsm}</h3>
          <div className="talaba-meta">
            <span>🎓 {talaba.guruh}</span>
            <span>📅 {talaba.yosh} yosh</span>
            <span
              style={{ color: bahoRangi(talaba.baho), fontWeight: "bold" }}
            >
              ⭐ {talaba.baho.toFixed(1)}
            </span>
          </div>
        </div>
      </div>

      {/* AMALLAR */}
      <div className="amallar">
        {/* Tahrirlash */}
        <button
          className="tahrirlash-btn"
          onClick={() => tahrirlashBoshlash(talaba)}
          title="Tahrirlash"
        >
          ✏️
        </button>

        {/* Aktiv/Passiv toggle */}
        <button
          className="toggle-btn"
          onClick={() => aktivToggle(talaba.id)}
          title={talaba.aktiv ? "Passivga o'tkazish" : "Aktivlashtirish"}
        >
          {talaba.aktiv ? "⏸️" : "▶️"}
        </button>

        {/* O'chirish */}
        <button
          className="ochirish-btn"
          onClick={tasdiqlanganOchirish}
          title="O'chirish"
        >
          🗑️
        </button>
      </div>
    </div>
  );
};

export default TalabaElement;
```

---

### 📄 4-fayl: src/components/TalabalarRoyxati.tsx

```tsx
// src/components/TalabalarRoyxati.tsx
// Barcha talabalar ro'yxati + saralash va filter

import { useState, useMemo } from "react";
import TalabaElement from "./TalabaElement";
import type { Talaba, SortTuri } from "../types";

interface TalabalarRoyxatiProps {
  talabalar: Talaba[];
  tahrirlashBoshlash: (talaba: Talaba) => void;
  ochirish: (id: number) => void;
  aktivToggle: (id: number) => void;
}

const TalabalarRoyxati: React.FC<TalabalarRoyxatiProps> = ({
  talabalar,
  tahrirlashBoshlash,
  ochirish,
  aktivToggle,
}) => {
  // Qidiruv holati
  const [qidiruv, setQidiruv] = useState<string>("");
  
  // Saralash holati
  const [sortTuri, setSortTuri] = useState<SortTuri>("ism");
  
  // Filter holati
  const [faqatAktiv, setFaqatAktiv] = useState<boolean>(false);

  // ==========================================
  // useMemo — filterlangan va saralangan ro'yxat
  // Faqat bog'liq o'zgaruvchilar o'zgarganda qayta hisoblanadi
  // ==========================================
  const filterlangan = useMemo((): Talaba[] => {
    return talabalar
      // 1. Qidiruv bo'yicha filter
      .filter((t) => {
        const toliqIsm = `${t.ism} ${t.familiya}`.toLowerCase();
        const qidiruvMatni = qidiruv.toLowerCase();
        return (
          toliqIsm.includes(qidiruvMatni) ||
          t.guruh.toLowerCase().includes(qidiruvMatni)
        );
      })
      // 2. Aktiv filter
      .filter((t) => !faqatAktiv || t.aktiv)
      // 3. Saralash
      .sort((a, b) => {
        switch (sortTuri) {
          case "ism":
            return a.ism.localeCompare(b.ism); // Alfavit bo'yicha
          case "yosh":
            return a.yosh - b.yosh;            // Yoshdan kichikka
          case "baho":
            return b.baho - a.baho;            // Bahosi kattadan kichikka
          case "guruh":
            return a.guruh.localeCompare(b.guruh);
          default:
            return 0;
        }
      });
  }, [talabalar, qidiruv, sortTuri, faqatAktiv]);

  // Statistika
  const statistika = useMemo(() => ({
    jami: talabalar.length,
    aktiv: talabalar.filter((t) => t.aktiv).length,
    ortachaBaho: talabalar.length
      ? (talabalar.reduce((s, t) => s + t.baho, 0) / talabalar.length).toFixed(2)
      : "0.00",
  }), [talabalar]);

  return (
    <div className="royxat-konteyner">
      {/* STATISTIKA */}
      <div className="statistika">
        <div className="stat-karta">
          <span className="stat-raqam">{statistika.jami}</span>
          <span className="stat-nom">Jami talaba</span>
        </div>
        <div className="stat-karta">
          <span className="stat-raqam">{statistika.aktiv}</span>
          <span className="stat-nom">Aktiv</span>
        </div>
        <div className="stat-karta">
          <span className="stat-raqam">{statistika.ortachaBaho}</span>
          <span className="stat-nom">O'rtacha baho</span>
        </div>
      </div>

      {/* FILTER VA SARALASH */}
      <div className="filter-saralash">
        {/* Qidiruv */}
        <input
          type="text"
          placeholder="🔍 Ism yoki guruh bo'yicha qidiring..."
          value={qidiruv}
          onChange={(e) => setQidiruv(e.target.value)}
          className="qidiruv-input"
        />

        {/* Saralash */}
        <select
          value={sortTuri}
          onChange={(e) => setSortTuri(e.target.value as SortTuri)}
          // "as SortTuri" — string ni SortTuri ga o'tkazish (type assertion)
          className="sort-select"
        >
          <option value="ism">Ism bo'yicha</option>
          <option value="yosh">Yosh bo'yicha</option>
          <option value="baho">Baho bo'yicha</option>
          <option value="guruh">Guruh bo'yicha</option>
        </select>

        {/* Aktiv filter */}
        <label className="checkbox-label">
          <input
            type="checkbox"
            checked={faqatAktiv}
            onChange={(e) => setFaqatAktiv(e.target.checked)}
          />
          Faqat aktiv
        </label>
      </div>

      {/* RO'YXAT */}
      {filterlangan.length === 0 ? (
        <div className="bosh-holat">
          <p>😔 Talaba topilmadi</p>
          {qidiruv && (
            <button onClick={() => setQidiruv("")}>Filtrni tozalash</button>
          )}
        </div>
      ) : (
        <div className="talabalar-royxati">
          <p className="topilgan-son">
            {filterlangan.length} ta talaba topildi
          </p>
          {filterlangan.map((talaba) => (
            <TalabaElement
              key={talaba.id}                    // React uchun unikal kalit
              talaba={talaba}
              tahrirlashBoshlash={tahrirlashBoshlash}
              ochirish={ochirish}
              aktivToggle={aktivToggle}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default TalabalarRoyxati;
```

---

### 📄 5-fayl: src/App.tsx — Bosh komponent

```tsx
// src/App.tsx
// Butun ilovaning bosh komponenti — holat va logika shu yerda

import { useState } from "react";
import TalabaForm from "./components/TalabaForm";
import TalabalarRoyxati from "./components/TalabalarRoyxati";
import type { Talaba } from "./types";
import "./App.css";

// ==========================================
// NAMUNAVIY MA'LUMOTLAR
// ==========================================
const namunaData: Talaba[] = [
  { id: 1, ism: "Sardor", familiya: "Rahimov", yosh: 20, guruh: "CS-101", baho: 4.8, aktiv: true },
  { id: 2, ism: "Malika", familiya: "Yusupova", yosh: 21, guruh: "CS-101", baho: 4.2, aktiv: true },
  { id: 3, ism: "Bobur", familiya: "Nazarov", yosh: 19, guruh: "IT-201", baho: 3.5, aktiv: true },
  { id: 4, ism: "Dilnoza", familiya: "Karimova", yosh: 22, guruh: "IT-201", baho: 4.6, aktiv: false },
];

const App: React.FC = () => {
  // ==========================================
  // HOLAT (STATE)
  // ==========================================
  
  // Talabalar ro'yxati
  const [talabalar, setTalabalar] = useState<Talaba[]>(namunaData);
  
  // Tahrirlash rejimi (null = qo'shish rejimi)
  const [tahrirlashTalaba, setTahrirlashTalaba] = useState<Talaba | null>(null);
  
  // Form ko'rinishi
  const [formKorinish, setFormKorinish] = useState<boolean>(false);

  // ==========================================
  // AMALLAR
  // ==========================================

  // ID yaratish — eng katta ID + 1
  const yangiId = (): number => {
    return talabalar.length > 0
      ? Math.max(...talabalar.map((t) => t.id)) + 1
      : 1;
  };

  // Yangi talaba qo'shish
  const talabaqoshish = (malumot: Omit<Talaba, "id">): void => {
    const yangiTalaba: Talaba = {
      id: yangiId(),   // Avtomatik ID
      ...malumot,      // Qolgan ma'lumotlar
    };
    setTalabalar([...talabalar, yangiTalaba]);
    setFormKorinish(false);
  };

  // Talabani tahrirlash
  const talabaTahrirlash = (id: number, malumot: Omit<Talaba, "id">): void => {
    setTalabalar(
      talabalar.map((t) =>
        t.id === id
          ? { ...t, ...malumot }  // Mos talabani yangilash
          : t                      // Boshqalarni o'zgartirmaslik
      )
    );
    setTahrirlashTalaba(null);
    setFormKorinish(false);
  };

  // Talabani o'chirish
  const talabaOchirish = (id: number): void => {
    setTalabalar(talabalar.filter((t) => t.id !== id));
    // Agar o'chirilayotgan talaba tahrirlash rejimida bo'lsa — tozalash
    if (tahrirlashTalaba?.id === id) {
      setTahrirlashTalaba(null);
      setFormKorinish(false);
    }
  };

  // Aktiv/Passiv almashtirish
  const aktivToggle = (id: number): void => {
    setTalabalar(
      talabalar.map((t) =>
        t.id === id ? { ...t, aktiv: !t.aktiv } : t
      )
    );
  };

  // Tahrirlashni boshlash
  const tahrirlashBoshlash = (talaba: Talaba): void => {
    setTahrirlashTalaba(talaba);
    setFormKorinish(true);
    // Sahifaning yuqorisiga o'tish
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Bekor qilish
  const bekorQilish = (): void => {
    setTahrirlashTalaba(null);
    setFormKorinish(false);
  };

  return (
    <div className="app">
      {/* SARLAVHA */}
      <header className="sarlavha">
        <h1>🎓 Student Manager</h1>
        <p>TypeScript + React bilan qurilgan</p>
      </header>

      <main className="asosiy">
        {/* FORM TUGMASI */}
        {!formKorinish && (
          <button
            className="qoshish-tugma"
            onClick={() => setFormKorinish(true)}
          >
            ➕ Yangi talaba qo'shish
          </button>
        )}

        {/* FORM */}
        {formKorinish && (
          <TalabaForm
            tahrirlashTalaba={tahrirlashTalaba}
            qoshish={talabaqoshish}
            tahrirlash={talabaTahrirlash}
            bekorQilish={bekorQilish}
          />
        )}

        {/* RO'YXAT */}
        <TalabalarRoyxati
          talabalar={talabalar}
          tahrirlashBoshlash={tahrirlashBoshlash}
          ochirish={talabaOchirish}
          aktivToggle={aktivToggle}
        />
      </main>
    </div>
  );
};

export default App;
```

---

## 5. FAYL STRUKTURASI

### Qaysi faylga nima yoziladi va nega?

```
src/
│
├── types/index.ts
│   ✅ Barcha interface va type ta'riflari
│   ✅ Bir joyda yozilgani — boshqasida import qilinadi
│   ❌ Hech qanday komponent yoki logika bo'lmaydi
│
├── components/
│   ✅ Har bir komponent alohida faylda
│   ✅ Fayl nomi = Komponent nomi (PascalCase)
│   ✅ Kichik, bitta javobgarlikli komponentlar
│
├── App.tsx
│   ✅ Bosh holat (state) shu yerda
│   ✅ Asosiy CRUD amallar shu yerda
│   ✅ Komponentlarni birlashtirish
│   ❌ Ko'p kod yozilmasligi kerak — komponentlarga ajratilsin
│
└── App.css
    ✅ Global stillar
    (Yaxshisi har bir komponent uchun alohida .module.css)
```

---

## 6. ENG KO'P UCHRAYDIGAN XATOLAR

### ❌ Xato 1: Tip ko'rsatmaslik

```typescript
// ❌ NOTO'G'RI
const [data, setData] = useState(null);
// TypeScript "null" tipini o'zi beradi — bu cheklovli!

// ✅ TO'G'RI
const [data, setData] = useState<Talaba | null>(null);
// Talaba yoki null ekanini aniq bildiradi
```

---

### ❌ Xato 2: Event tipini bilmaslik

```typescript
// ❌ NOTO'G'RI — "any" ishlatish
const handler = (e: any) => { ... }

// ✅ TO'G'RI — aniq tip
const handler = (e: React.ChangeEvent<HTMLInputElement>) => { ... }
// HTMLButtonElement, HTMLSelectElement, HTMLTextAreaElement ham ishlatiladi
```

---

### ❌ Xato 3: "undefined" ni tekshirmaslik

```typescript
// ❌ NOTO'G'RI
const birinchi = talabalar.find(t => t.id === 1);
console.log(birinchi.ism); // ⚠️ "birinchi" undefined bo'lishi mumkin!

// ✅ TO'G'RI — optional chaining
console.log(birinchi?.ism);

// ✅ YOKI
if (birinchi) {
  console.log(birinchi.ism);
}
```

---

### ❌ Xato 4: Props tipini unutish

```typescript
// ❌ NOTO'G'RI — props tipisiz
const Komponent = ({ ism, yosh }) => { ... }
// TypeScript: "Binding element 'ism' implicitly has an 'any' type"

// ✅ TO'G'RI
interface Props {
  ism: string;
  yosh: number;
}
const Komponent: React.FC<Props> = ({ ism, yosh }) => { ... }
```

---

### ❌ Xato 5: Array ni noto'g'ri yangilash

```typescript
// ❌ NOTO'G'RI — state ni to'g'ridan-to'g'ri o'zgartirish
talabalar.push(yangiTalaba); // React bu o'zgarishni sezmaydi!
setTalabalar(talabalar);

// ✅ TO'G'RI — yangi massiv yaratish
setTalabalar([...talabalar, yangiTalaba]);
```

---

### ❌ Xato 6: Key propini unutish

```tsx
// ❌ NOTO'G'RI — key yo'q
{talabalar.map((t) => <TalabaElement talaba={t} />)}
// Warning: Each child in a list should have a unique "key" prop

// ✅ TO'G'RI
{talabalar.map((t) => <TalabaElement key={t.id} talaba={t} />)}
```

---

## 7. AMALIY MASHQLAR

> **Ko'rsatma:** Har bir mashqni o'zingiz yozing — ko'chirmasdan!

---

### 📝 1-Mashq: Oddiy — Rang tanlash

```
Vazifa: Rang tanlash komponenti yarating
- useState bilan tanlangan rangni saqlang
- Bir nechta "tugma" renklar ko'rsating
- Tanlangan rang fonida katta to'rtburchak chizing
- Props orqali boshlang'ich rangni qabul qiling

Interface:
interface RangTanlashProps {
  boshlangichRang?: string;
  ranglar: string[];
}
```

---

### 📝 2-Mashq: O'rta — Todo App

```
Vazifa: Oddiy Todo (vazifalar) ilovasini yarating
- Vazifalarni qo'shish (matn input + tugma)
- Bajarilgan deb belgilash (checkbox)
- O'chirish
- Bajarilmaganlarni alohida filtrlash

Types:
interface Vazifa {
  id: number;
  matn: string;
  bajarilgan: boolean;
  yaratilgan: Date;
}
```

---

### 📝 3-Mashq: O'rta — Kitob ro'yxati

```
Vazifa: Kitob katalogini yarating
- Kitob qo'shish (nomi, muallifi, sahifalar soni, yili)
- Ro'yxatda ko'rsatish
- Muallif bo'yicha filtrlash
- "O'qidim" deb belgilash

Types:
interface Kitob {
  id: number;
  nomi: string;
  muallif: string;
  sahifalar: number;
  yili: number;
  oqilgan: boolean;
}
```

---

### 📝 4-Mashq: Murakkab — Mahsulot do'koni

```
Vazifa: Mahsulot ro'yxati va savatcha
- Mahsulotlar ro'yxatini ko'rsating (8-10 ta namunaviy)
- Savatga qo'shish tugmasi
- Savatdagi mahsulotlar soni va umumiy narx
- Savatchadan olib tashlash

Types:
interface Mahsulot {
  id: number;
  nomi: string;
  narxi: number;
  rasm: string;
  kategoriya: string;
}

interface SavatchaElement {
  mahsulot: Mahsulot;
  miqdor: number;
}
```

---

### 📝 5-Mashq: Ilg'or — API bilan ishlash

```
Vazifa: JSONPlaceholder API dan foydalanuvchilarni oling
URL: https://jsonplaceholder.typicode.com/users

- useEffect bilan API so'rovi yuboring
- Yuklanayotgan holat (loading)
- Xato holat (error)
- Foydalanuvchilarni ro'yxatda ko'rsating

Types:
interface ApiUser {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
  company: {
    name: string;
  };
}

interface HolatTuri {
  data: ApiUser[];
  yuklanmoqda: boolean;
  xato: string | null;
}
```

---

## 🏁 XULOSA VA KEYINGI QADAMLAR

### O'rgandingiz:
- ✅ TypeScript asosiy tiplari
- ✅ React + TypeScript komponenti yaratish
- ✅ Props tipini ta'riflash (interface)
- ✅ useState tiplar bilan ishlatish
- ✅ Event handling tiplashtirish
- ✅ Form validatsiyasi
- ✅ CRUD operatsiyalari

### Keyingi mavzular:
1. **useEffect** — yon effektlar va API
2. **useCallback / useMemo** — performance optimizatsiya
3. **Custom Hooks** — takrorlanadigan logikani ajratish
4. **React Router** — sahifalar orasida o'tish
5. **Context API** — global holat
6. **Zustand / Redux Toolkit** — katta loyihalar uchun holat
7. **React Query / SWR** — server holati
8. **Zod** — schema validatsiya

### Foydali manbalar:
- 📖 TypeScript hujjati: https://www.typescriptlang.org/docs/
- 📖 React hujjati: https://react.dev
- 📖 React + TypeScript cheatsheet: https://react-typescript-cheatsheet.netlify.app

---

*Muvaffaqiyat tilaymiz! 🚀*
*Har bir mashqni bajaring — faqat o'qish yetarli emas!*
