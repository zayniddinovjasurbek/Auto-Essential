import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa6";
import { FaCalculator, FaGasPump, FaTools, FaExclamationTriangle } from "react-icons/fa";
import './tools.css'

const Tools = () => {
  const [width, setWidth] = useState("");
  const [aspect, setAspect] = useState("");
  const [rim, setRim] = useState("");
  const [result, setResult] = useState(null);

  const handleCalculate = (e) => {
    e.preventDefault();

    if (!width || !aspect || !rim) {
      setResult({ error: "Iltimos, barcha maydonlarni to'ldiring!" });
      return;
    }

    const w = parseFloat(width);
    const a = parseFloat(aspect);
    const r = parseFloat(rim);

    const sidewallHeightMM = (w * a) / 100;
    const sidewallHeightInch = sidewallHeightMM / 25.4;
    const diameterInch = r + sidewallHeightInch * 2;
    const diameterMM = diameterInch * 25.4;
    const circumferenceMM = diameterMM * Math.PI;

    setResult({
      sidewall: sidewallHeightMM.toFixed(1),
      diameter: diameterInch.toFixed(1),
      circumference: (circumferenceMM / 1000).toFixed(2),
    });
  };

  return (
    <div>
      {/* Banner */}
      <div className="tools-banner">
        <h1>Tools</h1>
        <h6>
          <Link to="/">Home</Link> <FaAngleRight /> <span>Tools</span>
        </h6>
      </div>

      {/* Tire Size Calculator */}
      <div className="tool-section">
        <div className="tool-header">
          <FaCalculator className="tool-icon" />
          <h2>Shina O'lchami Kalkulyatori</h2>
        </div>
        <p className="tool-desc">
          Shinangizning kenglik, profil va disk o'lchamini kiriting — biz sizga diametr va aylanma
          uzunligini hisoblab beramiz.
        </p>

        <form className="calc-form" onSubmit={handleCalculate}>
          <div className="calc-inputs">
            <div className="calc-group">
              <label>Kenglik (mm)</label>
              <input
                type="number"
                placeholder="285"
                value={width}
                onChange={(e) => setWidth(e.target.value)}
              />
            </div>
            <span className="calc-separator">/</span>
            <div className="calc-group">
              <label>Profil (%)</label>
              <input
                type="number"
                placeholder="65"
                value={aspect}
                onChange={(e) => setAspect(e.target.value)}
              />
            </div>
            <span className="calc-separator">R</span>
            <div className="calc-group">
              <label>Disk (dyuym)</label>
              <input
                type="number"
                placeholder="17"
                value={rim}
                onChange={(e) => setRim(e.target.value)}
              />
            </div>
            <button type="submit" className="calc-button">Hisoblash</button>
          </div>
        </form>

        {result && (
          <div className={`calc-result ${result.error ? "calc-error" : ""}`}>
            {result.error ? (
              <p>{result.error}</p>
            ) : (
              <>
                <div className="result-item">
                  <span>Yon devor balandligi</span>
                  <strong>{result.sidewall} mm</strong>
                </div>
                <div className="result-item">
                  <span>Umumiy diametr</span>
                  <strong>{result.diameter} dyuym</strong>
                </div>
                <div className="result-item">
                  <span>Aylanma uzunligi</span>
                  <strong>{result.circumference} m</strong>
                </div>
              </>
            )}
          </div>
        )}
      </div>

      {/* Tire Pressure Guide */}
      <div className="tool-section alt-bg">
        <div className="tool-header">
          <FaGasPump className="tool-icon" />
          <h2>Shina Bosimi Bo'yicha Qo'llanma</h2>
        </div>
        <p className="tool-desc">
          To'g'ri shina bosimi yoqilg'i sarfini kamaytiradi va shina umrini uzaytiradi.
        </p>

        <div className="pressure-grid">
          <div className="pressure-card">
            <h3>Yengil Avtomobil</h3>
            <p className="pressure-value">30–35 PSI</p>
            <span>Old va orqa g'ildiraklar uchun</span>
          </div>
          <div className="pressure-card">
            <h3>SUV / Krossover</h3>
            <p className="pressure-value">32–38 PSI</p>
            <span>Yuklamaga qarab o'zgaradi</span>
          </div>
          <div className="pressure-card">
            <h3>Yuk Mashinasi</h3>
            <p className="pressure-value">40–60 PSI</p>
            <span>Yuk og'irligiga qarab sozlang</span>
          </div>
          <div className="pressure-card">
            <h3>Motosikl</h3>
            <p className="pressure-value">28–32 PSI</p>
            <span>Old va orqa g'ildirak farq qilishi mumkin</span>
          </div>
        </div>
      </div>

      {/* Care Tips */}
      <div className="tool-section">
        <div className="tool-header">
          <FaTools className="tool-icon" />
          <h2>Shina Parvarishi Bo'yicha Maslahatlar</h2>
        </div>

        <div className="tips-grid">
          <div className="tip-card">
            <span className="tip-number">01</span>
            <h3>Muntazam Tekshiring</h3>
            <p>Har oyda kamida bir marta shina bosimi va protektor chuqurligini tekshiring.</p>
          </div>
          <div className="tip-card">
            <span className="tip-number">02</span>
            <h3>G'ildirakni Muvozanatlang</h3>
            <p>Har 10,000 km da g'ildiraklarni almashtirib, teng yeyilishini ta'minlang.</p>
          </div>
          <div className="tip-card">
            <span className="tip-number">03</span>
            <h3>Mavsumga Mos Shina</h3>
            <p>Qish va yoz mavsumlari uchun mos shinalardan foydalaning.</p>
          </div>
          <div className="tip-card">
            <span className="tip-number">04</span>
            <h3>Ortiqcha Yuklamang</h3>
            <p>Avtomobilingizning ruxsat etilgan yuk chegarasidan oshmang.</p>
          </div>
        </div>
      </div>

      {/* Warning banner */}
      <div className="tool-warning">
        <div className="warning-icon-wrap">
          <FaExclamationTriangle className="warning-icon" />
        </div>
        <p>
          <strong>Eslatma:</strong> Yuqoridagi ma'lumotlar umumiy tavsiya xarakteriga ega.
          Aniq ko'rsatkichlar uchun avtomobilingiz qo'llanmasiga yoki mutaxassisga murojaat qiling.
        </p>
      </div>
    </div>
  );
};

export default Tools