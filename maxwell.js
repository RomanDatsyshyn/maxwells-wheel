// Всі данні записуюсься в системі СІ
let r0 = 0.01; // Радіус палки
let m = 0.5; // Маса колеса і палки (в КГ)
let R = 0.1; // Радіус колеса (в метрах)
let h = 0.5; // Довжина нитки (в метрах)
const g = 9.8; // Константа вільного падіння

// 2 пункт - Момент інерції
let I = (1 / 2) * m * r0 * r0 + (1 / 2) * m * (R * R + r0 * r0);
// 1 пункт - Тангенціальне прискорення
let a_ = (m * r0 * r0 * g) / I;
// 3 пункт - Періуд коливань
let T = (2 / r0) * Math.sqrt((h * I) / (m * g));
// 4 пункт - Сила натягу
let F_ = m * g - m * a_;
//////////////////// 5 пункт ////////////////////
let OMEGA = (2 * Math.PI) / T; // 5.1
let Phi = OMEGA * r0; // 5.2
let DELTA_P = 2 * m * Phi; // 5.3
let DELTA_T = (Math.PI * r0) / Phi; // 5.4
// 5.5 - Додаткова сила натягу
let F = DELTA_P / DELTA_T;

console.log("I = " + I);
console.log("aj = " + a_);
console.log("T = " + T);
console.log("FH = " + F_);
console.log("OMEGA = " + OMEGA);
console.log("Phi = " + Phi);
console.log("Delta P = " + DELTA_P);
console.log("Delta t = " + DELTA_T);
console.log("F = " + F);
