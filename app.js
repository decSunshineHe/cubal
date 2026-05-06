const STORAGE_KEY = "cubal-32-placement-state-v3";

const REGION_CONFIG = [
  { key: "southeast", label: "东南赛区", short: "东南" },
  { key: "southwest", label: "西南赛区", short: "西南" },
  { key: "northeast", label: "东北赛区", short: "东北" },
  { key: "northwest", label: "西北赛区", short: "西北" },
];

const PLAYIN_GROUPS = ["A组", "B组", "C组", "D组"];

const PLAYIN_SLOT_ORDER = [
  "W11B",
  "W7B",
  "W16B",
  "W3B",
  "W5B",
  "W14B",
  "W1B",
  "W10B",
];

const PLACEMENT_TEMPLATE = {
  quarterMeta: {
    Q1: { title: "上半区 / 1号 1/4 半区", half: "上半区" },
    Q2: { title: "上半区 / 2号 1/4 半区", half: "上半区" },
    Q3: { title: "下半区 / 3号 1/4 半区", half: "下半区" },
    Q4: { title: "下半区 / 4号 1/4 半区", half: "下半区" },
  },
  regionSeedToSlot: {
    southeast: {
      1: "W1A",
      2: "W12A",
      3: "W15A",
      4: "W6A",
      5: "W2B",
      6: "W15B",
      7: "W12B",
      8: "W5B",
    },
    southwest: {
      1: "W5A",
      2: "W16A",
      3: "W11A",
      4: "W2A",
      5: "W6B",
      6: "W11B",
      7: "W16B",
      8: "W1B",
    },
    northeast: {
      1: "W9A",
      2: "W4A",
      3: "W7A",
      4: "W14A",
      5: "W10B",
      6: "W3B",
      7: "W8B",
      8: "W13B",
    },
    northwest: {
      1: "W13A",
      2: "W8A",
      3: "W3A",
      4: "W10A",
      5: "W14B",
      6: "W7B",
      7: "W4B",
      8: "W9B",
    },
  },
  matches: [
    { id: "W1", half: "上半区", quarter: "Q1", slots: ["W1A", "W1B"] },
    { id: "W2", half: "上半区", quarter: "Q1", slots: ["W2A", "W2B"] },
    { id: "W3", half: "上半区", quarter: "Q1", slots: ["W3A", "W3B"] },
    { id: "W4", half: "上半区", quarter: "Q1", slots: ["W4A", "W4B"] },
    { id: "W5", half: "上半区", quarter: "Q2", slots: ["W5A", "W5B"] },
    { id: "W6", half: "上半区", quarter: "Q2", slots: ["W6A", "W6B"] },
    { id: "W7", half: "上半区", quarter: "Q2", slots: ["W7A", "W7B"] },
    { id: "W8", half: "上半区", quarter: "Q2", slots: ["W8A", "W8B"] },
    { id: "W9", half: "下半区", quarter: "Q3", slots: ["W9A", "W9B"] },
    { id: "W10", half: "下半区", quarter: "Q3", slots: ["W10A", "W10B"] },
    { id: "W11", half: "下半区", quarter: "Q3", slots: ["W11A", "W11B"] },
    { id: "W12", half: "下半区", quarter: "Q3", slots: ["W12A", "W12B"] },
    { id: "W13", half: "下半区", quarter: "Q4", slots: ["W13A", "W13B"] },
    { id: "W14", half: "下半区", quarter: "Q4", slots: ["W14A", "W14B"] },
    { id: "W15", half: "下半区", quarter: "Q4", slots: ["W15A", "W15B"] },
    { id: "W16", half: "下半区", quarter: "Q4", slots: ["W16A", "W16B"] },
  ],
};

const SAMPLE_STATE = {
  regions: {
    southeast: {
      top6: [
        "华侨大学",
        "中国矿业大学",
        "宁波大学",
        "上海交大",
        "华东师大",
        "浙江大学",
      ],
      playinSeeds: ["厦门大学", "安徽大学", "温州大学", "合肥工大"],
    },
    southwest: {
      top6: [
        "中南大学",
        "湖南师大",
        "贵州大学",
        "重庆文理",
        "云南师大",
        "西南交大",
      ],
      playinSeeds: ["广西大学", "电子科大", "西华大学", "成都大学"],
    },
    northeast: {
      top6: [
        "北京大学",
        "清华大学",
        "中国海洋大学",
        "吉林大学",
        "东北师大",
        "山东大学",
      ],
      playinSeeds: ["天津大学", "大连理工", "哈尔滨体院", "沈阳体院"],
    },
    northwest: {
      top6: [
        "太原理工",
        "西安交大",
        "河南大学",
        "山西大学",
        "内蒙古大学",
        "郑州大学",
      ],
      playinSeeds: ["西北工大", "兰州大学", "宁夏大学", "青海大学"],
    },
  },
  playinGroups: [
    {
      label: "A组",
      teams: ["厦门大学", "广西大学", "天津大学", "西北工大"],
      winner: "厦门大学",
    },
    {
      label: "B组",
      teams: ["安徽大学", "电子科大", "大连理工", "兰州大学"],
      winner: "电子科大",
    },
    {
      label: "C组",
      teams: ["温州大学", "西华大学", "哈尔滨体院", "宁夏大学"],
      winner: "宁夏大学",
    },
    {
      label: "D组",
      teams: ["合肥工大", "成都大学", "沈阳体院", "青海大学"],
      winner: "成都大学",
    },
  ],
  crossoverWinners: ["天津大学", "兰州大学", "温州大学", "沈阳体院"],
};

const state = {
  data: loadState(),
  lastResult: null,
};

const AUTO_REGENERATE_SECONDS = 60;
const autoRegenerate = {
  remaining: AUTO_REGENERATE_SECONDS,
  timerId: null,
  paused: false,
};

const FULLSCREEN_ROTATE_MS = 30000;
const fullscreenCarousel = {
  timerId: null,
  currentIndex: 0,
};

const fullscreenFabState = {
  originalParent: null,
  originalNextSibling: null,
};

const fullscreenBannerState = {
  originalParent: null,
  originalNextSibling: null,
};

document.addEventListener("DOMContentLoaded", () => {
  renderAllSections();
  wireActions();
  hydrateInputs();
  renderEmptyResults();
  renderRegionalPool();
  renderPlayinQualifiedPreview();
  if (hasAnyFilledData(state.data)) {
    generatePlacements({ silent: true });
  }
  startAutoRegenerateTimer();
});

function createEmptyRegionData() {
  return {
    top6: Array(6).fill(""),
    playinSeeds: Array(4).fill(""),
  };
}

function createEmptyState() {
  return {
    regions: Object.fromEntries(
      REGION_CONFIG.map((region) => [region.key, createEmptyRegionData()]),
    ),
    playinGroups: PLAYIN_GROUPS.map((label) => ({
      label,
      teams: Array(4).fill(""),
      winner: "",
    })),
    crossoverWinners: Array(4).fill(""),
  };
}

function loadState() {
  const fallback = createEmptyState();
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return fallback;
    }
    const parsed = JSON.parse(raw);
    REGION_CONFIG.forEach((region) => {
      const saved = parsed.regions?.[region.key];
      fallback.regions[region.key] = {
        top6: normalizeArray(saved?.top6, 6),
        playinSeeds: normalizeArray(saved?.playinSeeds, 4),
      };
    });
    fallback.playinGroups = PLAYIN_GROUPS.map((label, index) => ({
      label,
      teams: normalizeArray(parsed.playinGroups?.[index]?.teams, 4),
      winner:
        typeof parsed.playinGroups?.[index]?.winner === "string"
          ? parsed.playinGroups[index].winner
          : "",
    }));
    fallback.crossoverWinners = normalizeArray(parsed.crossoverWinners, 4);
    return fallback;
  } catch (error) {
    console.warn("Failed to load state:", error);
    return fallback;
  }
}

function normalizeArray(value, length) {
  const array = Array.isArray(value) ? value : [];
  return Array.from({ length }, (_, index) =>
    typeof array[index] === "string" ? array[index] : "",
  );
}

function saveState() {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state.data));
}

function renderAllSections() {
  renderTop6Sections();
  renderRegionalPlayinSeedSections();
  renderPlayinGroupSections();
  renderCrossoverSections();
}

function renderTop6Sections() {
  const container = document.getElementById("top6-sections");
  const template = document.getElementById("region-top6-template");
  container.innerHTML = "";

  REGION_CONFIG.forEach((region) => {
    const card = template.content.firstElementChild.cloneNode(true);
    card.querySelector("h3").textContent = region.label;
    const list = card.querySelector(".input-list");
    for (let index = 0; index < 6; index += 1) {
      list.appendChild(
        createInputRow({
          label: `${index + 1} 名`,
          placeholder: `输入 ${region.short} 第 ${index + 1} 名`,
          dataset: {
            scope: "region",
            region: region.key,
            group: "top6",
            index: String(index),
          },
        }),
      );
    }
    container.appendChild(card);
  });
}

function renderRegionalPlayinSeedSections() {
  const container = document.getElementById("regional-playin-sections");
  const template = document.getElementById("region-playin-seed-template");
  container.innerHTML = "";

  REGION_CONFIG.forEach((region) => {
    const card = template.content.firstElementChild.cloneNode(true);
    card.querySelector("h3").textContent = region.label;
    const list = card.querySelector(".input-list");
    for (let index = 0; index < 4; index += 1) {
      list.appendChild(
        createInputRow({
          label: `${index + 7} 名`,
          placeholder: `输入 ${region.short} 第 ${index + 7} 名`,
          dataset: {
            scope: "region",
            region: region.key,
            group: "playinSeeds",
            index: String(index),
          },
        }),
      );
    }
    container.appendChild(card);
  });
}

function renderPlayinGroupSections() {
  const container = document.getElementById("playin-group-sections");
  const template = document.getElementById("playin-group-template");
  container.innerHTML = "";

  PLAYIN_GROUPS.forEach((label, groupIndex) => {
    const card = template.content.firstElementChild.cloneNode(true);
    card.querySelector("h3").textContent = label;

    const memberList = card.querySelector(".group-members");
    for (let index = 0; index < 4; index += 1) {
      memberList.appendChild(
        createInputRow({
          label: `小组队伍 ${index + 1}`,
          placeholder: `输入 ${label} 第 ${index + 1} 支队伍`,
          dataset: {
            scope: "group-team",
            groupIndex: String(groupIndex),
            index: String(index),
          },
        }),
      );
    }

    const winnerList = card.querySelector(".group-winner");
    winnerList.appendChild(
      createInputRow({
        label: "小组第一",
        placeholder: `输入 ${label} 小组第一`,
        dataset: {
          scope: "group-winner",
          groupIndex: String(groupIndex),
          index: "0",
        },
      }),
    );

    container.appendChild(card);
  });
}

function renderCrossoverSections() {
  const container = document.getElementById("crossover-sections");
  const template = document.getElementById("crossover-template");
  container.innerHTML = "";

  const card = template.content.firstElementChild.cloneNode(true);
  card.querySelector("h3").textContent = "交叉赛";
  const list = card.querySelector(".crossover-winners");

  for (let index = 0; index < 4; index += 1) {
    list.appendChild(
      createInputRow({
        label: `晋级 ${index + 1}`,
        placeholder: `输入交叉赛晋级队 ${index + 1}`,
        dataset: { scope: "crossover", index: String(index) },
      }),
    );
  }

  container.appendChild(card);
}

