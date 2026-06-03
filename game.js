const missions = [
  {
    id: 1,
    title: "First Day in the Shop",
    difficulty: "Beginner",
    xp: 50,
    cash: 75,
    story: "Mike gives you a quick tour. Before touching any vehicle, he asks what matters most on your first day.",
    choices: [
      { text: "Ask where the fastest cars are.", correct: false, result: "Mike laughs, but reminds you that speed comes after safety and fundamentals." },
      { text: "Learn shop safety, tool storage, and workflow.", correct: true, result: "Correct. Mike says every good technician starts with safe habits and clean workflow." },
      { text: "Start removing parts to show confidence.", correct: false, result: "Too risky. Mike stops you before you create extra work." }
    ],
    journal: "Mike: Good technicians do not rush. They verify, stay organized, and respect safety rules."
  },
  {
    id: 2,
    title: "Shop Hand Tools",
    difficulty: "Beginner",
    xp: 60,
    cash: 90,
    story: "A vehicle needs a basic inspection. Which tool habit shows the most professionalism?",
    choices: [
      { text: "Use the closest tool even if it is the wrong size.", correct: false, result: "That can round fasteners and damage customer vehicles." },
      { text: "Use the correct tool, correct size, and return it when done.", correct: true, result: "Correct. Clean tool habits make jobs faster and safer." },
      { text: "Borrow tools and leave them on the cowl.", correct: false, result: "That is how tools get lost or damage paint." }
    ],
    journal: "Tool lesson: Correct size, correct use, clean storage."
  },
  {
    id: 3,
    title: "Vehicle Lifting & Safety",
    difficulty: "Beginner",
    xp: 75,
    cash: 100,
    story: "You need to lift a vehicle on a hoist. What should you verify first?",
    choices: [
      { text: "Lift it quickly and adjust after it is in the air.", correct: false, result: "Unsafe. Always verify lift points before raising the vehicle." },
      { text: "Check lift points, balance, locks, and surroundings.", correct: true, result: "Correct. Mike says this is non-negotiable." },
      { text: "Only check if the customer is watching.", correct: false, result: "Professional work is the same whether anyone sees it or not." }
    ],
    journal: "Lift safety: verify lift points, balance, locks, and vehicle stability."
  },
  {
    id: 4,
    title: "Oil Change Service",
    difficulty: "Beginner",
    xp: 85,
    cash: 120,
    story: "A customer comes in for an oil change. What is the best final step before returning the car?",
    choices: [
      { text: "Start it, check leaks, verify level, reset reminder if needed.", correct: true, result: "Correct. The service is not done until it is verified." },
      { text: "Drain oil and send it immediately.", correct: false, result: "You must refill, verify level, and check for leaks." },
      { text: "Guess the oil capacity.", correct: false, result: "Always verify capacity and specification." }
    ],
    journal: "Oil service: correct spec, correct capacity, leak check, level check, reminder reset."
  },
  {
    id: 5,
    title: "Air Filter Service",
    difficulty: "Beginner",
    xp: 70,
    cash: 85,
    story: "During inspection, the engine air filter is dirty. What should you avoid?",
    choices: [
      { text: "Inspect the air box for debris.", correct: false, result: "That is actually a good step." },
      { text: "Leave clips loose after replacing the filter.", correct: true, result: "Correct. Loose airbox clips can cause unmetered air issues." },
      { text: "Verify the filter seats correctly.", correct: false, result: "That is exactly what you should do." }
    ],
    journal: "Air intake lesson: a loose air box can cause drivability problems."
  },
  {
    id: 6,
    title: "Meet Your First Engine",
    difficulty: "Beginner",
    xp: 90,
    cash: 130,
    story: "Mike points at an inline-4 engine and asks what the four strokes are.",
    choices: [
      { text: "Intake, compression, power, exhaust.", correct: true, result: "Correct. The four-stroke cycle is a foundation for diagnostics." },
      { text: "Fuel, spark, timing, exhaust.", correct: false, result: "Those are important, but not the four strokes." },
      { text: "Compression, expansion, cooling, charging.", correct: false, result: "That mixes different systems together." }
    ],
    journal: "Engine basics: intake, compression, power, exhaust."
  },
  {
    id: 7,
    title: "Battery Basics",
    difficulty: "Beginner",
    xp: 95,
    cash: 125,
    story: "A car cranks slowly. What should you verify before replacing the starter?",
    choices: [
      { text: "Battery state of charge and connection condition.", correct: true, result: "Correct. Low voltage can create misleading symptoms." },
      { text: "Replace the starter immediately.", correct: false, result: "Do not replace parts before testing the power source." },
      { text: "Ignore corrosion if the car still starts.", correct: false, result: "Corrosion can cause voltage drop and intermittent problems." }
    ],
    journal: "Electrical basics: verify battery health and connections before blaming components."
  },
  {
    id: 8,
    title: "Brake Inspection",
    difficulty: "Beginner",
    xp: 100,
    cash: 140,
    story: "A customer reports brake noise. What should your inspection include?",
    choices: [
      { text: "Pads only.", correct: false, result: "Pads matter, but the inspection needs to be broader." },
      { text: "Pads, rotors, hardware, calipers, leaks, and tire/wheel condition.", correct: true, result: "Correct. Brake complaints need a complete inspection." },
      { text: "Only test drive it and guess.", correct: false, result: "A test drive helps, but you still need physical inspection." }
    ],
    journal: "Brake inspections must include pads, rotors, hardware, calipers, leaks, and safety concerns."
  },
  {
    id: 9,
    title: "Cooling System Check",
    difficulty: "Beginner",
    xp: 110,
    cash: 150,
    story: "A vehicle has a low coolant complaint. What is the safest approach?",
    choices: [
      { text: "Open the radiator cap while hot.", correct: false, result: "Dangerous. Hot pressurized coolant can cause severe burns." },
      { text: "Let it cool, inspect level, pressure test, and check for leaks.", correct: true, result: "Correct. Safe testing comes first." },
      { text: "Add water and send it.", correct: false, result: "That does not diagnose the cause." }
    ],
    journal: "Cooling system safety: never open a hot pressurized system."
  },
  {
    id: 10,
    title: "First Diagnostic Walkthrough",
    difficulty: "Apprentice",
    xp: 125,
    cash: 175,
    story: "The check engine light is on. Mike asks for the correct diagnostic flow.",
    choices: [
      { text: "Read codes, verify concern, inspect data, test before replacing parts.", correct: true, result: "Correct. You are starting to think like a diagnostician." },
      { text: "Clear the code and return the car.", correct: false, result: "That does not fix the cause." },
      { text: "Replace the part named in the code.", correct: false, result: "Codes point to systems, not always bad parts." }
    ],
    journal: "Diagnostics: verify the concern, gather data, test, then repair."
  },
  {
    id: 25,
    title: "P0301 Cylinder 1 Misfire",
    difficulty: "Diagnostic",
    xp: 250,
    cash: 350,
    story: "Your first real diagnostic vehicle arrives: inline-4 engine, DTC P0301. Cylinder 1 is misfiring. What is the best first test?",
    choices: [
      { text: "Swap cylinder 1 coil or plug with another cylinder and see if the misfire follows.", correct: true, result: "Correct. The misfire follows the faulty component, confirming the cause." },
      { text: "Replace the engine.", correct: false, result: "Way too far. Start with basic ignition and fuel checks." },
      { text: "Clear codes and hope it does not return.", correct: false, result: "That avoids the diagnosis instead of solving it." }
    ],
    journal: "Misfire diagnosis: isolate spark, fuel, compression, and control. Swap testing can confirm a faulty coil or plug."
  }
];

