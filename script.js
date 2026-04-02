document.getElementById("healthForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const symptom = document.getElementById("mainSymptom").value || "해당 증상";
  const energy = document.getElementById("energy").value;
  const sleep = document.getElementById("sleep").value;
  const stress = document.getElementById("stress").value;
  const digestion = document.getElementById("digestion").value;

  // ── 패턴 분류 ──────────────────────────────────────────────
  const lowVitality  = energy === "low" && sleep === "bad";
  const gutStress    = stress === "high" && digestion === "bad";
  const stressOnly   = stress === "high" && digestion === "good";
  const digestOnly   = digestion === "bad" && stress !== "high";
  const generalFatigue = energy === "low" && sleep === "good";

  // ── 기능의학 분석 ──────────────────────────────────────────
  let functionalMed = "";
  if (lowVitality) {
    functionalMed = `HPA 축(시상하부–뇌하수체–부신) 과활성화로 인한 <strong>코르티솔 조절 이상</strong>이 의심됩니다.
      만성 피로·수면 장애가 동반될 경우 미토콘드리아 에너지 생산 저하와 함께
      <strong>산화 스트레스 누적</strong>이 ${symptom}의 기저 원인일 수 있습니다.`;
  } else if (gutStress) {
    functionalMed = `<strong>장-뇌 축(Gut-Brain Axis)</strong> 불균형 패턴입니다.
      만성 스트레스는 장 점막 투과성을 높여 <strong>장누수(Leaky Gut)</strong>를 유발하고,
      전신 저강도 염증(LGI)이 ${symptom}의 감수성을 높였을 가능성이 큽니다.`;
  } else if (stressOnly) {
    functionalMed = `교감신경 항진 상태가 지속되면서 <strong>부신 피로</strong> 초기 단계에 진입했을 수 있습니다.
      코르티솔 과분비 → 인슐린 저항성 상승 → 염증 경로 활성화 순으로
      ${symptom}이 악화될 수 있습니다.`;
  } else if (digestOnly) {
    functionalMed = `소화 기능 저하는 <strong>영양소 흡수 불량</strong>과 연결됩니다.
      마그네슘·비타민 B군·아연 결핍이 ${symptom}과 에너지 저하에 기여할 수 있습니다.`;
  } else if (generalFatigue) {
    functionalMed = `수면이 충분한데도 피로가 지속된다면 <strong>세포 수준의 에너지 대사 저하</strong>를 고려해야 합니다.
      갑상선 기능 저하, 철분·비타민 D 결핍, 혈당 조절 불안정이 원인일 수 있습니다.`;
  } else {
    functionalMed = `현재 패턴상 급성 이상 신호는 뚜렷하지 않으나, ${symptom}의 원인을
      <strong>영양·호르몬·염증</strong> 세 축에서 점검할 것을 권장합니다.`;
  }

  // ── 영양학적 분석 ──────────────────────────────────────────
  let nutrition = "";
  if (lowVitality) {
    nutrition = `<strong>마그네슘</strong>(신경 안정·수면), <strong>코엔자임 Q10</strong>(미토콘드리아 지원),
      <strong>아답토겐(ashwagandha, rhodiola)</strong> 보충을 고려하세요.
      항산화 식품(베리류, 녹황색 채소)과 오메가-3 섭취 강화가 권장됩니다.`;
  } else if (gutStress) {
    nutrition = `<strong>프로바이오틱스·프리바이오틱스</strong>로 장내 마이크로바이옴 회복이 우선입니다.
      L-글루타민(장벽 복구), 아연, 비타민 D를 보충하고
      밀가루·정제당·가공식품을 4주 이상 제한하는 <strong>장 회복 식이</strong>를 권장합니다.`;
  } else if (stressOnly) {
    nutrition = `<strong>비타민 B5(판토텐산)</strong>은 부신 기능을 직접 지원합니다.
      마그네슘·비타민 C를 충분히 섭취하고, 카페인·알코올을 줄여
      부신 회복을 돕는 식습관을 유지하세요.`;
  } else if (digestOnly) {
    nutrition = `소화 효소 보충과 함께 <strong>발효식품(김치·된장·청국장)</strong>을 매일 섭취하세요.
      식이섬유(채소·귀리)를 늘리고, 식사 시 충분히 씹어 소화 부담을 줄이는 것이 중요합니다.`;
  } else {
    nutrition = `균형 잡힌 <strong>항염 식단</strong>(지중해식 기반)을 유지하고,
      수분 섭취(체중 × 30ml/일)를 충분히 확보하세요.`;
  }

  // ── 한의학적 분석 ──────────────────────────────────────────
  let korean = "";
  if (lowVitality) {
    korean = `한의학적으로 <strong>기혈(氣血) 부족</strong> 및 <strong>신허(腎虛)</strong> 패턴에 해당합니다.
      신장의 원기(原氣)가 소모되어 수면 중 회복력이 저하된 상태로,
      <strong>쌍화탕·귀비탕</strong> 계열 처방과 함께 족삼리(ST36)·삼음교(SP6) 자침을 고려할 수 있습니다.`;
  } else if (gutStress) {
    korean = `<strong>간기울결(肝氣鬱結)</strong>이 비위(脾胃)를 억압하는 <strong>간비불화(肝脾不和)</strong> 패턴입니다.
      스트레스(간 기운 울체)가 소화(비위) 기능을 직접 방해하는 전형적 양상으로,
      <strong>시호소간탕·반하사심탕</strong> 계열이 적합하며 태충(LV3) 자침을 권장합니다.`;
  } else if (stressOnly) {
    korean = `<strong>심신불교(心腎不交)</strong> 또는 간화(肝火) 상승 패턴으로 볼 수 있습니다.
      정신적 긴장이 지속되면 심화(心火)가 올라가 ${symptom}을 악화시킬 수 있어
      <strong>황련해독탕·천왕보심단</strong> 계열의 처방을 고려합니다.`;
  } else if (digestOnly) {
    korean = `<strong>비허(脾虛)</strong>, 즉 소화 기관의 기능적 허약 상태입니다.
      비(脾)의 운화(運化) 기능이 저하되어 영양 흡수가 떨어진 상태로,
      <strong>사군자탕·육군자탕</strong> 계열 처방과 비수(BL20)·중완(CV12) 자침이 도움이 됩니다.`;
  } else {
    korean = `전반적 기혈 순환은 양호한 편이나, <strong>정기(正氣) 보강</strong>을 위해
      계절에 맞는 음식 섭취와 규칙적 생활 리듬 유지를 권장합니다.`;
  }

  // ── 양방(서양의학) 분석 ──────────────────────────────────────
  let western = "";
  if (lowVitality) {
    western = `<strong>자율신경계 이상</strong>(교감신경 과활성)과 연관된 만성 피로 증후군 가능성을 배제하기 위해
      갑상선 기능(TSH·Free T4), 부신 기능(아침 코르티솔), 혈중 비타민 D·B12·철분 수치 검사를 권장합니다.
      수면다원검사를 통해 수면무호흡증 여부도 확인하세요.`;
  } else if (gutStress) {
    western = `<strong>과민성 대장 증후군(IBS)</strong> 또는 기능성 소화 장애 가능성이 있습니다.
      만성 스트레스는 장 운동성과 내장 과민성을 직접 악화시킵니다.
      필요 시 위내시경·대장내시경, H. pylori 검사를 통해 기질적 원인을 먼저 배제하세요.`;
  } else if (stressOnly) {
    western = `지속적 스트레스는 <strong>교감신경-부신수질 축</strong>을 활성화해 혈압·혈당 상승,
      면역 조절 이상을 초래합니다. 혈압, 공복혈당, 코르티솔 리듬 검사를 통해
      스트레스로 인한 이차적 신체 변화를 모니터링하세요.`;
  } else if (digestOnly) {
    western = `소화 장애가 지속될 경우 <strong>소화 효소 분비 부족, 위산 과다/부족, 담즙 분비 이상</strong>을 검토해야 합니다.
      식후 불편감의 양상(팽만·역류·통증)을 구체적으로 기록해 소화기내과 진료 시 참고하세요.`;
  } else {
    western = `현재 뚜렷한 이상 징후는 없으나, ${symptom}이 2주 이상 지속된다면
      <strong>기본 혈액검사(CBC, CMP, 염증 수치 CRP)</strong>로 기저 원인을 확인하는 것이 안전합니다.`;
  }

  // ── 관리 방향 요약 ─────────────────────────────────────────
  const recommendations = [];

  if (sleep === "bad") recommendations.push("수면 위생 개선: 취침 1시간 전 스크린 차단, 일정한 기상 시간 유지");
  if (stress === "high") recommendations.push("미주신경 활성화 호흡법(4-7-8 호흡) 일 2회 실천");
  if (digestion === "bad") recommendations.push("식사 간격 4-5시간 유지, 과식·야식 제한");
  if (energy === "low") recommendations.push("과도한 고강도 운동 자제, 저강도 유산소(걷기 30분) 우선");
  recommendations.push("2-4주 증상 일지 기록 후 전문의 상담 권장");

  // ── HTML 생성 ──────────────────────────────────────────────
  const resultHTML = `
    <div class="result-card">
      <div class="result-header">
        <span class="result-icon">🧬</span>
        <h2>통합 건강 패턴 분석 결과</h2>
      </div>

      <div class="analysis-section">
        <div class="analysis-label functional">⚗️ 기능의학적 해석</div>
        <p>${functionalMed}</p>
      </div>

      <div class="analysis-section">
        <div class="analysis-label nutrition">🥗 영양학적 접근</div>
        <p>${nutrition}</p>
      </div>

      <div class="analysis-section">
        <div class="analysis-label korean-med">🌿 한의학적 해석</div>
        <p>${korean}</p>
      </div>

      <div class="analysis-section">
        <div class="analysis-label western-med">🏥 양방 의학적 관점</div>
        <p>${western}</p>
      </div>

      <h3>📌 우선 관리 방향</h3>
      <ul>
        ${recommendations.map(r => `<li>${r}</li>`).join("")}
      </ul>

      <p class="result-disclaimer">※ 본 분석은 참고 정보이며, 정확한 진단과 치료는 전문 의료인과 상담하시기 바랍니다.</p>
    </div>
  `;

  document.getElementById("result").innerHTML = resultHTML;
});