function createInputRow({ label, placeholder, dataset }) {
  const wrapper = document.createElement("label");
  wrapper.className = "input-row";

  const chip = document.createElement("span");
  chip.className = "seed-chip";
  chip.textContent = label;

  const input = document.createElement("input");
  input.className = "team-input";
  input.type = "text";
  input.placeholder = placeholder;
  input.autocomplete = "off";
  Object.entries(dataset).forEach(([key, value]) => {
    input.dataset[key] = value;
  });
  input.addEventListener("input", handleInputChange);

  wrapper.append(chip, input);
  return wrapper;
}

function hydrateInputs() {
  document.querySelectorAll(".team-input").forEach((input) => {
    input.value = getInputValue(input.dataset) ?? "";
  });
}

function getInputValue(dataset) {
  if (dataset.scope === "region") {
    return state.data.regions[dataset.region][dataset.group][
      Number(dataset.index)
    ];
  }
  if (dataset.scope === "group-team") {
    return state.data.playinGroups[Number(dataset.groupIndex)].teams[
      Number(dataset.index)
    ];
  }
  if (dataset.scope === "group-winner") {
    return state.data.playinGroups[Number(dataset.groupIndex)].winner;
  }
  if (dataset.scope === "crossover") {
    return state.data.crossoverWinners[Number(dataset.index)];
  }
  return "";
}

function setInputValue(dataset, value) {
  if (dataset.scope === "region") {
    state.data.regions[dataset.region][dataset.group][Number(dataset.index)] =
      value;
  } else if (dataset.scope === "group-team") {
    state.data.playinGroups[Number(dataset.groupIndex)].teams[
      Number(dataset.index)
    ] = value;
  } else if (dataset.scope === "group-winner") {
    state.data.playinGroups[Number(dataset.groupIndex)].winner = value;
  } else if (dataset.scope === "crossover") {
    state.data.crossoverWinners[Number(dataset.index)] = value;
  }
}

function handleInputChange(event) {
  setInputValue(event.currentTarget.dataset, event.currentTarget.value);
  saveState();
  clearMessages();
  renderRegionalPool();
  renderPlayinQualifiedPreview();
  if (hasAnyFilledData(state.data)) {
    validateAndMarkInputs();
  }
}

function wireActions() {
  const generateBtn = document.getElementById("generate-btn");
  const generateInlineBtn = document.getElementById("generate-inline-btn");
  const generateFabBtn = document.getElementById("generate-fab-btn");
  const timerToggleFabBtn = document.getElementById("timer-toggle-fab-btn");
  const fullscreenBtn = document.getElementById("toggle-fullscreen-btn");
  const bracketSection = document.querySelector(".bracket-section");
  const bracketBoard = document.getElementById("bracket-board");
  const renderImageBtn = document.getElementById("render-image-btn");
  const resetSampleBtn = document.getElementById("reset-sample-btn");
  if (generateBtn) {
    generateBtn.addEventListener("click", () => {
      generatePlacements();
      resetAutoRegenerateTimer();
    });
  }
  if (generateInlineBtn) {
    generateInlineBtn.addEventListener("click", () => {
      generatePlacements();
      resetAutoRegenerateTimer();
    });
  }
  if (generateFabBtn) {
    generateFabBtn.addEventListener("click", () => {
      generatePlacements();
      resetAutoRegenerateTimer();
    });
  }
  if (timerToggleFabBtn) {
    timerToggleFabBtn.addEventListener("click", toggleAutoRegeneratePaused);
  }
  if (renderImageBtn) {
    renderImageBtn.addEventListener("click", renderNationalViewImagePreview);
  }
  if (fullscreenBtn && bracketSection) {
    fullscreenBtn.addEventListener("click", () =>
      toggleBracketFullscreen(bracketSection, fullscreenBtn),
    );
    document.addEventListener("fullscreenchange", () =>
      handleFullscreenChange(bracketSection, fullscreenBtn),
    );
  }
  if (resetSampleBtn) {
    resetSampleBtn.addEventListener("click", fillSampleData);
  }
  document.querySelectorAll(".tab-button").forEach((button) => {
    button.addEventListener("click", () =>
      activateTab(button.dataset.tabTarget),
    );
  });
  if (bracketBoard) {
    bracketBoard.addEventListener("click", (event) => {
      const badge = event.target.closest(".js-half-badge");
      if (!badge) {
        return;
      }
      manuallySwitchHalfInFullscreen();
    });
  }
}

function updateGenerateFabLabel() {
  const fab = document.getElementById("generate-fab-btn");
  if (!fab) {
    return;
  }
  fab.textContent = `重新生成落位（${autoRegenerate.remaining}s）`;
}

function resetAutoRegenerateTimer() {
  autoRegenerate.remaining = AUTO_REGENERATE_SECONDS;
  updateGenerateFabLabel();
}

function startAutoRegenerateTimer() {
  if (autoRegenerate.timerId) {
    clearInterval(autoRegenerate.timerId);
  }
  resetAutoRegenerateTimer();
  updateTimerToggleFabLabel();
  autoRegenerate.timerId = window.setInterval(() => {
    if (autoRegenerate.paused) {
      return;
    }
    autoRegenerate.remaining -= 1;
    if (autoRegenerate.remaining <= 0) {
      generatePlacements({ silent: true });
      autoRegenerate.remaining = AUTO_REGENERATE_SECONDS;
    }
    updateGenerateFabLabel();
  }, 1000);
}

function updateTimerToggleFabLabel() {
  const toggleBtn = document.getElementById("timer-toggle-fab-btn");
  if (!toggleBtn) {
    return;
  }
  toggleBtn.textContent = autoRegenerate.paused ? "继续定时器" : "暂停定时器";
}

function toggleAutoRegeneratePaused() {
  autoRegenerate.paused = !autoRegenerate.paused;
  updateTimerToggleFabLabel();
}

async function toggleBracketFullscreen(section, button) {
  if (document.fullscreenElement === section) {
    await document.exitFullscreen();
    return;
  }
  await section.requestFullscreen();
}

function handleFullscreenChange(section, button) {
  const isFullscreen = document.fullscreenElement === section;
  const titleBanner = document.getElementById("fullscreen-title-banner");
  button.textContent = isFullscreen ? "退出全屏" : "全屏展示";
  if (isFullscreen) {
    mountFullscreenBanner(section, titleBanner);
    mountFloatingButtonIntoFullscreen(section);
    startFullscreenCarousel();
  } else {
    stopFullscreenCarousel();
    showAllHalfPosters();
    restoreFloatingButtonFromFullscreen();
    restoreFullscreenBanner(titleBanner);
  }
}

function getHalfPosters() {
  return Array.from(document.querySelectorAll(".bracket-poster"));
}

function showAllHalfPosters() {
  getHalfPosters().forEach((poster) => {
    poster.classList.remove("is-hidden");
  });
}

function showCarouselPoster(index) {
  const posters = getHalfPosters();
  if (!posters.length) {
    return;
  }
  const safeIndex =
    ((index % posters.length) + posters.length) % posters.length;
  posters.forEach((poster, posterIndex) => {
    poster.classList.toggle("is-hidden", posterIndex !== safeIndex);
  });
  fullscreenCarousel.currentIndex = safeIndex;
}

function startFullscreenCarousel() {
  stopFullscreenCarousel();
  const posters = getHalfPosters();
  if (posters.length <= 1) {
    showAllHalfPosters();
    return;
  }
  showCarouselPoster(fullscreenCarousel.currentIndex);
  scheduleNextFullscreenCarouselTick();
}

function stopFullscreenCarousel() {
  if (fullscreenCarousel.timerId) {
    clearTimeout(fullscreenCarousel.timerId);
    fullscreenCarousel.timerId = null;
  }
}

function scheduleNextFullscreenCarouselTick() {
  stopFullscreenCarousel();
  fullscreenCarousel.timerId = window.setTimeout(() => {
    const section = document.querySelector(".bracket-section");
    if (document.fullscreenElement !== section) {
      stopFullscreenCarousel();
      return;
    }
    showCarouselPoster(fullscreenCarousel.currentIndex + 1);
    scheduleNextFullscreenCarouselTick();
  }, FULLSCREEN_ROTATE_MS);
}

function mountFloatingButtonIntoFullscreen(section) {
  const fab = document.getElementById("generate-fab-btn");
  const timerFab = document.getElementById("timer-toggle-fab-btn");
  [fab, timerFab].forEach((button) => {
    if (!button) {
      return;
    }
    if (!fullscreenFabState.originalParent) {
      fullscreenFabState.originalParent = button.parentElement;
      fullscreenFabState.originalNextSibling = button.nextSibling;
    }
    section.appendChild(button);
    button.classList.add("is-in-fullscreen");
  });
}

function restoreFloatingButtonFromFullscreen() {
  const fab = document.getElementById("generate-fab-btn");
  const timerFab = document.getElementById("timer-toggle-fab-btn");
  if (!fullscreenFabState.originalParent) {
    return;
  }
  const { originalParent, originalNextSibling } = fullscreenFabState;
  [fab, timerFab].forEach((button) => {
    if (!button) {
      return;
    }
    if (
      originalNextSibling &&
      originalNextSibling.parentNode === originalParent
    ) {
      originalParent.insertBefore(button, originalNextSibling);
    } else {
      originalParent.appendChild(button);
    }
    button.classList.remove("is-in-fullscreen");
  });
}

function mountFullscreenBanner(section, banner) {
  if (!banner) {
    return;
  }
  if (!fullscreenBannerState.originalParent) {
    fullscreenBannerState.originalParent = banner.parentElement;
    fullscreenBannerState.originalNextSibling = banner.nextSibling;
  }
  section.appendChild(banner);
  banner.classList.add("is-visible");
  banner.setAttribute("aria-hidden", "false");
}

function restoreFullscreenBanner(banner) {
  if (!banner || !fullscreenBannerState.originalParent) {
    return;
  }
  const { originalParent, originalNextSibling } = fullscreenBannerState;
  if (
    originalNextSibling &&
    originalNextSibling.parentNode === originalParent
  ) {
    originalParent.insertBefore(banner, originalNextSibling);
  } else {
    originalParent.appendChild(banner);
  }
  banner.classList.remove("is-visible");
  banner.setAttribute("aria-hidden", "true");
}

function manuallySwitchHalfInFullscreen() {
  const section = document.querySelector(".bracket-section");
  if (document.fullscreenElement !== section) {
    return;
  }
  showCarouselPoster(fullscreenCarousel.currentIndex + 1);
  scheduleNextFullscreenCarouselTick();
}

function activateTab(targetId) {
  document.querySelectorAll(".tab-button").forEach((button) => {
    const active = button.dataset.tabTarget === targetId;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-selected", String(active));
  });
  document.querySelectorAll(".tab-panel").forEach((panel) => {
    const active = panel.id === targetId;
    panel.classList.toggle("is-active", active);
    panel.hidden = !active;
  });
}