const certs = [
  { id: "apprentice", name: "Apprentice Technician", reqLevel: 1 },
  { id: "maintenance", name: "Maintenance Service Technician", reqLevel: 3 },
  { id: "safety", name: "Shop Safety Certified", reqMission: 3 },
  { id: "diagnostic", name: "Entry Diagnostic Technician", reqLevel: 7, reqMission: 10 },
  { id: "misfire", name: "Misfire Diagnostic Certified", reqMission: 25 }
];

const achievements = [
  { id: "first_job", name: "First Job Completed", desc: "Complete your first mission.", check: s => s.completed.length >= 1 },
  { id: "five_jobs", name: "Getting Comfortable", desc: "Complete five missions.", check: s => s.completed.length >= 5 },
  { id: "level5", name: "Level 5 Tech", desc: "Reach level 5.", check: s => s.level >= 5 },
  { id: "diagnostic_first", name: "First Real Diagnosis", desc: "Complete the P0301 mission.", check: s => s.completed.includes(25) }
];

const levelReqs = [0, 100, 225, 375, 550, 750, 1000, 1300, 1650, 2050, 2500];

let state = JSON.parse(localStorage.getItem("engineQuestSave") || "null") || {
  xp: 0,
  cash: 0,
  level: 1,
  completed: [],
  journal: [],
  unlockedAchievements: []
};

