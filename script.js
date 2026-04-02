document.getElementById("healthForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const symptom = document.getElementById("mainSymptom").value;
  const energy = document.getElementById("energy").value;
  const sleep = document.getElementById("sleep").value;
  const stress = document.getElementById("stress").value;
  const digestion = document.getElementById("digestion").value;

  let analysis = `<h2>🧠 통합 패턴 해석</h2>`;

  if (energy === "low" && sleep === "bad") {
    analysis += `
      <p>
        ${symptom}은(는) 단순 국소 문제가 아니라
        회복력 저하와 자율신경 불균형과
        연관되어 있을 가능성이 큽니다.
      </p>
    `;
  }

  if (stress === "high" && digestion === "bad") {
    analysis += `
      <p>
        스트레스-장-면역 축의 불균형이
        염증 반응과 통증 민감도를
        증가시켰을 수 있습니다.
      </p>
    `;
  }

  analysis += `
    <h3>📌 관리 방향 요약</h3>
    <ul>
      <li>수면 리듬 회복 우선</li>
      <li>항염·회복 중심 영양 전략</li>
      <li>과도한 자극성 운동 회피</li>
    </ul>
  `;

  document.getElementById("result").innerHTML = analysis;
});