function fillSampleData() {
  state.data = structuredClone(SAMPLE_STATE);
  saveState();
  hydrateInputs();
  renderRegionalPool();
  renderPlayinQualifiedPreview();
  generatePlacements();
}

function clearAllData() {
  state.data = createEmptyState();
  state.lastResult = null;
  saveState();
  hydrateInputs();
  clearMessages();
  renderRegionalPool();
  renderPlayinQualifiedPreview();
  renderEmptyResults();
  clearNationalImagePreview();
  setMessage("已清空全部录入数据。", "success");
}

function clearMessages() {
  const box = document.getElementById("message-box");
  if (!box) {
    return;
  }
  box.textContent = "";
  box.className = "message-box";
}

function setMessage(text, type) {
  const box = document.getElementById("message-box");
  if (!box) {
    return;
  }
  box.textContent = text;
  box.className = `message-box is-${type}`;
}

function validateAndMarkInputs() {
  const validation = validateState(state.data);
  document
    .querySelectorAll(".team-input")
    .forEach((input) => input.classList.remove("is-error"));

  validation.fieldIssues.forEach((issue) => {
    const field = document.querySelector(buildInputSelector(issue));
    field?.classList.add("is-error");
  });

  return validation;
}

function buildInputSelector(issue) {
  if (issue.scope === "region") {
    return `.team-input[data-scope="region"][data-region="${issue.region}"][data-group="${issue.group}"][data-index="${issue.index}"]`;
  }
  if (issue.scope === "group-team") {
    return `.team-input[data-scope="group-team"][data-group-index="${issue.groupIndex}"][data-index="${issue.index}"]`;
  }
  if (issue.scope === "group-winner") {
    return `.team-input[data-scope="group-winner"][data-group-index="${issue.groupIndex}"][data-index="0"]`;
  }
  return `.team-input[data-scope="crossover"][data-index="${issue.index}"]`;
}

function validateState(data) {
  const messages = [];
  const fieldIssues = [];

  REGION_CONFIG.forEach((region) => {
    const regionData = data.regions[region.key];
    const entries = [
      ...regionData.top6.map((team, index) => ({
        team,
        seedLabel: `${index + 1} 名`,
        group: "top6",
        index,
      })),
      ...regionData.playinSeeds.map((team, index) => ({
        team,
        seedLabel: `${index + 7} 名`,
        group: "playinSeeds",
        index,
      })),
    ];
    const seen = new Map();

    entries.forEach((entry) => {
      const trimmed = entry.team.trim();
      if (!trimmed) {
        messages.push(`${region.label}${entry.seedLabel}尚未填写队伍名称。`);
        fieldIssues.push({
          scope: "region",
          region: region.key,
          group: entry.group,
          index: String(entry.index),
        });
        return;
      }
      const normalized = normalizeTeam(trimmed);
      if (seen.has(normalized)) {
        messages.push(`${region.label}存在重复队伍：${trimmed}。`);
        fieldIssues.push({
          scope: "region",
          region: region.key,
          group: entry.group,
          index: String(entry.index),
        });
      } else {
        seen.set(normalized, true);
      }
    });
  });

  const regionalPool = getRegionalPlayinPool(data);
  const poolLookup = new Map(
    regionalPool.map((item) => [normalizeTeam(item.teamName), item]),
  );
  const groupedCounts = new Map();

  data.playinGroups.forEach((group, groupIndex) => {
    const localSet = new Set();
    group.teams.forEach((team, index) => {
      const trimmed = team.trim();
      if (!trimmed) {
        messages.push(
          `${group.label}第 ${index + 1} 个小组席位尚未填写队伍名称。`,
        );
        fieldIssues.push({
          scope: "group-team",
          groupIndex: String(groupIndex),
          index: String(index),
        });
        return;
      }
      const normalized = normalizeTeam(trimmed);
      if (!poolLookup.has(normalized)) {
        messages.push(
          `${group.label}中的 ${trimmed} 不在分区赛 7-10 名来源池中。`,
        );
        fieldIssues.push({
          scope: "group-team",
          groupIndex: String(groupIndex),
          index: String(index),
        });
      }
      if (localSet.has(normalized)) {
        messages.push(`${group.label}存在重复小组队伍：${trimmed}。`);
        fieldIssues.push({
          scope: "group-team",
          groupIndex: String(groupIndex),
          index: String(index),
        });
      } else {
        localSet.add(normalized);
      }
      groupedCounts.set(normalized, (groupedCounts.get(normalized) ?? 0) + 1);
    });

    const winner = group.winner.trim();
    if (!winner) {
      messages.push(`${group.label}小组第一尚未填写。`);
      fieldIssues.push({
        scope: "group-winner",
        groupIndex: String(groupIndex),
        index: "0",
      });
    } else {
      const normalized = normalizeTeam(winner);
      const groupTeamSet = new Set(
        group.teams.map((item) => normalizeTeam(item.trim())).filter(Boolean),
      );
      if (!groupTeamSet.has(normalized)) {
        messages.push(`${group.label}小组第一 ${winner} 不属于本组队伍。`);
        fieldIssues.push({
          scope: "group-winner",
          groupIndex: String(groupIndex),
          index: "0",
        });
      }
    }
  });

  regionalPool.forEach((item) => {
    const count = groupedCounts.get(normalizeTeam(item.teamName)) ?? 0;
    if (count !== 1) {
      messages.push(
        `${item.teamName} 在附加赛分组中应出现 1 次，当前为 ${count} 次。`,
      );
    }
  });

  const directQualifiers = getDirectQualifiers(data);
  const directSet = new Set(
    directQualifiers.map((item) => normalizeTeam(item.teamName)),
  );
  const playinGroupTeamSet = new Set(
    data.playinGroups.flatMap((group) =>
      group.teams.map((team) => normalizeTeam(team.trim())).filter(Boolean),
    ),
  );

  data.crossoverWinners.forEach((team, index) => {
    const trimmed = team.trim();
    if (!trimmed) {
      messages.push(`交叉赛晋级 ${index + 1} 尚未填写。`);
      fieldIssues.push({ scope: "crossover", index: String(index) });
      return;
    }
    const normalized = normalizeTeam(trimmed);
    if (!playinGroupTeamSet.has(normalized)) {
      messages.push(`交叉赛晋级队 ${trimmed} 不在附加赛分组名单中。`);
      fieldIssues.push({ scope: "crossover", index: String(index) });
    }
    if (directSet.has(normalized)) {
      messages.push(
        `交叉赛晋级队 ${trimmed} 已经作为小组第一直通，不能重复晋级。`,
      );
      fieldIssues.push({ scope: "crossover", index: String(index) });
    }
  });

  const allQualifiers = getAllPlayinQualifiers(data);
  const qualifierCounts = new Map();
  allQualifiers.forEach((item) => {
    const normalized = normalizeTeam(item.teamName);
    qualifierCounts.set(normalized, (qualifierCounts.get(normalized) ?? 0) + 1);
  });
  qualifierCounts.forEach((count, normalized) => {
    if (count > 1) {
      const teamName =
        allQualifiers.find(
          (item) => normalizeTeam(item.teamName) === normalized,
        )?.teamName ?? normalized;
      messages.push(`附加赛晋级名单存在重复队伍：${teamName}。`);
    }
  });

  return {
    valid: messages.length === 0,
    messages,
    fieldIssues,
  };
}

function hasAnyFilledData(data) {
  const regionFilled = REGION_CONFIG.some((region) => {
    const regionData = data.regions[region.key];
    return [...regionData.top6, ...regionData.playinSeeds].some(
      (item) => item.trim() !== "",
    );
  });
  const playinFilled =
    data.playinGroups.some((group) =>
      [...group.teams, group.winner].some((item) => item.trim() !== ""),
    ) || data.crossoverWinners.some((item) => item.trim() !== "");
  return regionFilled || playinFilled;
}

function normalizeTeam(teamName) {
  return teamName.trim().toLowerCase();
}

function getRegionalPlayinPool(data) {
  return REGION_CONFIG.flatMap((region) =>
    data.regions[region.key].playinSeeds
      .map((teamName, index) => ({
        regionKey: region.key,
        regionLabel: region.label,
        seed: index + 7,
        teamName: teamName.trim(),
      }))
      .filter((item) => item.teamName),
  );
}

function getDirectQualifiers(data) {
  const poolLookup = new Map(
    getRegionalPlayinPool(data).map((item) => [
      normalizeTeam(item.teamName),
      item,
    ]),
  );
  return data.playinGroups
    .map((group) => {
      const teamName = group.winner.trim();
      if (!teamName) {
        return null;
      }
      const source = poolLookup.get(normalizeTeam(teamName));
      return {
        teamName,
        source,
        sourceLabel: `${group.label} 第一`,
        path: "小组第一直通",
      };
    })
    .filter(Boolean);
}

function getCrossoverQualifiers(data) {
  const poolLookup = new Map(
    getRegionalPlayinPool(data).map((item) => [
      normalizeTeam(item.teamName),
      item,
    ]),
  );
  return data.crossoverWinners
    .map((teamName, index) => {
      const trimmed = teamName.trim();
      if (!trimmed) {
        return null;
      }
      return {
        teamName: trimmed,
        source: poolLookup.get(normalizeTeam(trimmed)),
        sourceLabel: `交叉赛晋级 ${index + 1}`,
        path: "2/3 名交叉赛晋级",
      };
    })
    .filter(Boolean);
}

function getAllPlayinQualifiers(data) {
  return [...getDirectQualifiers(data), ...getCrossoverQualifiers(data)];
}

function generatePlacements({ silent = false } = {}) {
  clearMessages();
  const validation = validateAndMarkInputs();
  const coreValidation = validateCoreForGeneration(state.data);
  if (!coreValidation.valid) {
    state.lastResult = null;
    renderEmptyResults();
    if (!silent) {
      setMessage("分区赛前 6 名仍有缺失或重复，请先修正后再生成。", "error");
    }
    return null;
  }

  const {
    teams: qualified32,
    usedPlaceholderPlayin,
    placeholderCount,
  } = buildQualifiedTeams(state.data);
  const placementRecords = applyPlacementTemplate(qualified32);
  const audit = auditPlacements(placementRecords);

  if (!audit.valid) {
    state.lastResult = null;
    renderEmptyResults();
    if (!silent) {
      setMessage("模板校验未通过，前四名落位规则被破坏。", "error");
    }
    return null;
  }

  const bracketView = buildBracketView(placementRecords);
  state.lastResult = { placementRecords, audit, bracketView };
  renderBracket(bracketView);
  renderPlayinQualifiedPreview();
  if (!silent) {
    if (usedPlaceholderPlayin) {
      setMessage(
        `全国赛 32 强落位已生成。附加赛名单未完整，已自动使用 ${placeholderCount} 个占位种子名（7/8号）。`,
        "success",
      );
    } else if (!validation.valid) {
      setMessage(
        "全国赛 32 强落位已生成。附加赛录入存在冲突，当前按已填晋级名单展示。",
        "success",
      );
    } else {
      setMessage("全国赛 32 强落位已生成。", "success");
    }
    activateTab("national-tab");
  }
  return state.lastResult;
}

