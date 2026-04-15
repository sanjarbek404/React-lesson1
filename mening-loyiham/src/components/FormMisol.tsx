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