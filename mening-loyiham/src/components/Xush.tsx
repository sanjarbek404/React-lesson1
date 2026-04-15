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