function validateCoreForGeneration(data) {
  const messages = [];
  REGION_CONFIG.forEach((region) => {
    const top6 = data.regions[region.key].top6.map((item) => item.trim());
    const seen = new Set();
    top6.forEach((teamName, index) => {
      if (!teamName) {
        messages.push(`${region.label}${index + 1} 名未填写。`);
        return;
      }
      const normalized = normalizeTeam(teamName);
      if (seen.has(normalized)) {
        messages.push(`${region.label}前 6 名存在重复队伍：${teamName}。`);
      } else {
        seen.add(normalized);
      }
    });
  });
  return { valid: messages.length === 0, messages };
}

function buildQualifiedTeams(data) {
  const teams = [];

  REGION_CONFIG.forEach((region) => {
    data.regions[region.key].top6.forEach((teamName, index) => {
      teams.push({
        type: "regionDirect",
        regionKey: region.key,
        regionLabel: region.label,
        seed: index + 1,
        teamName: teamName.trim(),
        source: "分区赛直通",
      });
    });
  });

  const playinQualifiers = getAllPlayinQualifiers(data).filter(
    (item) => item.source?.regionKey,
  );
  const byRegion = new Map(REGION_CONFIG.map((region) => [region.key, []]));
  playinQualifiers.forEach((item) => {
    byRegion.get(item.source.regionKey)?.push(item);
  });

  let placeholderCount = 0;
  REGION_CONFIG.forEach((region) => {
    const regionItems = byRegion.get(region.key) ?? [];
    for (let index = 0; index < 2; index += 1) {
      const seed = 7 + index;
      const picked = regionItems[index];
      if (picked) {
        teams.push({
          type: "playin",
          seed,
          regionKey: region.key,
          regionLabel: region.label,
          teamName: picked.teamName,
          source: picked.path,
          sourceLabel: picked.sourceLabel,
        });
      } else {
        placeholderCount += 1;
        teams.push({
          type: "playin",
          seed,
          regionKey: region.key,
          regionLabel: region.label,
          teamName: `${seed}号种子${region.short}`,
          source: "附加赛占位",
          sourceLabel: `${seed}号种子`,
        });
      }
    }
  });

  return {
    teams,
    usedPlaceholderPlayin: placeholderCount > 0,
    placeholderCount,
  };
}

function applyPlacementTemplate(qualifiedTeams) {
  const drawSlotMap = buildDynamicDrawSlotMap(qualifiedTeams);
  return qualifiedTeams.map((team) => {
    const drawKey = `${team.regionKey}-${team.seed}`;
    const slotId =
      drawSlotMap.get(drawKey) ??
      PLACEMENT_TEMPLATE.regionSeedToSlot[team.regionKey][team.seed];
    const match = PLACEMENT_TEMPLATE.matches.find((item) =>
      item.slots.includes(slotId),
    );
    return {
      ...team,
      slotId,
      matchId: match.id,
      quarter: match.quarter,
      half: match.half,
    };
  });
}

function buildDynamicDrawSlotMap(qualifiedTeams) {
  const validTeams = qualifiedTeams.filter(
    (team) => team.regionKey && team.regionKey !== "unknown",
  );
  return drawAllSeedsWithConstraints(validTeams);
}

function drawAllSeedsWithConstraints(qualifiedTeams, maxAttempts = 4000) {
  const fallback = new Map();
  const regions = REGION_CONFIG.map((region) => region.key);
  const seeds = [1, 2, 3, 4, 5, 6, 7, 8];
  const seedPools = buildSeedSlotPools(seeds);
  const availableBySeed = new Map();
  for (let seed = 1; seed <= 8; seed += 1) {
    availableBySeed.set(
      seed,
      new Set(
        qualifiedTeams
          .filter((team) => team.seed === seed)
          .map((team) => team.regionKey),
      ),
    );
  }

  const top4Seeds = new Set([1, 2, 3, 4]);

  for (let attempt = 0; attempt < maxAttempts; attempt += 1) {
    const candidate = new Map();
    const usedSlots = new Set();
    let failed = false;

    for (const seed of seeds) {
      const seedRegions = regions.filter((regionKey) =>
        availableBySeed.get(seed)?.has(regionKey),
      );
      const slots = [...(seedPools.get(seed) ?? [])].filter(
        (slotId) => !usedSlots.has(slotId),
      );

      if (seedRegions.length !== slots.length || seedRegions.length === 0) {
        failed = true;
        break;
      }

      const mapping = findSeedAssignmentForConstraints(
        seed,
        seedRegions,
        slots,
        candidate,
        top4Seeds,
      );
      if (!mapping) {
        failed = true;
        break;
      }

      mapping.forEach((slotId, regionKey) => {
        candidate.set(`${regionKey}-${seed}`, slotId);
        usedSlots.add(slotId);
      });
    }

    if (failed) {
      continue;
    }

    const top4Pass = regions.every((regionKey) => {
      const s1 = candidate.get(`${regionKey}-1`);
      const s2 = candidate.get(`${regionKey}-2`);
      const s3 = candidate.get(`${regionKey}-3`);
      const s4 = candidate.get(`${regionKey}-4`);
      const m1 = getSlotMeta(s1);
      const m2 = getSlotMeta(s2);
      const m3 = getSlotMeta(s3);
      const m4 = getSlotMeta(s4);
      if (!m1 || !m2 || !m3 || !m4) {
        return false;
      }
      const quarterSet = new Set([
        m1.quarter,
        m2.quarter,
        m3.quarter,
        m4.quarter,
      ]);
      return (
        quarterSet.size === 4 && m1.half === m4.half && m2.half === m3.half
      );
    });

    const unitPass = checkUnitRegionUniqueness(candidate, regions);

    if (top4Pass && unitPass) {
      return candidate;
    }
  }

  REGION_CONFIG.forEach((region) => {
    [1, 2, 3, 4, 5, 6, 7, 8].forEach((seed) => {
      if (!availableBySeed.get(seed)?.has(region.key)) {
        return;
      }
      fallback.set(
        `${region.key}-${seed}`,
        PLACEMENT_TEMPLATE.regionSeedToSlot[region.key][seed],
      );
    });
  });
  return fallback;
}

function findSeedAssignmentForConstraints(
  seed,
  seedRegions,
  slots,
  candidate,
  top4Seeds,
) {
  const regionOrder = [...seedRegions];
  const slotOrder = [...slots];
  shuffleInPlace(regionOrder);
  shuffleInPlace(slotOrder);
  const mapping = new Map();
  const usedLocalSlots = new Set();

  function dfs(index) {
    if (index >= regionOrder.length) {
      return true;
    }

    const regionKey = regionOrder[index];
    for (let slotIndex = 0; slotIndex < slotOrder.length; slotIndex += 1) {
      const slotId = slotOrder[slotIndex];
      if (usedLocalSlots.has(slotId)) {
        continue;
      }

      if (
        top4Seeds.has(seed) &&
        !passesTop4PartialConstraint(
          candidate,
          mapping,
          regionKey,
          seed,
          slotId,
        )
      ) {
        continue;
      }
      if (
        !passesUnitPartialConstraint(
          candidate,
          mapping,
          regionKey,
          seed,
          slotId,
        )
      ) {
        continue;
      }

      mapping.set(regionKey, slotId);
      usedLocalSlots.add(slotId);
      if (dfs(index + 1)) {
        return true;
      }
      mapping.delete(regionKey);
      usedLocalSlots.delete(slotId);
    }
    return false;
  }

  return dfs(0) ? mapping : null;
}

function getAssignedSlot(candidate, mapping, regionKey, seed) {
  if (mapping && mapping.has(regionKey)) {
    return mapping.get(regionKey);
  }
  return candidate.get(`${regionKey}-${seed}`);
}

function passesTop4PartialConstraint(
  candidate,
  mapping,
  regionKey,
  seed,
  slotId,
) {
  const seedSlot = {
    1: getAssignedSlot(candidate, mapping, regionKey, 1),
    2: getAssignedSlot(candidate, mapping, regionKey, 2),
    3: getAssignedSlot(candidate, mapping, regionKey, 3),
    4: getAssignedSlot(candidate, mapping, regionKey, 4),
  };
  seedSlot[seed] = slotId;

  const metas = {};
  [1, 2, 3, 4].forEach((key) => {
    metas[key] = seedSlot[key] ? getSlotMeta(seedSlot[key]) : null;
  });

  const filledQuarters = [1, 2, 3, 4]
    .map((key) => metas[key]?.quarter)
    .filter(Boolean);
  if (new Set(filledQuarters).size !== filledQuarters.length) {
    return false;
  }

  if (metas[1] && metas[4] && metas[1].half !== metas[4].half) {
    return false;
  }
  if (metas[2] && metas[3] && metas[2].half !== metas[3].half) {
    return false;
  }
  return true;
}

function passesUnitPartialConstraint(
  candidate,
  mapping,
  regionKey,
  seed,
  slotId,
) {
  const slotSeedEntries = [];
  candidate.forEach((assignedSlot, key) => {
    const [rk, seedText] = key.split("-");
    slotSeedEntries.push({
      regionKey: rk,
      seed: Number(seedText),
      slotId: assignedSlot,
    });
  });
  if (mapping) {
    mapping.forEach((mappedSlotId, mappedRegionKey) => {
      slotSeedEntries.push({
        regionKey: mappedRegionKey,
        seed,
        slotId: mappedSlotId,
      });
    });
  }
  slotSeedEntries.push({ regionKey, seed, slotId });

  const unitRegions = new Map();
  slotSeedEntries.forEach((entry) => {
    const matchNo = Number(String(entry.slotId).replace(/[^\d]/g, ""));
    const unitNo = Math.ceil(matchNo / 2);
    if (!unitRegions.has(unitNo)) {
      unitRegions.set(unitNo, []);
    }
    unitRegions.get(unitNo).push(entry.regionKey);
  });

  for (const [, list] of unitRegions) {
    if (new Set(list).size !== list.length) {
      return false;
    }
    if (list.length > 4) {
      return false;
    }
  }
  return true;
}

function buildSeedSlotPools(seeds) {
  const pools = new Map();
  seeds.forEach((seed) => pools.set(seed, new Set()));
  REGION_CONFIG.forEach((region) => {
    const seedMap = PLACEMENT_TEMPLATE.regionSeedToSlot[region.key];
    seeds.forEach((seed) => {
      const slot = seedMap?.[seed];
      if (slot) {
        pools.get(seed).add(slot);
      }
    });
  });
  const normalized = new Map();
  pools.forEach((set, seed) => normalized.set(seed, [...set]));
  return normalized;
}

function getSlotMeta(slotId) {
  const match = PLACEMENT_TEMPLATE.matches.find((item) =>
    item.slots.includes(slotId),
  );
  if (!match) {
    return null;
  }
  return {
    half: match.half,
    quarter: match.quarter,
  };
}

function checkUnitRegionUniqueness(slotMap, regions) {
  const unitRegions = new Map();
  regions.forEach((regionKey) => {
    for (let seed = 1; seed <= 8; seed += 1) {
      const slotId = slotMap.get(`${regionKey}-${seed}`);
      if (!slotId) {
        continue;
      }
      const matchNo = Number(String(slotId).replace(/[^\d]/g, ""));
      const unitNo = Math.ceil(matchNo / 2);
      if (!unitRegions.has(unitNo)) {
        unitRegions.set(unitNo, []);
      }
      unitRegions.get(unitNo).push(regionKey);
    }
  });
  for (const [, list] of unitRegions) {
    if (list.length !== 4 || new Set(list).size !== 4) {
      return false;
    }
  }
  return true;
}

