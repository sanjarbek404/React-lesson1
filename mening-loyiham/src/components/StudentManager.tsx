// src/components/StudentManager.tsx

import { useState } from "react";

// Talaba turi
interface Talaba {
  id: number;
  ism: string;
  yosh: number;
  kurs: number;
  baho: number;
}

// Form ma'lumotlari
interface TalabaForm {
  ism: string;
  yosh: string;
  kurs: string;
  baho: string;
}

const StudentManager: React.FC = () => {
  // Talabalar ro'yxati
  const [talabalar, setTalabalar] = useState<Talaba[]>([
    { id: 1, ism: "Sardor", yosh: 20, kurs: 2, baho: 85 },
    { id: 2, ism: "Malika", yosh: 19, kurs: 1, baho: 92 },
  ]);

  // Form holati
  const [form, setForm] = useState<TalabaForm>({
    ism: "",
    yosh: "",
    kurs: "",
    baho: "",
  });

  // Tahrirlash holati
  const [tahrirlashId, setTahrirlashId] = useState<number | null>(null);

  // Form o'zgarishi
  const formOzgartirish = (key: keyof TalabaForm) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setForm({ ...form, [key]: event.target.value });
    };

  // Talaba qo'shish
  const talabaQoshish = (event: React.FormEvent) => {
    event.preventDefault();

    if (!form.ism.trim() || !form.yosh || !form.kurs || !form.baho) {
      alert("Barcha maydonlarni to'ldiring!");
      return;
    }

    const yangiTalaba: Talaba = {
      id: Date.now(),
      ism: form.ism,
      yosh: parseInt(form.yosh),
      kurs: parseInt(form.kurs),
      baho: parseInt(form.baho),
    };

    setTalabalar([...talabalar, yangiTalaba]);
    setForm({ ism: "", yosh: "", kurs: "", baho: "" });
  };

  // Talaba tahrirlash
  const talabaTahrirlash = (talaba: Talaba) => {
    setTahrirlashId(talaba.id);
    setForm({
      ism: talaba.ism,
      yosh: talaba.yosh.toString(),
      kurs: talaba.kurs.toString(),
      baho: talaba.baho.toString(),
    });
  };

  // Tahrirlashni saqlash
  const tahrirlashniSaqlash = (event: React.FormEvent) => {
    event.preventDefault();

    if (!tahrirlashId) return;

    setTalabalar(talabalar.map(talaba =>
      talaba.id === tahrirlashId
        ? {
            ...talaba,
            ism: form.ism,
            yosh: parseInt(form.yosh),
            kurs: parseInt(form.kurs),
            baho: parseInt(form.baho),
          }
        : talaba
    ));

    setTahrirlashId(null);
    setForm({ ism: "", yosh: "", kurs: "", baho: "" });
  };

  // Bekor qilish
  const bekorQilish = () => {
    setTahrirlashId(null);
    setForm({ ism: "", yosh: "", kurs: "", baho: "" });
  };

  // Talaba o'chirish
  const talabaOchish = (id: number) => {
    if (confirm("Haqiqatan ham o'chirmoqchimisiz?")) {
      setTalabalar(talabalar.filter(talaba => talaba.id !== id));
    }
  };

  // O'rtacha baho hisoblash
  const ortachaBaho = talabalar.length > 0
    ? (talabalar.reduce((sum, talaba) => sum + talaba.baho, 0) / talabalar.length).toFixed(1)
    : 0;

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
      <h2>🎓 Talabalar Menejer App</h2>

      {/* Statistika */}
      <div style={{ marginBottom: "20px", padding: "10px", backgroundColor: "#f0f0f0", borderRadius: "8px" }}>
        <p>Jami talabalar: <strong>{talabalar.length}</strong></p>
        <p>O'rtacha baho: <strong>{ortachaBaho}</strong></p>
      </div>

      {/* Form */}
      <form onSubmit={tahrirlashId ? tahrirlashniSaqlash : talabaQoshish} style={{ marginBottom: "30px", padding: "20px", border: "1px solid #ccc", borderRadius: "8px" }}>
        <h3>{tahrirlashId ? "Talabani tahrirlash" : "Yangi talaba qo'shish"}</h3>

        <div style={{ marginBottom: "10px" }}>
          <label>Ism: </label>
          <input
            type="text"
            value={form.ism}
            onChange={formOzgartirish("ism")}
            placeholder="Talaba ismi"
            required
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Yosh: </label>
          <input
            type="number"
            value={form.yosh}
            onChange={formOzgartirish("yosh")}
            placeholder="Yosh"
            min="16"
            max="30"
            required
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Kurs: </label>
          <input
            type="number"
            value={form.kurs}
            onChange={formOzgartirish("kurs")}
            placeholder="Kurs"
            min="1"
            max="4"
            required
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Baho: </label>
          <input
            type="number"
            value={form.baho}
            onChange={formOzgartirish("baho")}
            placeholder="Baho (0-100)"
            min="0"
            max="100"
            required
          />
        </div>

        <button type="submit" style={{ marginRight: "10px" }}>
          {tahrirlashId ? "Saqlash" : "Qo'shish"}
        </button>

        {tahrirlashId && (
          <button type="button" onClick={bekorQilish}>
            Bekor qilish
          </button>
        )}
      </form>

      {/* Talabalar ro'yxati */}
      <div>
        <h3>Talabalar ro'yxati</h3>
        {talabalar.length === 0 ? (
          <p>Hozircha talabalar yo'q</p>
        ) : (
          <div style={{ display: "grid", gap: "10px" }}>
            {talabalar.map(talaba => (
              <div key={talaba.id} style={{ padding: "15px", border: "1px solid #ddd", borderRadius: "8px", backgroundColor: "#fafafa" }}>
                <h4>{talaba.ism}</h4>
                <p>Yosh: {talaba.yosh}</p>
                <p>Kurs: {talaba.kurs}</p>
                <p>Baho: {talaba.baho} {talaba.baho >= 90 ? "🎉" : talaba.baho >= 70 ? "✅" : "⚠️"}</p>
                <button onClick={() => talabaTahrirlash(talaba)} style={{ marginRight: "10px" }}>
                  Tahrirlash
                </button>
                <button onClick={() => talabaOchish(talaba.id)} style={{ backgroundColor: "#ff4444", color: "white" }}>
                  O'chirish
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentManager;