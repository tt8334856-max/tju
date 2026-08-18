const STORAGE_KEY = 'tjuKaoyanDailyState';

const encouragements = [
  '慢慢来，但别停下。今天的每一个勾选，都是在靠近天津大学。',
  '把焦虑放小一点，把行动放大一点。你正在认真奔赴自己的答案。',
  '清晨的书页、夜晚的台灯，都会替你记得这段努力。',
  '今天也许不完美，但只要完成一件事，就比昨天更稳一点。',
  '愿你合上书时，心里多一点笃定：我真的在往前走。',
];

const legacyPoliticalTips = [
  {
    title: '马克思主义的鲜明特征',
    body: '实践性是马克思主义区别于其他理论的显著特征。复习时可以把“实践—认识—再实践”作为理解线索。',
  },
  {
    title: '矛盾分析法',
    body: '分析问题要抓主要矛盾，也要看到矛盾的主要方面。做选择题时，常用来判断材料强调的核心关系。',
  },
  {
    title: '新发展理念',
    body: '创新、协调、绿色、开放、共享是一个整体，其中创新处于引领发展的第一动力位置。',
  },
  {
    title: '人民立场',
    body: '人民性是马克思主义的本质属性。遇到价值判断类题目，优先关注“为了谁、依靠谁”。',
  },
  {
    title: '量变与质变',
    body: '量变是质变的必要准备，质变是量变的必然结果。每日积累，本质上就是备考里的量变。',
  },
];

export const POLITICAL_TIP_CATEGORIES = [
  '马克思主义基本原理',
  '毛泽东思想和中国特色社会主义理论体系',
  '中国近现代史纲要',
  '思想道德与法治',
  '形势与政策基础',
];