function shuffleInPlace(array) {
  for (let index = array.length - 1; index > 0; index -= 1) {
    const pick = Math.floor(Math.random() * (index + 1));
    [array[index], array[pick]] = [array[pick], array[index]];
  }
}

function auditPlacements(placementRecords) {
  const items = REGION_CONFIG.map((region) => {
    const top4 = placementRecords.filter(
      (record) =>
        record.type === "regionDirect" &&
        record.regionKey === region.key &&
        record.seed <= 4,
    );
    const seed1 = top4.find((record) => record.seed === 1);
    const seed2 = top4.find((record) => record.seed === 2);
    const seed3 = top4.find((record) => record.seed === 3);
    const seed4 = top4.find((record) => record.seed === 4);
    const quarterSet = new Set(top4.map((record) => record.quarter));

    const quarterPass = quarterSet.size === 4;
    const pair14Pass = seed1 && seed4 && seed1.half === seed4.half;
    const pair23Pass = seed2 && seed3 && seed2.half === seed3.half;

    return {
      regionLabel: region.label,
      pass: quarterPass && pair14Pass && pair23Pass,
      entries: [
        {
          label: "前四 1/4 半区分布",
          value: top4
            .map((item) => `${item.seed}号 -> ${item.quarter}`)
            .join(" / "),
          pass: quarterPass,
        },
        {
          label: "1 与 4 是否同半区",
          value: seed1 && seed4 ? `${seed1.half} / ${seed4.half}` : "缺失",
          pass: Boolean(pair14Pass),
        },
        {
          label: "2 与 3 是否同半区",
          value: seed2 && seed3 ? `${seed2.half} / ${seed3.half}` : "缺失",
          pass: Boolean(pair23Pass),
        },
      ],
      note:
        quarterPass && pair14Pass && pair23Pass
          ? `${region.label}前四名落位满足 1/4 半区规则。`
          : `${region.label}落位存在异常，需要检查模板。`,
    };
  });

  const unitMap = new Map();
  placementRecords.forEach((record) => {
    const unitKey = getUnitKeyFromMatchId(record.matchId);
    if (!unitMap.has(unitKey)) {
      unitMap.set(unitKey, []);
    }
    unitMap.get(unitKey).push(record);
  });

  const unitPass = [...unitMap.values()].every((records) => {
    const regionSet = new Set(records.map((record) => record.regionKey));
    return records.length === 4 && regionSet.size === 4;
  });

  const quarterSeedPass = Object.keys(PLACEMENT_TEMPLATE.quarterMeta).every(
    (quarterKey) => {
      const seeds = placementRecords
        .filter((record) => record.quarter === quarterKey)
        .map((record) => record.seed);
      const seedSet = new Set(seeds);
      return (
        seeds.length === 8 &&
        [1, 2, 3, 4, 5, 6, 7, 8].every((seed) => seedSet.has(seed))
      );
    },
  );

  return {
    valid: items.every((item) => item.pass) && quarterSeedPass,
    items,
    unitPass,
    quarterSeedPass,
  };
}

function getUnitKeyFromMatchId(matchId) {
  const matchNo = Number(String(matchId).replace("W", ""));
  return `U${Math.ceil(matchNo / 2)}`;
}

function buildBracketView(placementRecords) {
  const slotLookup = Object.fromEntries(
    placementRecords.map((record) => [record.slotId, record]),
  );
  const halves = ["上半区", "下半区"].map((halfLabel) => ({
    title: halfLabel,
    subtitle:
      halfLabel === "上半区"
        ? "对应历史图上半区首轮落位"
        : "对应历史图下半区首轮落位",
    matches: PLACEMENT_TEMPLATE.matches
      .filter((match) => match.half === halfLabel)
      .sort(
        (left, right) => Number(left.id.slice(1)) - Number(right.id.slice(1)),
      )
      .map((match) => ({
        id: match.id,
        teams: match.slots.map((slotId) => slotLookup[slotId]),
      })),
    quarters: Object.entries(PLACEMENT_TEMPLATE.quarterMeta)
      .filter(([, meta]) => meta.half === halfLabel)
      .map(([quarterKey, meta]) => ({
        key: quarterKey,
        title: meta.title,
        matches: PLACEMENT_TEMPLATE.matches
          .filter((match) => match.quarter === quarterKey)
          .map((match) => ({
            id: match.id,
            teams: match.slots.map((slotId) => slotLookup[slotId]),
          })),
      })),
  }));

  return {
    halves,
    roadmap: {
      winnerBracket: [
        { title: "胜者组 R1", nodes: ["16 场", "32 进 16"] },
        { title: "胜者组 R2", nodes: ["8 场", "16 进 8"] },
        { title: "胜者组 R3", nodes: ["4 场", "8 进 4"] },
        { title: "胜者组 R4", nodes: ["2 场", "4 进 2"] },
        { title: "胜者组决赛", nodes: ["1 场", "决出总决赛席位"] },
      ],
      loserBracket: [
        { title: "败者组 L1", nodes: ["8 场", "首轮败者进入"] },
        { title: "败者组 L2", nodes: ["8 场", "继续淘汰"] },
        { title: "败者组 L3", nodes: ["4 场", "与后续败者汇合"] },
        { title: "败者组 L4", nodes: ["2 场", "冲击决赛资格"] },
        { title: "总决赛", nodes: ["1-2 场", "胜者组冠军 vs 败者组冠军"] },
      ],
    },
  };
}

function renderBracket(bracketView) {
  const board = document.getElementById("bracket-board");
  board.innerHTML = "";

  bracketView.halves.forEach((half, index) => {
    board.appendChild(renderBracketPoster(half, index));
  });

  const section = document.querySelector(".bracket-section");
  if (document.fullscreenElement === section) {
    startFullscreenCarousel();
  }
}

function renderBracketPoster(half, index) {
  const wrapper = document.createElement("div");
  wrapper.className = "bracket-poster";
  wrapper.dataset.halfIndex = String(index);
  wrapper.innerHTML = `
    <div class="bracket-half-head">
      <h3>${half.title}</h3>
      <span class="quarter-tag">${half.subtitle}</span>
    </div>
  `;

  const svgWrap = document.createElement("div");
  svgWrap.className = "bracket-svg-wrap";
  svgWrap.innerHTML = buildBracketSvg(half);
  wrapper.appendChild(svgWrap);

  return wrapper;
}

function buildBracketSvg(half) {
  const width = 1120;
  const height = 1330;
  const cardWidth = 36;
  const teamCardHeight = 90;
  const cardHeight = 60;
  const stageY = {
    topQual: 18,
    yWinner: 92,
    xRound: 232,
    xWinner: 124,
    firstRound: 418,
    aRound: 534,
    bRound: 630,
    cRound: 728,
    dRound: 826,
    bottomQual: 998,
  };
  const podStarts = [150, 386, 622, 858];
  const pods = half.matches.reduce((result, match, index) => {
    if (index % 2 === 0) {
      result.push([]);
    }
    result[result.length - 1].push(match);
    return result;
  }, []);
  const podLayouts = pods.map((podMatches, podIndex) =>
    buildHalfPodLayout({
      matches: podMatches,
      podIndex,
      startX: podStarts[podIndex],
      stageY,
      cardWidth,
      cardHeight,
      teamCardHeight,
    }),
  );
  const sideLayouts = [
    buildSideBracketLayout(
      podLayouts.slice(0, 2),
      stageY,
      cardWidth,
      cardHeight,
      0,
    ),
    buildSideBracketLayout(
      podLayouts.slice(2, 4),
      stageY,
      cardWidth,
      cardHeight,
      1,
    ),
  ];

  const svgParts = [
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" class="bracket-svg bracket-svg-poster" role="img" aria-label="${half.title}32强对阵图">`,
    `<rect x="0" y="0" width="${width}" height="${height}" rx="28" fill="url(#bg)" stroke="rgba(164,194,255,0.18)" />`,
    `<defs>
      <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#1f69ec" />
        <stop offset="100%" stop-color="#1450c6" />
      </linearGradient>
      <linearGradient id="nodeBlue" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#3058d6" />
        <stop offset="100%" stop-color="#1c3693" />
      </linearGradient>
      <linearGradient id="nodeWhite" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#ffffff" />
        <stop offset="100%" stop-color="#e7efff" />
      </linearGradient>
      <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="3" stdDeviation="3" flood-color="rgba(0,0,0,0.25)" />
      </filter>
    </defs>`,
    renderPosterBands(width, height),
    renderPosterSideLabels(stageY, teamCardHeight, cardHeight),
    renderHalfBadge(half.title, width),
  ];

  podLayouts.forEach((pod) => {
    svgParts.push(
      ...renderHalfPodSvg(pod, cardWidth, teamCardHeight, cardHeight),
    );
  });
  sideLayouts.forEach((side, sideIndex) => {
    svgParts.push(
      ...renderSideBracketSvg(side, sideIndex, cardWidth, cardHeight),
    );
  });
  svgParts.push(
    renderReferenceSolidWhiteLine(podLayouts, cardWidth, cardHeight),
  );
  svgParts.push(
    renderReferenceSolidWhiteLineTwo(podLayouts, cardWidth, cardHeight),
  );
  svgParts.push(
    renderReferenceDashedWhiteLine(podLayouts, cardWidth, cardHeight),
  );
  svgParts.push(
    renderReferenceDashedWhiteLineTwo(podLayouts, cardWidth, cardHeight),
  );

  svgParts.push(`</svg>`);
  return svgParts.join("");
}

function escapeXml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

function renderPosterBands(width, height) {
  const bands = [
    { y: 24, h: 48, opacity: 0.02 },
    { y: 88, h: 70, opacity: 0.03 },
    { y: 214, h: 78, opacity: 0.028 },
    { y: 448, h: 84, opacity: 0.03 },
    { y: 630, h: 84, opacity: 0.028 },
    { y: 770, h: 84, opacity: 0.03 },
    { y: 910, h: 84, opacity: 0.028 },
    { y: 1046, h: 84, opacity: 0.03 },
    { y: 1184, h: 86, opacity: 0.028 },
  ];
  return bands
    .map(
      (band) =>
        `<rect x="0" y="${band.y}" width="${width}" height="${band.h}" fill="rgba(255,255,255,${band.opacity})" />`,
    )
    .join("");
}

