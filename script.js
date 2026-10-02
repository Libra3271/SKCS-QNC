// 신청 마감: 2026-10-12 23:59:59 (KST)
const DEADLINE = new Date("2026-10-12T23:59:59+09:00");

function updateCountdown() {
  const el = document.getElementById("countdown");
  if (!el) return;
  const diff = DEADLINE - new Date();
  if (diff <= 0) {
    el.textContent = "모집 마감";
    return;
  }
  const days = Math.floor(diff / 86400000);
  if (days >= 1) {
    el.textContent = `D-${days}`;
  } else {
    const h = Math.floor(diff / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    el.textContent = `D-DAY ${h}시간 ${m}분`;
  }
}
updateCountdown();
setInterval(updateCountdown, 60000);

// 스크롤 시 섹션 페이드인
const targets = document.querySelectorAll(".card, .callout, .step, .prize-criteria, .section-title, .lead, .resource");
targets.forEach((el) => el.classList.add("reveal"));
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  targets.forEach((el) => io.observe(el));
} else {
  targets.forEach((el) => el.classList.add("in"));
}