const politicalTipGroups = [
  [
    ['实践是认识的来源', '实践是认识的来源和动力，认识还要回到实践中接受检验。'],
    ['矛盾的普遍性', '矛盾普遍存在，承认矛盾是正确认识和解决问题的前提。'],
    ['矛盾的特殊性', '具体问题具体分析，是马克思主义活的灵魂，也是认识事物的基础。'],
    ['主要矛盾与主要方面', '主要矛盾决定发展重点，矛盾主要方面决定事物性质，要注意二者的区别。'],
    ['量变与质变', '量变是质变的必要准备，质变是量变的必然结果，备考积累正是量变过程。'],
    ['否定之否定', '发展是前进性和曲折性的统一，不是简单重复，而是在更高阶段的扬弃。'],
    ['社会存在与社会意识', '社会存在决定社会意识，先进社会意识也能推动社会存在的发展。'],
    ['人民群众创造历史', '人民群众是历史的创造者，评价个人作用要放到历史条件和人民实践中。'],
    ['商品的二因素', '商品具有使用价值和价值二因素，使用价值是价值的物质承担者。'],
    ['劳动二重性', '具体劳动创造使用价值，抽象劳动形成价值，这是理解商品价值的关键。'],
    ['剩余价值来源', '剩余价值来自雇佣劳动者的剩余劳动，不是流通领域凭空产生的。'],
    ['真理的相对性', '真理具有客观性、绝对性和相对性，判断观点必须结合条件和范围。'],
  ],
  [
    ['毛泽东思想活的灵魂', '实事求是、群众路线、独立自主是毛泽东思想活的灵魂。'],
    ['三大法宝', '统一战线、武装斗争、党的建设是中国革命取得胜利的三大法宝。'],
    ['革命道路', '农村包围城市、武装夺取政权，是从中国国情出发形成的革命道路。'],
    ['新民主主义革命领导权', '无产阶级领导权是新民主主义革命的中心问题，也是革命成败关键。'],
    ['社会主义改造', '社会主义改造完成后，我国建立起社会主义基本制度。'],
    ['改革开放', '改革开放是决定当代中国命运的关键一招，也是新的伟大革命。'],
    ['党的领导', '中国共产党的领导是中国特色社会主义最本质的特征和最大制度优势。'],
    ['中国式现代化', '中国式现代化是人口规模巨大的现代化，也是全体人民共同富裕的现代化。'],
    ['新发展理念', '创新、协调、绿色、开放、共享是完整统一的新发展理念。'],
    ['高质量发展', '高质量发展是全面建设社会主义现代化国家的首要任务。'],
    ['全过程人民民主', '全过程人民民主把民主选举、协商、决策、管理、监督贯通起来。'],
    ['全面依法治国', '全面依法治国总目标是建设中国特色社会主义法治体系、建设社会主义法治国家。'],
  ],
  [
    ['五四运动', '五四运动是中国旧民主主义革命走向新民主主义革命的转折点。'],
    ['中国共产党成立', '中国共产党成立是开天辟地的大事变，使中国革命有了坚强领导核心。'],
    ['遵义会议', '遵义会议是党的历史上生死攸关的转折点，开始确立正确领导核心。'],
    ['抗日战争胜利', '抗日战争是近代以来中国人民反抗外敌入侵取得完全胜利的民族解放战争。'],
    ['新中国成立', '中华人民共和国成立标志着新民主主义革命取得基本胜利，开辟了历史新纪元。'],
    ['社会主义制度确立', '社会主义基本制度在中国的确立，是中国历史上最深刻最伟大的社会变革。'],
    ['改革开放新时期', '改革开放使党和人民大踏步赶上时代，是决定当代中国命运的关键。'],
    ['中国特色社会主义新时代', '党的十八大以来，中国特色社会主义进入新时代，中华民族迎来强起来的伟大飞跃。'],
    ['近代中国主要矛盾', '近代中国社会主要矛盾的变化，决定革命任务和革命对象的变化。'],
    ['洋务运动', '洋务运动主张学习西方技术，但没有触动封建制度，最终未能使中国走向富强。'],
    ['辛亥革命', '辛亥革命推翻清王朝统治，结束君主专制制度，但没有改变中国半殖民地半封建社会性质。'],
    ['抗战统一战线', '抗日民族统一战线是全民族抗战胜利的重要保证，中国共产党发挥中流砥柱作用。'],
  ],
  [
    ['爱国主义', '爱国主义是民族精神的核心，要与社会主义相统一、与维护国家统一相统一。'],
    ['理想信念', '理想信念是精神之钙，必须落实到学习、工作和生活实践中。'],
    ['人生价值', '人生价值包括自我价值和社会价值，社会价值是人生价值的主要方面。'],
    ['社会主义核心价值观国家层面', '国家层面是富强、民主、文明、和谐，体现建设目标。'],
    ['社会主义核心价值观社会层面', '社会层面是自由、平等、公正、法治，体现社会建设取向。'],
    ['社会主义核心价值观个人层面', '个人层面是爱国、敬业、诚信、友善，体现公民道德准则。'],
    ['社会公德', '社会公德主要包括文明礼貌、助人为乐、爱护公物、保护环境、遵纪守法。'],
    ['职业道德', '职业道德强调爱岗敬业、诚实守信、办事公道、服务群众、奉献社会。'],
    ['诚信原则', '诚信是个人立身处世的基本准则，也是社会和谐的重要基础。'],
    ['法律权利与义务', '法律权利和法律义务相互依存、相互贯通，不能只强调权利而回避义务。'],
    ['宪法地位', '宪法是国家根本法，具有最高法律效力，规定国家根本制度和公民基本权利。'],
    ['法治思维', '法治思维包含规则、程序、权利义务和责任意识，处理问题要守住法律边界。'],
  ],
  [
    ['和平与发展', '和平与发展仍是时代主题，但世界并不太平，和平发展与风险挑战并存。'],
    ['人类命运共同体', '人类命运共同体倡导持久和平、普遍安全、共同繁荣、开放包容、清洁美丽。'],
    ['共商共建共享', '共建一带一路坚持共商共建共享，重视互联互通和共同发展。'],
    ['三大全球倡议', '全球发展、安全、文明倡议分别回应发展赤字、安全困境和文明交流问题。'],
    ['独立自主', '独立自主是立党立国的重要原则，对外开放建立在自立自强基础之上。'],
    ['总体国家安全观', '总体国家安全观以人民安全为宗旨，以政治安全为根本，强调系统思维。'],
    ['真正的多边主义', '真正的多边主义强调各国共同参与、平等协商和共同维护国际规则。'],
    ['全球治理', '全球治理需要坚持共商共建共享，推动国际秩序朝着更加公正合理方向发展。'],
    ['文明交流互鉴', '文明因交流而多彩、因互鉴而丰富，应尊重文明多样性，反对文明优越论。'],
    ['绿色发展', '绿水青山就是金山银山，生态文明建设关系中华民族永续发展。'],
    ['科技自立自强', '科技自立自强是国家强盛和民族复兴的重要战略支撑。'],
    ['共同安全', '共同、综合、合作、可持续的安全观，强调各国安全不可分割。'],
  ],
];

export const POLITICAL_TIPS = politicalTipGroups.flatMap((group, categoryIndex) =>
  group.map(([title, body], index) => ({
    id: `political-${categoryIndex + 1}-${index + 1}`,
    category: POLITICAL_TIP_CATEGORIES[categoryIndex],
    title,
    body,
  })),
);