function renderPosterSideLabels(stageY, teamCardHeight, cardHeight) {
  const x = 18;
  const lineStep = 14;
  const labels = [
    { lines: ["晋级全国八强"], centerY: stageY.topQual + cardHeight / 2 },
    {
      lines: ["5/30", "Y轮(胜者组)"],
      centerY: stageY.xWinner + cardHeight / 2,
    },
    { lines: ["5/29", "X轮(胜者组)"], centerY: stageY.xRound + cardHeight / 2 },
    {
      lines: ["5/28", "首轮"],
      centerY: stageY.firstRound + teamCardHeight / 2,
    },
    { lines: ["5/29", "A轮(败者组)"], centerY: stageY.aRound + cardHeight / 2 },
    { lines: ["5/30", "B轮(败者组)"], centerY: stageY.bRound + cardHeight / 2 },
    { lines: ["5/31", "C轮(败者组)"], centerY: stageY.cRound + cardHeight / 2 },
    { lines: ["6/1", "D轮(败者组)"], centerY: stageY.dRound + cardHeight / 2 },
    { lines: ["晋级全国八强"], centerY: stageY.bottomQual + cardHeight / 2 },
  ];

  return labels
    .map((label) => {
      const startY = label.centerY - ((label.lines.length - 1) * lineStep) / 2;
      const fontSize = label.lines.length > 1 ? 12 : 13;
      return `
        <text x="${x}" y="${startY}" fill="#eaf2ff" font-size="${fontSize}" font-weight="700">
          ${label.lines.map((line, index) => `<tspan x="${x}" dy="${index === 0 ? 0 : lineStep}">${escapeXml(line)}</tspan>`).join("")}
        </text>
      `;
    })
    .join("");
}

function renderHalfBadge(title, width) {
  const badgeWidth = 92;
  const badgeX = width - badgeWidth - 16;
  const textX = badgeX + badgeWidth / 2;
  return `
    <g class="js-half-badge" filter="url(#softShadow)" style="cursor:pointer;">
      <rect x="${badgeX}" y="16" width="${badgeWidth}" height="38" rx="10" fill="rgba(17, 41, 102, 0.86)" />
      <text x="${textX}" y="41" fill="#f1f6ff" font-size="22" font-weight="800" text-anchor="middle">${title}</text>
    </g>
  `;
}

function renderVerticalTeamCard(team, width, height, blue) {
  const displayName = normalizePlaceholderSeedName(team.teamName);
  return renderVerticalLabelCard(
    team.x,
    team.y,
    width,
    height,
    displayName,
    blue,
    team.type === "playin"
      ? getCompactPlayinLabel(team.sourceLabel)
      : `${getRegionShort(team.regionLabel)}${team.seed}`,
  );
}

function normalizePlaceholderSeedName(teamName) {
  const match = String(teamName).match(
    /^([78])号种子(?:\d+|东南|西南|东北|西北)$/,
  );
  if (!match) {
    return teamName;
  }
  return `${match[1]}号种子`;
}

function renderVerticalLabelCard(
  x,
  y,
  width,
  height,
  label,
  blue,
  meta = "",
  variant = "default",
) {
  const fill =
    variant === "qual"
      ? "#ffd567"
      : blue
        ? "url(#nodeBlue)"
        : "url(#nodeWhite)";
  const textColor =
    variant === "qual" ? "#16306f" : blue ? "#f1f6ff" : "#153978";
  const metaColor = blue ? "#b7ccff" : "#5c7fc0";
  const chars = [...String(label)].slice(0, 8);
  const lineHeight = 12;
  const textBlockHeight = Math.max(0, (chars.length - 1) * lineHeight);
  const startY =
    blue && variant === "default"
      ? y + 18
      : y + (height - textBlockHeight) / 2 + 4;
  return `
    <g filter="url(#softShadow)">
      <rect x="${x}" y="${y}" width="${width}" height="${height}" rx="6" fill="${fill}" stroke="${variant === "qual" ? "#fff2bf" : "rgba(255,255,255,0.22)"}" />
      <text x="${x + width / 2}" y="${startY}" fill="${textColor}" font-size="12" font-weight="700" text-anchor="middle">
        ${chars.map((char, index) => `<tspan x="${x + width / 2}" dy="${index === 0 ? 0 : lineHeight}">${escapeXml(char)}</tspan>`).join("")}
      </text>
      ${meta ? `<text x="${x + width / 2}" y="${y + height - 8}" fill="${metaColor}" font-size="7.5" text-anchor="middle">${escapeXml(meta)}</text>` : ""}
    </g>
  `;
}

function getRegionShort(regionLabel) {
  return regionLabel.replace("赛区", "");
}

function getCompactPlayinLabel(sourceLabel) {
  const normalized = String(sourceLabel).trim();
  const seedMatch = normalized.match(/^([78])号种子$/);
  if (seedMatch) {
    return `${seedMatch[1]}号种子`;
  }
  const shortSeedMatch = normalized.match(/^(东南|西南|东北|西北)([78])$/);
  if (shortSeedMatch) {
    return `${shortSeedMatch[2]}号种子`;
  }
  return sourceLabel
    .replace(" 第一", "1")
    .replace("交叉赛晋级 ", "交叉")
    .replace("晋级", "");
}

function buildHalfPodLayout({
  matches,
  startX,
  stageY,
  cardWidth,
  cardHeight,
  teamCardHeight,
  podIndex,
}) {
  const gap = 10;
  const matchGap = 18;
  const teamXs = [
    startX,
    startX + cardWidth + gap,
    startX + (cardWidth + gap) * 2 + matchGap,
    startX + (cardWidth + gap) * 3 + matchGap,
  ];
  const leftMatchCenterX = (teamXs[0] + teamXs[1] + cardWidth) / 2;
  const rightMatchCenterX = (teamXs[2] + teamXs[3] + cardWidth) / 2;
  const podCenterX = (leftMatchCenterX + rightMatchCenterX) / 2;
  const reverseBOrder = podIndex >= 2;
  const bLeftLabel = reverseBOrder ? "X轮败者" : "A轮胜者";
  const bRightLabel = reverseBOrder ? "A轮胜者" : "X轮败者";
  return {
    startX,
    endX: teamXs[3] + cardWidth,
    teamXs,
    teams: [
      { ...matches[0].teams[0], x: teamXs[0], y: stageY.firstRound },
      { ...matches[0].teams[1], x: teamXs[1], y: stageY.firstRound },
      { ...matches[1].teams[0], x: teamXs[2], y: stageY.firstRound },
      { ...matches[1].teams[1], x: teamXs[3], y: stageY.firstRound },
    ],
    xCards: [
      { x: leftMatchCenterX - cardWidth / 2, y: stageY.xRound, label: "TBD" },
      { x: rightMatchCenterX - cardWidth / 2, y: stageY.xRound, label: "TBD" },
    ],
    xWinner: {
      x: podCenterX - cardWidth / 2,
      y: stageY.xWinner,
      label: "X轮胜者",
    },
    aCards: [
      { x: leftMatchCenterX - cardWidth / 2, y: stageY.aRound, label: "TBD" },
      { x: rightMatchCenterX - cardWidth / 2, y: stageY.aRound, label: "TBD" },
    ],
    bCards: [
      { x: podCenterX - cardWidth - 6, y: stageY.bRound, label: bLeftLabel },
      { x: podCenterX + 6, y: stageY.bRound, label: bRightLabel },
    ],
    cCard: {
      x: podCenterX - cardWidth / 2,
      y: stageY.cRound,
      label: "B轮胜者",
    },
    leftMatchCenterX,
    rightMatchCenterX,
    podCenterX,
    teamCardHeight,
  };
}

function buildSideBracketLayout(
  pods,
  stageY,
  cardWidth,
  cardHeight,
  sideIndex,
) {
  const centerX = (pods[0].podCenterX + pods[1].podCenterX) / 2;
  const yCardLeft = sideIndex === 0;
  const pairGap = 12;
  const yLoserX = centerX - cardWidth / 2;
  const cWinnerX = centerX + cardWidth / 2 + pairGap;
  const mirroredYLoserX = centerX - cardWidth / 2;
  const mirroredCWinnerX = mirroredYLoserX - cardWidth - pairGap;
  const dCards = [
    {
      x: yCardLeft ? yLoserX : mirroredCWinnerX,
      y: stageY.dRound,
      label: yCardLeft ? "Y轮败者" : "C轮胜者",
      role: yCardLeft ? "yLoser" : "cWinner",
    },
    {
      x: yCardLeft ? cWinnerX : mirroredYLoserX,
      y: stageY.dRound,
      label: yCardLeft ? "C轮胜者" : "Y轮败者",
      role: yCardLeft ? "cWinner" : "yLoser",
    },
  ];
  const dCenters = dCards.map((card) => card.x + cardWidth / 2);
  const bottomCenterX = (Math.min(...dCenters) + Math.max(...dCenters)) / 2;
  const topQualBottomY = stageY.topQual + cardHeight;
  const xWinnerTopY = Math.min(pods[0].xWinner.y, pods[1].xWinner.y);
  const topJoinY = topQualBottomY + (xWinnerTopY - topQualBottomY) / 2;
  return {
    sideIndex,
    pods,
    topQual: {
      x: centerX - cardWidth / 2,
      y: stageY.topQual,
      label: "全国八强",
    },
    topJoin: { x: centerX, y: topJoinY },
    dCards,
    bottomQual: {
      x: bottomCenterX - cardWidth / 2,
      y: stageY.bottomQual,
      label: "全国八强",
    },
  };
}

function renderHalfPodSvg(pod, cardWidth, teamCardHeight, cardHeight) {
  const parts = [];
  pod.teams.forEach((team, index) => {
    parts.push(renderVerticalTeamCard(team, cardWidth, teamCardHeight, true));
  });
  pod.xCards.forEach((card) => {
    parts.push(
      renderVerticalLabelCard(
        card.x,
        card.y,
        cardWidth,
        cardHeight,
        card.label,
        false,
      ),
    );
  });
  parts.push(
    renderVerticalLabelCard(
      pod.xWinner.x,
      pod.xWinner.y,
      cardWidth,
      cardHeight,
      pod.xWinner.label,
      false,
    ),
  );
  pod.aCards.forEach((card) => {
    parts.push(
      renderVerticalLabelCard(
        card.x,
        card.y,
        cardWidth,
        cardHeight,
        card.label,
        false,
      ),
    );
  });
  pod.bCards.forEach((card) => {
    parts.push(
      renderVerticalLabelCard(
        card.x,
        card.y,
        cardWidth,
        cardHeight,
        card.label,
        false,
      ),
    );
  });
  parts.push(
    renderVerticalLabelCard(
      pod.cCard.x,
      pod.cCard.y,
      cardWidth,
      cardHeight,
      pod.cCard.label,
      false,
    ),
  );
  parts.push(
    renderVerticalMatchConnector(
      pod.teams[0],
      pod.teams[1],
      pod.xCards[0],
      cardWidth,
      teamCardHeight,
      cardHeight,
    ),
    renderVerticalMatchConnector(
      pod.teams[2],
      pod.teams[3],
      pod.xCards[1],
      cardWidth,
      teamCardHeight,
      cardHeight,
    ),
    renderUpperMergeConnector(
      pod.xCards[0],
      pod.xCards[1],
      pod.xWinner,
      cardWidth,
      cardHeight,
      "#ffc44b",
    ),
    renderLowerStageConnector(
      pod.teams[0],
      pod.teams[1],
      pod.aCards[0],
      cardWidth,
      teamCardHeight,
      cardHeight,
    ),
    renderLowerStageConnector(
      pod.teams[2],
      pod.teams[3],
      pod.aCards[1],
      cardWidth,
      teamCardHeight,
      cardHeight,
    ),
    renderBStageConnector(
      pod.aCards[0],
      pod.aCards[1],
      pod.bCards[0],
      pod.bCards[1],
      cardWidth,
      cardHeight,
    ),
    renderCStageConnector(
      pod.bCards[0],
      pod.bCards[1],
      pod.cCard,
      cardWidth,
      cardHeight,
    ),
  );
  return parts;
}