function save() {
  localStorage.setItem("engineQuestSave", JSON.stringify(state));
}

function calcLevel() {
  let lvl = 1;
  for (let i = 1; i < levelReqs.length; i++) {
    if (state.xp >= levelReqs[i]) lvl = i + 1;
  }
  state.level = Math.min(lvl, 10);
}

function nextXp() {
  return levelReqs[state.level] || levelReqs[levelReqs.length - 1];
}

function render() {
  calcLevel();
  document.getElementById("level").textContent = state.level;
  document.getElementById("xp").textContent = state.xp;
  document.getElementById("nextXp").textContent = nextXp();
  document.getElementById("cash").textContent = state.cash;
  document.getElementById("xpFill").style.width = Math.min(100, (state.xp / nextXp()) * 100) + "%";

  const title = certs.filter(isCertUnlocked).slice(-1)[0]?.name || "Apprentice Technician";
  document.getElementById("playerTitle").textContent = title;

  renderProgress();
  renderMissions();
  renderJournal();
  renderCerts();
  updateAchievements();
  renderAchievements();
  save();
}

function renderProgress() {
  const list = document.getElementById("progressList");
  list.innerHTML = "";
  const items = [
    `Missions completed: ${state.completed.length}`,
    `Journal entries unlocked: ${state.journal.length}`,
    `Certifications unlocked: ${certs.filter(isCertUnlocked).length}/${certs.length}`,
    `Achievements unlocked: ${state.unlockedAchievements.length}/${achievements.length}`
  ];
  items.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    list.appendChild(li);
  });
}

function renderMissions() {
  const wrap = document.getElementById("missionList");
  wrap.innerHTML = "";
  missions.forEach(m => {
    const complete = state.completed.includes(m.id);
    const card = document.createElement("div");
    card.className = "mission-card";
    card.innerHTML = `
      <div class="mission-top">
        <div>
          <h3>${m.id}. ${m.title}</h3>
          <p>${m.story}</p>
        </div>
        <span class="badge">${m.difficulty}</span>
      </div>
      <p><b>Reward:</b> ${m.xp} XP / $${m.cash}</p>
      <p class="${complete ? "complete" : "incomplete"}">${complete ? "Completed" : "Available"}</p>
      <button class="primary">${complete ? "Replay Mission" : "Start Mission"}</button>
    `;
    card.querySelector("button").addEventListener("click", () => openMission(m));
    wrap.appendChild(card);
  });
}

function renderJournal() {
  const wrap = document.getElementById("journalList");
  wrap.innerHTML = "";
  if (state.journal.length === 0) {
    wrap.innerHTML = `<p>No journal entries unlocked yet. Complete missions to build your Technician Journal.</p>`;
    return;
  }
  state.journal.forEach((entry, i) => {
    const card = document.createElement("div");
    card.className = "journal-card";
    card.innerHTML = `<h3>Entry ${i + 1}</h3><p>${entry}</p>`;
    wrap.appendChild(card);
  });
}