export const DEFAULT_DAILY_TASKS = [
  { id: 'english-vocab', text: '英语单词' },
  { id: 'english-reading', text: '英语阅读' },
  { id: 'politics', text: '政治' },
  { id: 'physical-geography', text: '自然地理' },
  { id: 'environmental-chemistry', text: '环境化学' },
];

export function createInitialState() {
  return {
    tasksByDate: {},
    rewardByDate: {},
    streak: 0,
    studyDays: 0,
    totalRewardOverride: '',
    lastCompletedDate: '',
    politicalFavorites: [],
    politicalTipByDate: {},
  };
}

export function ensureDailyTasks(state, date) {
  const existingTasks = state.tasksByDate[date];
  const hasFixedTasks = existingTasks?.length === DEFAULT_DAILY_TASKS.length &&
    DEFAULT_DAILY_TASKS.every((task) => existingTasks.some((existing) => existing.id === task.id));
  if (hasFixedTasks) return state;

  const completedById = new Map((existingTasks || []).map((task) => [task.id, Boolean(task.completed)]));

  return {
    ...state,
    tasksByDate: {
      ...state.tasksByDate,
      [date]: DEFAULT_DAILY_TASKS.map((task) => ({
        ...task,
        completed: completedById.get(task.id) || false,
        createdAt: new Date().toISOString(),
      })),
    },
  };
}

export function markTask(state, date, id, completed) {
  const tasks = state.tasksByDate[date] || [];
  return {
    ...state,
    tasksByDate: {
      ...state.tasksByDate,
      [date]: tasks.map((task) =>
        task.id === id ? { ...task, completed: Boolean(completed) } : task,
      ),
    },
  };
}

export function deleteTask(state, date, id) {
  const tasks = state.tasksByDate[date] || [];
  return {
    ...state,
    tasksByDate: {
      ...state.tasksByDate,
      [date]: tasks.filter((task) => task.id !== id),
    },
  };
}

export function setDailyReward(state, date, amount) {
  const value = String(amount ?? '').trim();
  const normalized = value === '' ? '' : Number.isFinite(Number(value)) ? Number(value).toFixed(2) : '';

  return {
    ...state,
    rewardByDate: {
      ...state.rewardByDate,
      [date]: normalized,
    },
  };
}

export function getDailyReward(state, date) {
  return state.rewardByDate?.[date] || '';
}

function normalizeNonNegativeInteger(value) {
  const number = Number(String(value ?? '').trim());
  return Number.isFinite(number) && number >= 0 ? Math.floor(number) : 0;
}

function normalizeMoney(value) {
  const text = String(value ?? '').trim();
  if (text === '') return '';
  const number = Number(text);
  return Number.isFinite(number) && number >= 0 ? number.toFixed(2) : '';
}

export function setStreak(state, days) {
  return {
    ...state,
    streak: normalizeNonNegativeInteger(days),
  };
}

export function setStudyDays(state, days) {
  return {
    ...state,
    studyDays: normalizeNonNegativeInteger(days),
  };
}

export function setTotalRewardOverride(state, amount) {
  return {
    ...state,
    totalRewardOverride: normalizeMoney(amount),
  };
}

export function getTotalReward(state) {
  if (state.totalRewardOverride) return state.totalRewardOverride;

  const total = Object.values(state.rewardByDate || {}).reduce((sum, value) => {
    const amount = Number(value);
    return Number.isFinite(amount) ? sum + amount : sum;
  }, 0);

  return total.toFixed(2);
}

export function getDailyStats(state, date) {
  const tasks = state.tasksByDate[date] || [];
  const total = tasks.length;
  const completed = tasks.filter((task) => task.completed).length;
  const completionRate = total === 0 ? 0 : Math.round((completed / total) * 100);
  const isQualified = total > 0 && completionRate >= 50;

  return {
    total,
    completed,
    completionRate,
    allComplete: total > 0 && completed === total,
    isQualified,
  };
}

export function updateCompletionRecord(state, date) {
  const stats = getDailyStats(state, date);
  if (!stats.isQualified || state.lastCompletedDate === date) return state;

  const yesterday = getOffsetDate(date, -1);
  const streak = normalizeNonNegativeInteger(state.streak) + 1;

  return {
    ...state,
    streak,
    studyDays: normalizeNonNegativeInteger(state.studyDays) + 1,
    lastCompletedDate: date,
  };
}

function getOffsetDate(date, offsetDays) {
  const current = new Date(`${date}T00:00:00`);
  current.setDate(current.getDate() + offsetDays);
  return formatDate(current);
}