function renderSideBracketSvg(side, sideIndex, cardWidth, cardHeight) {
  const parts = [];
  parts.push(
    renderVerticalLabelCard(
      side.topQual.x,
      side.topQual.y,
      cardWidth,
      cardHeight,
      side.topQual.label,
      false,
      "",
      "qual",
    ),
  );
  parts.push(
    renderVerticalLabelCard(
      side.dCards[0].x,
      side.dCards[0].y,
      cardWidth,
      cardHeight,
      side.dCards[0].label,
      false,
    ),
  );
  parts.push(
    renderVerticalLabelCard(
      side.dCards[1].x,
      side.dCards[1].y,
      cardWidth,
      cardHeight,
      side.dCards[1].label,
      false,
    ),
  );
  parts.push(
    renderVerticalLabelCard(
      side.bottomQual.x,
      side.bottomQual.y,
      cardWidth,
      cardHeight,
      side.bottomQual.label,
      false,
      "",
      "qual",
    ),
  );
  parts.push(
    renderUpperMergeConnector(
      side.pods[0].xWinner,
      side.pods[1].xWinner,
      side.topQual,
      cardWidth,
      cardHeight,
      "#ffc44b",
    ),
    renderDSideConnector(side, cardWidth, cardHeight),
  );
  return parts;
}

function renderVerticalMatchConnector(
  teamA,
  teamB,
  targetCard,
  cardWidth,
  teamCardHeight,
  cardHeight,
) {
  const centerX = targetCard.x + cardWidth / 2;
  const topBottomY = targetCard.y + cardHeight;
  const teamTopY = teamA.y;
  const joinY = teamTopY - 10;
  return `
    <g stroke="#ffc44b" stroke-width="1.5" fill="none">
      <path d="M ${teamA.x + cardWidth / 2} ${teamTopY} V ${joinY} H ${centerX}" />
      <path d="M ${teamB.x + cardWidth / 2} ${teamTopY} V ${joinY} H ${centerX}" />
      <path d="M ${centerX} ${topBottomY} V ${joinY}" />
    </g>
    <circle cx="${centerX}" cy="${joinY}" r="6" fill="#f4b326" stroke="#fff5d7" stroke-width="2" />
  `;
}

function renderUpperMergeConnector(
  cardA,
  cardB,
  targetCard,
  cardWidth,
  cardHeight,
  stroke = "#f6f7ff",
) {
  const centerX = targetCard.x + cardWidth / 2;
  const sourceTopY = Math.min(cardA.y, cardB.y);
  const targetBottomY = targetCard.y + cardHeight;
  const joinY = targetBottomY + (sourceTopY - targetBottomY) / 2;
  return `
    <g stroke="${stroke}" stroke-width="1.5" fill="none">
      <path d="M ${cardA.x + cardWidth / 2} ${cardA.y} V ${joinY} H ${centerX}" />
      <path d="M ${cardB.x + cardWidth / 2} ${cardB.y} V ${joinY} H ${centerX}" />
      <path d="M ${centerX} ${targetBottomY} V ${joinY}" />
    </g>
    <circle cx="${centerX}" cy="${joinY}" r="6" fill="#f4b326" stroke="#fff5d7" stroke-width="2" />
  `;
}

function renderLowerStageConnector(
  teamA,
  teamB,
  targetCard,
  cardWidth,
  teamCardHeight,
  cardHeight,
) {
  const centerX = targetCard.x + cardWidth / 2;
  const sourceBottomY = teamA.y + teamCardHeight;
  const targetTopY = targetCard.y;
  const joinY = sourceBottomY + 10;
  return `
    <g stroke="#f6f7ff" stroke-width="1.5" stroke-dasharray="8 6" fill="none">
      <path d="M ${teamA.x + cardWidth / 2} ${sourceBottomY} V ${joinY} H ${centerX}" />
      <path d="M ${teamB.x + cardWidth / 2} ${sourceBottomY} V ${joinY} H ${centerX}" />
      <path d="M ${centerX} ${joinY} V ${targetTopY}" />
    </g>
  `;
}

function renderBStageConnector(
  aCardLeft,
  aCardRight,
  bCardLeft,
  bCardRight,
  cardWidth,
  cardHeight,
) {
  const aWinnerCard = bCardLeft.label === "A轮胜者" ? bCardLeft : bCardRight;
  const xLoserCard = bCardLeft.label === "X轮败者" ? bCardLeft : bCardRight;
  const joinX = aWinnerCard.x + cardWidth / 2;
  const otherX = xLoserCard.x + cardWidth / 2;
  const sourceBottomY = aCardLeft.y + cardHeight;
  const targetTopY = aWinnerCard.y;
  const joinY = sourceBottomY + (targetTopY - sourceBottomY) / 2;
  return `
    <g stroke="#ffc44b" stroke-width="1.5" fill="none">
      <path d="M ${aCardLeft.x + cardWidth / 2} ${sourceBottomY} V ${joinY} H ${joinX}" />
      <path d="M ${aCardRight.x + cardWidth / 2} ${aCardRight.y + cardHeight} V ${joinY} H ${joinX}" />
      <path d="M ${joinX} ${joinY} H ${otherX}" />
      <path d="M ${joinX} ${joinY} V ${targetTopY}" />
    </g>
    <circle cx="${joinX}" cy="${joinY}" r="6" fill="#f4b326" stroke="#fff5d7" stroke-width="2" />
  `;
}

function renderCStageConnector(
  bCardLeft,
  bCardRight,
  cCard,
  cardWidth,
  cardHeight,
) {
  const leftX = bCardLeft.x + cardWidth / 2;
  const rightX = bCardRight.x + cardWidth / 2;
  const centerX = cCard.x + cardWidth / 2;
  const sourceBottomY = bCardLeft.y + cardHeight;
  const targetTopY = cCard.y;
  const joinY = sourceBottomY + (targetTopY - sourceBottomY) / 2;
  return `
    <g stroke="#ffc44b" stroke-width="1.5" fill="none">
      <path d="M ${leftX} ${sourceBottomY} V ${joinY} H ${centerX}" />
      <path d="M ${rightX} ${bCardRight.y + cardHeight} V ${joinY} H ${centerX}" />
      <path d="M ${centerX} ${targetTopY} V ${joinY}" />
    </g>
    <circle cx="${centerX}" cy="${joinY}" r="6" fill="#f4b326" stroke="#fff5d7" stroke-width="2" />
  `;
}

function renderDSideConnector(side, cardWidth, cardHeight) {
  const yLoserCard = side.dCards.find((card) => card.role === "yLoser");
  const cWinnerCard = side.dCards.find((card) => card.role === "cWinner");
  const yLoserX = yLoserCard.x + cardWidth / 2;
  const cWinnerX = cWinnerCard.x + cardWidth / 2;
  const cSourceBottomY = side.pods[0].cCard.y + cardHeight;
  const cTopJoinY = cSourceBottomY + (cWinnerCard.y - cSourceBottomY) / 2;
  const dBottomY = yLoserCard.y + cardHeight;
  const bottomX = side.bottomQual.x + cardWidth / 2;
  const qualTopY = side.bottomQual.y;
  const bottomJoinY = dBottomY + (qualTopY - dBottomY) / 2;
  const cSourceLeftX = side.pods[0].cCard.x + cardWidth / 2;
  const cSourceRightX = side.pods[1].cCard.x + cardWidth / 2;
  return `
    <g stroke="#f6f7ff" stroke-width="1.5" fill="none">
      <path d="M ${side.topJoin.x} ${side.topJoin.y} V ${yLoserCard.y}" />
    </g>
    <g stroke="#ffc44b" stroke-width="1.5" fill="none">
      <path d="M ${cSourceLeftX} ${cSourceBottomY} V ${cTopJoinY} H ${cWinnerX}" />
      <path d="M ${cSourceRightX} ${side.pods[1].cCard.y + cardHeight} V ${cTopJoinY} H ${cWinnerX}" />
      <path d="M ${cWinnerX} ${cWinnerCard.y} V ${cTopJoinY}" />
      <path d="M ${yLoserX} ${dBottomY} V ${bottomJoinY} H ${bottomX}" />
      <path d="M ${cWinnerX} ${cWinnerCard.y + cardHeight} V ${bottomJoinY} H ${bottomX}" />
      <path d="M ${bottomX} ${qualTopY} V ${bottomJoinY}" />
    </g>
    <circle cx="${cWinnerX}" cy="${cTopJoinY}" r="6" fill="#f4b326" stroke="#fff5d7" stroke-width="2" />
    <circle cx="${bottomX}" cy="${bottomJoinY}" r="6" fill="#f4b326" stroke="#fff5d7" stroke-width="2" />
  `;
}

function renderReferenceSolidWhiteLine(podLayouts, cardWidth, cardHeight) {
  const sourcePod = podLayouts[0];
  const targetPod = podLayouts[3];
  const sourceX = sourcePod.xWinner.x + cardWidth / 2;
  const xRoundY = Math.min(sourcePod.xCards[0].y, sourcePod.xCards[1].y);
  const cruiseY = getSafeCrossLaneY(sourcePod, cardHeight, 0.62);
  const sourceBottomY = sourcePod.xWinner.y + cardHeight;
  const sourceJoinY = sourceBottomY + (xRoundY - sourceBottomY) / 2;

  const xLoserCard =
    targetPod.bCards.find((card) => card.label === "X轮败者") ||
    targetPod.bCards[0];
  const targetX = xLoserCard.x;
  const targetY = xLoserCard.y + cardHeight / 2;
  const gutter23 = (podLayouts[2].endX + targetPod.startX) / 2;
  const boundaryX = gutter23 - 14;

  return `
    <g stroke="#f6f7ff" stroke-width="1.5" fill="none">
      <path d="M ${sourceX} ${sourceJoinY + 10} V ${cruiseY} H ${boundaryX} V ${targetY} H ${targetX}" />
    </g>
  `;
}

function renderReferenceSolidWhiteLineTwo(podLayouts, cardWidth, cardHeight) {
  const sourcePod = podLayouts[1];
  const targetPod = podLayouts[2];
  const xLoserCard =
    sourcePod.bCards.find((card) => card.label === "X轮败者") ||
    sourcePod.bCards[0];
  const startX = xLoserCard.x + cardWidth;
  const startY = getSafeCrossLaneY(sourcePod, cardHeight, 0.52);
  const gutter12 = (sourcePod.endX + targetPod.startX) / 2;
  const sourceRiseX = gutter12 - 12;
  const sourceCardMidY = xLoserCard.y + cardHeight / 2;
  const targetX = targetPod.xWinner.x + cardWidth / 2;
  const targetY = getXWinnerJoinY(targetPod, cardHeight);

  return `
    <g stroke="#f6f7ff" stroke-width="1.5" fill="none">
      <path d="M ${xLoserCard.x + cardWidth / 2} ${sourceCardMidY} H ${sourceRiseX} V ${startY} H ${targetX} V ${targetY}" />
    </g>
  `;
}

