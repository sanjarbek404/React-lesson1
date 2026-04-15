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