function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function loadState() {
  try {
    const rawState = window.localStorage.getItem(STORAGE_KEY);
    return rawState ? { ...createInitialState(), ...JSON.parse(rawState) } : createInitialState();
  } catch {
    return createInitialState();
  }
}

function saveState(state) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function pickDailyEncouragement(date) {
  const seed = [...date].reduce((sum, char) => sum + char.charCodeAt(0), 0);
  return encouragements[seed % encouragements.length];
}

export function getDailyPoliticalTip(date) {
  const seed = [...date].reduce((sum, char) => sum + char.charCodeAt(0), 0);
  return POLITICAL_TIPS[seed % POLITICAL_TIPS.length];
}

export function getPoliticalTipById(id) {
  return POLITICAL_TIPS.find((tip) => tip.id === id) || null;
}

export function getNextPoliticalTip(currentId, date) {
  const currentIndex = POLITICAL_TIPS.findIndex((tip) => tip.id === currentId);
  const offset = [...date].reduce((sum, char) => sum + char.charCodeAt(0), 0);
  const nextIndex = currentIndex < 0 ? offset % POLITICAL_TIPS.length : (currentIndex + 1) % POLITICAL_TIPS.length;
  return POLITICAL_TIPS[nextIndex];
}

export function setPoliticalTipForDate(state, date, id) {
  if (!getPoliticalTipById(id)) return state;
  return {
    ...state,
    politicalTipByDate: {
      ...(state.politicalTipByDate || {}),
      [date]: id,
    },
  };
}

export function togglePoliticalFavorite(state, id) {
  if (!getPoliticalTipById(id)) return state;
  const favorites = new Set(state.politicalFavorites || []);
  if (favorites.has(id)) favorites.delete(id);
  else favorites.add(id);
  return { ...state, politicalFavorites: [...favorites] };
}