function renderReferenceDashedWhiteLine(podLayouts, cardWidth, cardHeight) {
  const sourcePod = podLayouts[1];
  const targetPod = podLayouts[2];
  const sourceX = sourcePod.xWinner.x + cardWidth / 2;
  const sourceY = getXWinnerJoinY(sourcePod, cardHeight);

  const laneY = getSafeCrossLaneY(sourcePod, cardHeight, 0.32);
  const gutter12 = (sourcePod.endX + targetPod.startX) / 2;
  const laneX = gutter12 + 8;
  const xLoserCard =
    targetPod.bCards.find((card) => card.label === "X轮败者") ||
    targetPod.bCards[0];
  const targetY = xLoserCard.y + cardHeight / 2;
  const targetX = xLoserCard.x;

  return `
    <g stroke="#f6f7ff" stroke-width="1.5" stroke-dasharray="8 6" fill="none">
      <path d="M ${sourceX} ${sourceY} V ${laneY} H ${laneX} V ${targetY} H ${targetX}" />
    </g>
  `;
}

function renderReferenceDashedWhiteLineTwo(podLayouts, cardWidth, cardHeight) {
  const sourcePod = podLayouts[0];
  const targetPod = podLayouts[3];
  const sourceCard =
    sourcePod.bCards.find((card) => card.label === "X轮败者") ||
    sourcePod.bCards[1];
  const startX = sourceCard.x + cardWidth;
  const startY = sourceCard.y + cardHeight / 2;

  const gutter01 = (sourcePod.endX + podLayouts[1].startX) / 2;
  const liftX = gutter01 + 10;
  const cruiseY = getSafeCrossLaneY(targetPod, cardHeight, 0.22);
  const targetX = targetPod.xWinner.x + cardWidth / 2;
  const targetY = getXWinnerJoinY(targetPod, cardHeight);

  return `
    <g stroke="#f6f7ff" stroke-width="1.5" stroke-dasharray="8 6" fill="none">
      <path d="M ${startX} ${startY} H ${liftX} V ${cruiseY} H ${targetX} V ${targetY}" />
    </g>
  `;
}

function getSafeCrossLaneY(pod, cardHeight, ratio = 0.45) {
  const xRoundBottomY = Math.max(pod.xCards[0].y, pod.xCards[1].y) + cardHeight;
  const firstRoundTopY = pod.teams[0].y;
  const topPadding = 10;
  const bottomPadding = 14;
  const safeTop = xRoundBottomY + topPadding;
  const safeBottom = firstRoundTopY - bottomPadding;
  if (safeBottom <= safeTop) {
    return (xRoundBottomY + firstRoundTopY) / 2;
  }
  const clampedRatio = Math.min(0.9, Math.max(0.1, ratio));
  return safeTop + (safeBottom - safeTop) * clampedRatio;
}

function getXWinnerJoinY(pod, cardHeight) {
  const xRoundTopY = Math.min(pod.xCards[0].y, pod.xCards[1].y);
  const xWinnerBottomY = pod.xWinner.y + cardHeight;
  return xWinnerBottomY + (xRoundTopY - xWinnerBottomY) / 2;
}

function renderTeamSlot(team) {
  const label =
    team.type === "playin"
      ? `${team.sourceLabel}`
      : `${team.regionLabel} · ${team.seed} 号`;
  return `
    <div class="team-slot">
      <div>
        <strong>${team.teamName}</strong>
        <small>${label}</small>
      </div>
      <span class="summary-slot">${team.slotId}</span>
    </div>
  `;
}

function renderRoadmap(roadmap) {
  const wrapper = document.createElement("section");
  wrapper.className = "double-elim-overview";
  wrapper.appendChild(
    renderRoadmapCard(
      "双败结构概览 / 胜者组",
      "当前版本展示结构，不录入赛果。",
      roadmap.winnerBracket,
    ),
  );
  wrapper.appendChild(
    renderRoadmapCard(
      "双败结构概览 / 败者组",
      "败者组轮次为结构示意，后续可扩展自动推进。",
      roadmap.loserBracket,
    ),
  );
  return wrapper;
}

function renderRoadmapCard(title, subtitle, columns) {
  const card = document.createElement("article");
  card.className = "roadmap-card";
  card.innerHTML = `<h4>${title}</h4><div class="match-note">${subtitle}</div>`;

  const grid = document.createElement("div");
  grid.className = "roadmap-columns";
  columns.forEach((column) => {
    const columnNode = document.createElement("div");
    columnNode.className = "roadmap-column";
    columnNode.innerHTML = `<h5>${column.title}</h5>`;
    column.nodes.forEach((node) => {
      const box = document.createElement("div");
      box.className = "roadmap-node";
      box.textContent = node;
      columnNode.appendChild(box);
    });
    grid.appendChild(columnNode);
  });

  card.appendChild(grid);
  return card;
}

function renderRegionalPool() {
  const container = document.getElementById("regional-pool");
  container.innerHTML = "";
  REGION_CONFIG.forEach((region) => {
    const teams = state.data.regions[region.key].playinSeeds;
    const card = document.createElement("article");
    card.className = "summary-card";
    card.innerHTML = `<h3><span>${region.label}</span><span>7-10 名</span></h3>`;
    const list = document.createElement("div");
    list.className = "summary-list";
    teams.forEach((team, index) => {
      const item = document.createElement("div");
      item.className = "summary-item";
      item.innerHTML = `
        <strong>${index + 7} 名</strong>
        <span>${team.trim() || "待录入"}</span>
        <span class="summary-slot">${region.short}</span>
      `;
      list.appendChild(item);
    });
    card.appendChild(list);
    container.appendChild(card);
  });
}

function renderPlayinQualifiedPreview() {
  const container = document.getElementById("playin-qualified-preview");
  const direct = getDirectQualifiers(state.data);
  const crossover = getCrossoverQualifiers(state.data);
  container.innerHTML = "";

  const directCard = document.createElement("article");
  directCard.className = "summary-card";
  directCard.innerHTML = `<h3><span>小组第一直通</span><span>${direct.length}/4</span></h3>`;
  const directList = document.createElement("div");
  directList.className = "summary-list";
  if (direct.length === 0) {
    directList.innerHTML = `<div class="audit-note">等待录入 4 个小组第一。</div>`;
  } else {
    direct.forEach((item, index) => {
      const row = document.createElement("div");
      row.className = "summary-item";
      row.innerHTML = `
        <strong>D${index + 1}</strong>
        <span>${item.teamName}</span>
        <span class="summary-slot">${item.sourceLabel}</span>
      `;
      directList.appendChild(row);
    });
  }
  directCard.appendChild(directList);
  container.appendChild(directCard);

  const crossCard = document.createElement("article");
  crossCard.className = "summary-card";
  crossCard.innerHTML = `<h3><span>交叉赛晋级</span><span>${crossover.length}/4</span></h3>`;
  const crossList = document.createElement("div");
  crossList.className = "summary-list";
  if (crossover.length === 0) {
    crossList.innerHTML = `<div class="audit-note">等待录入交叉赛 4 个晋级名额。</div>`;
  } else {
    crossover.forEach((item, index) => {
      const row = document.createElement("div");
      row.className = "summary-item";
      row.innerHTML = `
        <strong>C${index + 1}</strong>
        <span>${item.teamName}</span>
        <span class="summary-slot">${item.sourceLabel}</span>
      `;
      crossList.appendChild(row);
    });
  }
  crossCard.appendChild(crossList);
  container.appendChild(crossCard);
}

function renderEmptyResults() {
  document.getElementById("bracket-board").innerHTML = `
    <div class="audit-card">
      <h3><span>等待上下半区对阵图</span><span class="audit-tag">未生成</span></h3>
      <div class="audit-note">生成后将分别展示上半区和下半区的完整落位情况，图片预览会同时包含两个半区。</div>
    </div>
  `;
}

async function renderNationalViewImagePreview() {
  if (!state.lastResult) {
    const generated = generatePlacements({ silent: true });
    if (!generated) {
      setMessage("请先完成录入并成功生成全国赛落位后，再生成图片。", "error");
      activateTab("national-tab");
      return;
    }
  }

  try {
    activateTab("national-tab");
    const target = document.getElementById("national-tab");
    const imageUrl = await renderNodeToSvgUrl(target);
    showNationalImagePreview(imageUrl);
    setMessage("全国赛图片预览已在页面中生成。", "success");
  } catch (error) {
    console.error("Failed to render national image preview:", error);
    setMessage("生成图片失败，请重试。", "error");
  }
}

async function renderNodeToSvgUrl(node) {
  const rect = node.getBoundingClientRect();
  const width = Math.max(Math.ceil(rect.width), 1200);
  const height = Math.max(Math.ceil(rect.height), 800);
  const cloned = node.cloneNode(true);

  inlineComputedStyles(node, cloned);

  const wrapper = document.createElement("div");
  wrapper.setAttribute("xmlns", "http://www.w3.org/1999/xhtml");
  wrapper.style.width = `${width}px`;
  wrapper.style.height = `${height}px`;
  wrapper.style.padding = "24px";
  wrapper.style.boxSizing = "border-box";
  wrapper.style.background =
    "radial-gradient(circle at top left, rgba(55, 120, 255, 0.38), transparent 26%), radial-gradient(circle at top right, rgba(255, 126, 46, 0.2), transparent 28%), linear-gradient(180deg, #082664 0%, #041434 54%, #020c1f 100%)";
  wrapper.appendChild(cloned);

  const serialized = new XMLSerializer().serializeToString(wrapper);
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
      <foreignObject width="100%" height="100%">
        ${serialized}
      </foreignObject>
    </svg>
  `;

  const blob = new Blob([svg], { type: "image/svg+xml;charset=utf-8" });
  return URL.createObjectURL(blob);
}

function inlineComputedStyles(sourceNode, targetNode) {
  if (!(sourceNode instanceof Element) || !(targetNode instanceof Element)) {
    return;
  }

  const computed = window.getComputedStyle(sourceNode);
  const styleText = Array.from(computed)
    .map((property) => `${property}:${computed.getPropertyValue(property)};`)
    .join("");
  targetNode.setAttribute("style", styleText);

  const sourceChildren = Array.from(sourceNode.children);
  const targetChildren = Array.from(targetNode.children);
  for (let index = 0; index < sourceChildren.length; index += 1) {
    inlineComputedStyles(sourceChildren[index], targetChildren[index]);
  }
}

function showNationalImagePreview(imageUrl) {
  const container = document.getElementById("national-image-preview");
  if (container.dataset.objectUrl) {
    URL.revokeObjectURL(container.dataset.objectUrl);
  }
  container.className = "image-preview-card";
  container.innerHTML = "";

  const meta = document.createElement("div");
  meta.className = "image-preview-meta";
  meta.textContent = `生成时间：${new Date().toLocaleString()}`;

  const image = document.createElement("img");
  image.src = imageUrl;
  image.alt = "全国赛落位生成图片";

  container.dataset.objectUrl = imageUrl;
  container.append(meta, image);
}

function clearNationalImagePreview() {
  const container = document.getElementById("national-image-preview");
  if (container.dataset.objectUrl) {
    URL.revokeObjectURL(container.dataset.objectUrl);
    delete container.dataset.objectUrl;
  }
  container.className = "image-preview-empty";
  container.textContent = "等待生成图片预览";
}