function isCertUnlocked(c) {
  const levelOk = !c.reqLevel || state.level >= c.reqLevel;
  const missionOk = !c.reqMission || state.completed.includes(c.reqMission);
  return levelOk && missionOk;
}

function renderCerts() {
  const wrap = document.getElementById("certList");
  wrap.innerHTML = "";
  certs.forEach(c => {
    const unlocked = isCertUnlocked(c);
    const card = document.createElement("div");
    card.className = "cert-card";
    card.innerHTML = `
      <h3>${c.name}</h3>
      <p class="${unlocked ? "unlocked" : "locked"}">${unlocked ? "Unlocked" : "Locked"}</p>
      <p>${c.reqLevel ? "Requires Level " + c.reqLevel + ". " : ""}${c.reqMission ? "Requires Mission " + c.reqMission + "." : ""}</p>
    `;
    wrap.appendChild(card);
  });
}

function updateAchievements() {
  achievements.forEach(a => {
    if (!state.unlockedAchievements.includes(a.id) && a.check(state)) {
      state.unlockedAchievements.push(a.id);
    }
  });
}

function renderAchievements() {
  const wrap = document.getElementById("achievementList");
  wrap.innerHTML = "";
  achievements.forEach(a => {
    const unlocked = state.unlockedAchievements.includes(a.id);
    const card = document.createElement("div");
    card.className = "achievement-card";
    card.innerHTML = `
      <h3>${a.name}</h3>
      <p>${a.desc}</p>
      <p class="${unlocked ? "unlocked" : "locked"}">${unlocked ? "Unlocked" : "Locked"}</p>
    `;
    wrap.appendChild(card);
  });
}

function openMission(m) {
  document.getElementById("modal").classList.remove("hidden");
  document.getElementById("modalTitle").textContent = m.title;
  document.getElementById("modalStory").textContent = m.story;
  const choices = document.getElementById("choiceList");
  const result = document.getElementById("resultBox");
  result.classList.add("hidden");
  result.innerHTML = "";
  choices.innerHTML = "";
  m.choices.forEach(choice => {
    const btn = document.createElement("button");
    btn.className = "choice";
    btn.textContent = choice.text;
    btn.addEventListener("click", () => completeChoice(m, choice));
    choices.appendChild(btn);
  });
}

function completeChoice(m, choice) {
  const result = document.getElementById("resultBox");
  result.classList.remove("hidden");

  if (choice.correct) {
    const firstCompletion = !state.completed.includes(m.id);
    if (firstCompletion) {
      state.completed.push(m.id);
      state.xp += m.xp;
      state.cash += m.cash;
      if (!state.journal.includes(m.journal)) state.journal.push(m.journal);
      calcLevel();
      result.innerHTML = `<h3>Job Complete ✅</h3><p>${choice.result}</p><p>Earned ${m.xp} XP and $${m.cash}.</p>`;
    } else {
      result.innerHTML = `<h3>Replay Complete ✅</h3><p>${choice.result}</p><p>You already earned the reward for this mission.</p>`;
    }
  } else {
    result.innerHTML = `<h3>Try Again 🔧</h3><p>${choice.result}</p><p>Pick another action to finish the mission.</p>`;
  }

  render();
}

document.querySelectorAll(".tab").forEach(tab => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
    document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
    tab.classList.add("active");
    document.getElementById(tab.dataset.screen).classList.add("active");
  });
});

document.getElementById("closeModal").addEventListener("click", () => {
  document.getElementById("modal").classList.add("hidden");
});

document.getElementById("resetBtn").addEventListener("click", () => {
  if (confirm("Reset Engine Quest save data?")) {
    localStorage.removeItem("engineQuestSave");
    state = { xp: 0, cash: 0, level: 1, completed: [], journal: [], unlockedAchievements: [] };
    render();
  }
});

document.getElementById("startNextBtn").addEventListener("click", () => {
  const next = missions.find(m => !state.completed.includes(m.id)) || missions[0];
  openMission(next);
});

render();