function mountApp() {
  const today = formatDate(new Date());
  let state = ensureDailyTasks(loadState(), today);
  let selectedDate = today;

  const list = document.querySelector('[data-task-list]');
  const dateLabel = document.querySelector('[data-today]');
  const datePicker = document.querySelector('[data-date-picker]');
  const todayButton = document.querySelector('[data-today-button]');
  const viewingDate = document.querySelector('[data-viewing-date]');
  const progressBar = document.querySelector('[data-progress-bar]');
  const progressText = document.querySelector('[data-progress-text]');
  const completedCount = document.querySelector('[data-completed-count]');
  const totalCount = document.querySelector('[data-total-count]');
  const streakInput = document.querySelector('[data-streak-input]');
  const studyDaysInput = document.querySelector('[data-study-days-input]');
  const rewardInput = document.querySelector('[data-reward-input]');
  const totalRewardInput = document.querySelector('[data-total-reward-input]');
  const politicalTipTitle = document.querySelector('[data-political-tip-title]');
  const politicalTipBody = document.querySelector('[data-political-tip-body]');
  const politicalTipCategory = document.querySelector('[data-political-tip-category]');
  const nextPoliticalTipButton = document.querySelector('[data-next-political-tip]');
  const favoritePoliticalTipButton = document.querySelector('[data-favorite-political-tip]');
  const toggleFavoritesButton = document.querySelector('[data-toggle-favorites]');
  const favoritesPanel = document.querySelector('[data-favorites-panel]');
  const favoritesList = document.querySelector('[data-favorites-list]');
  const favoritesEmpty = document.querySelector('[data-favorites-empty]');
  const encouragement = document.querySelector('[data-encouragement]');
  const completionMessage = document.querySelector('[data-completion-message]');

  datePicker.max = today;
  encouragement.textContent = pickDailyEncouragement(today);

  function persistAndRender(nextState) {
    state = selectedDate === today ? updateCompletionRecord(nextState, today) : nextState;
    saveState(state);
    render();
  }

  function getSelectedPoliticalTip() {
    const savedId = state.politicalTipByDate?.[selectedDate];
    return getPoliticalTipById(savedId) || getDailyPoliticalTip(selectedDate);
  }

  function renderPoliticalTip() {
    const politicalTip = getSelectedPoliticalTip();
    const isFavorite = (state.politicalFavorites || []).includes(politicalTip.id);

    politicalTipCategory.textContent = politicalTip.category;
    politicalTipTitle.textContent = politicalTip.title;
    politicalTipBody.textContent = politicalTip.body;
    favoritePoliticalTipButton.textContent = isFavorite ? '已收藏' : '收藏';
    favoritePoliticalTipButton.setAttribute('aria-pressed', String(isFavorite));

    const favoriteTips = (state.politicalFavorites || [])
      .map((id) => getPoliticalTipById(id))
      .filter(Boolean);
    favoritesList.innerHTML = '';
    favoritesEmpty.hidden = favoriteTips.length > 0;
    favoriteTips.forEach((tip) => {
      const item = document.createElement('li');
      const button = document.createElement('button');
      button.type = 'button';
      button.innerHTML = `${tip.title}<small>${tip.category}</small>`;
      button.addEventListener('click', () => {
        persistAndRender(setPoliticalTipForDate(state, selectedDate, tip.id));
      });
      item.append(button);
      favoritesList.append(item);
    });
  }

  function render() {
    const tasks = state.tasksByDate[selectedDate] || [];
    const stats = getDailyStats(state, selectedDate);
    const date = new Date(`${selectedDate}T00:00:00`);
    const formattedDate = new Intl.DateTimeFormat('zh-CN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'long',
    }).format(date);

    dateLabel.textContent = formattedDate;
    datePicker.value = selectedDate;
    todayButton.disabled = selectedDate === today;
    viewingDate.textContent = selectedDate === today ? '正在记录今天的学习' : `正在查看 ${formattedDate} 的学习记录`;
    rewardInput.value = getDailyReward(state, selectedDate);
    totalRewardInput.value = getTotalReward(state);
    streakInput.value = String(state.streak);
    studyDaysInput.value = String(state.studyDays || 0);
    list.innerHTML = '';

    tasks.forEach((task) => {
      const item = document.createElement('li');
      item.className = `task-item${task.completed ? ' is-complete' : ''}`;

      const label = document.createElement('label');
      label.className = 'task-check';

      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.checked = task.completed;
      checkbox.addEventListener('change', () => {
        persistAndRender(markTask(state, selectedDate, task.id, checkbox.checked));
      });

      const text = document.createElement('span');
      text.textContent = task.text;

      label.append(checkbox, text);
      item.append(label);
      list.append(item);
    });

    progressBar.style.width = `${stats.completionRate}%`;
    progressText.textContent = `${stats.completionRate}%`;
    completedCount.textContent = String(stats.completed);
    totalCount.textContent = String(stats.total);
    if (stats.allComplete) {
      completionMessage.textContent = (selectedDate === today ? "今天" : "这一天") + "五项都完成了，天大路上又稳了一步。";
    } else if (stats.isQualified) {
      completionMessage.textContent = "今天已完成有效打卡，继续冲满五项更稳。";
    } else {
      completionMessage.textContent = "完成 3 项就算今天有效学习打卡。";
    }
    completionMessage.classList.toggle("is-complete", stats.isQualified);
    renderPoliticalTip();
  }

  rewardInput.addEventListener('change', () => {
    persistAndRender(setDailyReward(state, selectedDate, rewardInput.value));
  });

  streakInput.addEventListener('change', () => {
    persistAndRender(setStreak(state, streakInput.value));
  });

  studyDaysInput.addEventListener('change', () => {
    persistAndRender(setStudyDays(state, studyDaysInput.value));
  });

  totalRewardInput.addEventListener('change', () => {
    persistAndRender(setTotalRewardOverride(state, totalRewardInput.value));
  });

  datePicker.addEventListener('change', () => {
    if (!datePicker.value || datePicker.value > today) return;
    selectedDate = datePicker.value;
    state = ensureDailyTasks(state, selectedDate);
    saveState(state);
    render();
  });

  todayButton.addEventListener('click', () => {
    selectedDate = today;
    state = ensureDailyTasks(state, today);
    saveState(state);
    render();
  });

  nextPoliticalTipButton.addEventListener('click', () => {
    const nextTip = getNextPoliticalTip(getSelectedPoliticalTip().id, selectedDate);
    persistAndRender(setPoliticalTipForDate(state, selectedDate, nextTip.id));
  });

  favoritePoliticalTipButton.addEventListener('click', () => {
    persistAndRender(togglePoliticalFavorite(state, getSelectedPoliticalTip().id));
  });

  toggleFavoritesButton.addEventListener('click', () => {
    const isOpen = !favoritesPanel.hidden;
    favoritesPanel.hidden = isOpen;
    toggleFavoritesButton.setAttribute('aria-expanded', String(!isOpen));
    toggleFavoritesButton.textContent = isOpen ? '查看收藏' : '收起收藏';
  });

  render();
}

if (typeof document !== 'undefined') {
  mountApp();

  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./service-worker.js').catch(() => {
        // Service workers require HTTPS or localhost; local file previews still work.
      });
    });
  }
}
