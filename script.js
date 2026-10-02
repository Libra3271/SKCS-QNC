// 신청 마감: 2026-10-12 23:59:59 (KST)
const DEADLINE = new Date("2026-10-12T23:59:59+09:00");

// ---------- 언어 전환 (기본: 영어) ----------
// 영어 문구는 index.html에 있고, 여기에는 한국어 번역만 둡니다.
const KO = {
  "nav.process": "진행절차",
  "nav.contact": "문의",
  "nav.apply": "신청하기",
  "hero.sub": "SKCS의 사이드 프로젝트 지원 프로그램 <strong>Quack N Click (QNC)</strong> 참가자를 모집합니다!<br class=\"hide-sm\" /> 모든 IGC 학생에게 열려있는 해커톤 형식의 프로젝트 지원 프로그램입니다.",
  "hero.apply": "지금 신청하기 →",
  "hero.process": "진행절차 보기",
  "hero.deadline": "신청 마감 <strong>10/12</strong>",
  "hero.note": "* 프로젝트 시작일은 폼 제출일 기준이므로 <strong>빨리 신청할수록 유리합니다.</strong>",
  "about.title": "아이디어만 가지고 있었다면,<br />이번에는 직접 만들어봅시다.",
  "about.c1.t": "직접 팀 구성",
  "about.c1.p": "남은 학기동안 함께할 팀원을 직접 찾고 팀을 꾸립니다.",
  "about.c2.t": "아이디어 발전",
  "about.c2.p": "팀원들과 아이디어를 구체화하고, 실현 가능한 개발 계획을 세웁니다.",
  "about.c3.t": "실제로 작동하는 결과물",
  "about.c3.p": "학기 말까지 실제로 작동하는 프로젝트를 개발·완성하는 것이 목표입니다.",
  "about.callout": "<strong>개발 경험이 많지 않아도 괜찮습니다.</strong><br />“이번 학기에는 내 프로젝트 하나를 제대로 만들어보고 싶다”면 QNC에 참여해보세요.",
  "prize.title": "🏆 총 <span class=\"prize-amount\">100만원+</span> 상당의 Prize",
  "prize.lead": "최종 QNC Award Ceremony에서는 총 1,000,000원 상당의 상품이 준비될 예정입니다.",
  "prize.h": "QNC는 결과물만 평가하지 않습니다",
  "prize.k1": "프로젝트 진행 과정",
  "prize.k2": "팀 내 협업",
  "prize.k3": "역할 수행",
  "prize.k4": "꾸준한 개발 과정",
  "prize.k5": "완성된 결과물",
  "prize.note": "좋은 결과물을 만드는 것뿐만 아니라, 팀이 함께 끝까지 프로젝트를 완성해 나가는 과정 자체가 QNC의 핵심입니다.",
  "process.title": "💻 QNC 진행절차",
  "s1.t": "참가 신청",
  "s1.p": "QNC 프로그램에 참가 신청합니다.",
  "s2.p": "함께 프로젝트를 진행할 팀원을 찾고 팀을 구성합니다.",
  "s3.p": "팀원들과 프로젝트 아이디어를 구체화하고 개발 계획을 세웁니다.",
  "s3.note": "임원진이 주기적으로 진행상황을 체크하며, 각 팀은 주어진 템플릿을 완성해야 합니다. → <a href=\"#templates\">템플릿 받기</a>",
  "s4.p": "중간 진행 단계에서 교수님 및 Project Manager의 피드백과 멘토링을 받습니다.",
  "s5.p": "피드백을 바탕으로 실제 프로젝트를 개발하고 완성합니다.",
  "s6.p": "학기 말 프로젝트를 발표하고, 교수님들의 평가를 통해 우수 프로젝트를 선정합니다.",
  "templates.title": "📂 QNC 템플릿",
  "templates.meta": "Word (.docx) · 영문",
  "templates.dl": "⬇ 다운로드",
  "t1.p": "팀 아이디어를 구체화하고 기록하는 문서입니다. 팀당 하나의 공유 문서로 학기 내내 사용하며, 방향이 바뀌면 무엇이 왜 바뀌었는지 함께 기록합니다.",
  "t2.p": "각 팀이 매주 PM / Advisor에게 제출하는 진행 보고서입니다. 새 주차 기록은 맨 위에 추가하고, 이전 기록은 지우지 않고 남겨둡니다.",
  "guide.h": "작성 가이드",
  "guide.1": "팀당 하나의 공유 문서를 사용하세요.",
  "guide.2": "답변은 질문당 1–3문장으로 간결하게 작성하세요.",
  "guide.3": "주장은 관찰, 출처, 테스트 결과, 결과물로 뒷받침하고, 검증되지 않은 내용은 “Assumption”으로 표시하세요.",
  "guide.4": "모르는 내용은 “To verify”와 함께 담당자와 기한을 적어주세요.",
  "guide.5": "모든 Action item에는 담당자 1명, 마감일, 명확한 완료 조건이 있어야 합니다.",
  "guide.6": "막히는 부분이 있다면 주간 체크인을 기다리지 말고 바로 알려주세요.",
  "support.title": "🛠 SKCS가 함께합니다",
  "support.lead": "QNC 기간 동안 SKCS는 각 팀의 프로젝트 진행 상황을 지속적으로 확인하고, 모든 팀이 프로젝트를 끝까지 완성할 수 있도록 필요한 지원을 제공할 예정입니다.",
  "support.muted": "막히는 부분이 있거나 도움이 필요하다면 언제든 SKCS Executive Team에 이야기해주세요.",
  "contact.apply": "📌 신청",
  "contact.deadline": "📌 신청 마감",
  "contact.date": "10/12",
  "contact.contact": "📌 문의",
  "contact.btn": "QNC 참가 신청하기 →",
};

const i18nEls = document.querySelectorAll("[data-i18n]");
const langButtons = document.querySelectorAll(".lang-switch button");
i18nEls.forEach((el) => (el.dataset.en = el.innerHTML));
let lang = "en";

function storedLang() {
  const param = new URLSearchParams(location.search).get("lang");
  if (param === "ko" || param === "en") return param;
  try {
    return localStorage.getItem("qnc-lang") === "ko" ? "ko" : "en";
  } catch {
    return "en";
  }
}

function setLang(next) {
  lang = next;
  i18nEls.forEach((el) => {
    el.innerHTML = lang === "ko" ? KO[el.dataset.i18n] ?? el.dataset.en : el.dataset.en;
  });
  document.documentElement.lang = lang;
  langButtons.forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.lang === lang)));
  try {
    localStorage.setItem("qnc-lang", lang);
  } catch {}
  updateCountdown();
}

langButtons.forEach((b) => b.addEventListener("click", () => setLang(b.dataset.lang)));

// ---------- 마감 카운트다운 ----------
function updateCountdown() {
  const el = document.getElementById("countdown");
  if (!el) return;
  const diff = DEADLINE - new Date();
  if (diff <= 0) {
    el.textContent = lang === "ko" ? "모집 마감" : "Closed";
    return;
  }
  const days = Math.floor(diff / 86400000);
  if (days >= 1) {
    el.textContent = `D-${days}`;
  } else {
    const h = Math.floor(diff / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    el.textContent = lang === "ko" ? `D-DAY ${h}시간 ${m}분` : `D-DAY ${h}h ${m}m`;
  }
}

setLang(storedLang());
setInterval(updateCountdown, 60000);

// ---------- 스크롤 시 섹션 페이드인 ----------
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
