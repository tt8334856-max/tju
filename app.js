const STORAGE_KEY = 'tjuKaoyanDailyState';

const encouragements = [
  '慢慢来，但别停下。今天的每一个勾选，都是在靠近天津大学。',
  '把焦虑放小一点，把行动放大一点。你正在认真奔赴自己的答案。',
  '清晨的书页、夜晚的台灯，都会替你记得这段努力。',
  '今天也许不完美，但只要完成一件事，就比昨天更稳一点。',
  '愿你合上书时，心里多一点笃定：我真的在往前走。',
];

export function createInitialState() {
  return {
    tasksByDate: {},
    rewardByDate: {},
    streak: 0,
    lastCompletedDate: '',
  };
}

export function addTask(state, date, text, id = Date.now()) {
  const trimmedText = String(text || '').trim();
  if (!trimmedText) return state;

  const tasks = state.tasksByDate[date] || [];
  return {
    ...state,
    tasksByDate: {
      ...state.tasksByDate,
      [date]: [
        ...tasks,
        {
          id,
          text: trimmedText,
          completed: false,
          createdAt: new Date().toISOString(),
        },
      ],
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

export function getTotalReward(state) {
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

  return {
    total,
    completed,
    completionRate,
    allComplete: total > 0 && completed === total,
  };
}

export function updateCompletionRecord(state, date) {
  const stats = getDailyStats(state, date);
  if (!stats.allComplete || state.lastCompletedDate === date) return state;

  const yesterday = getOffsetDate(date, -1);
  const streak = state.lastCompletedDate === yesterday ? state.streak + 1 : 1;

  return {
    ...state,
    streak,
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

function createTaskId() {
  if (window.crypto?.randomUUID) return window.crypto.randomUUID();
  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function pickDailyEncouragement(date) {
  const seed = [...date].reduce((sum, char) => sum + char.charCodeAt(0), 0);
  return encouragements[seed % encouragements.length];
}

function mountApp() {
  const today = formatDate(new Date());
  let state = loadState();

  const form = document.querySelector('[data-task-form]');
  const input = document.querySelector('[data-task-input]');
  const list = document.querySelector('[data-task-list]');
  const empty = document.querySelector('[data-empty-state]');
  const dateLabel = document.querySelector('[data-today]');
  const progressBar = document.querySelector('[data-progress-bar]');
  const progressText = document.querySelector('[data-progress-text]');
  const completedCount = document.querySelector('[data-completed-count]');
  const totalCount = document.querySelector('[data-total-count]');
  const streak = document.querySelector('[data-streak]');
  const totalFinished = document.querySelector('[data-total-finished]');
  const rewardInput = document.querySelector('[data-reward-input]');
  const totalReward = document.querySelector('[data-total-reward]');
  const encouragement = document.querySelector('[data-encouragement]');
  const completionMessage = document.querySelector('[data-completion-message]');

  dateLabel.textContent = new Intl.DateTimeFormat('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long',
  }).format(new Date());
  encouragement.textContent = pickDailyEncouragement(today);

  function persistAndRender(nextState) {
    state = updateCompletionRecord(nextState, today);
    saveState(state);
    render();
  }

  function render() {
    const tasks = state.tasksByDate[today] || [];
    const stats = getDailyStats(state, today);
    const totalCompletedTasks = Object.values(state.tasksByDate)
      .flat()
      .filter((task) => task.completed).length;

    rewardInput.value = getDailyReward(state, today);
    totalReward.textContent = getTotalReward(state);
    list.innerHTML = '';
    empty.hidden = tasks.length !== 0;

    tasks.forEach((task) => {
      const item = document.createElement('li');
      item.className = `task-item${task.completed ? ' is-complete' : ''}`;

      const label = document.createElement('label');
      label.className = 'task-check';

      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.checked = task.completed;
      checkbox.addEventListener('change', () => {
        persistAndRender(markTask(state, today, task.id, checkbox.checked));
      });

      const text = document.createElement('span');
      text.textContent = task.text;

      const remove = document.createElement('button');
      remove.type = 'button';
      remove.className = 'task-delete';
      remove.textContent = '删除';
      remove.setAttribute('aria-label', `删除任务：${task.text}`);
      remove.addEventListener('click', () => {
        persistAndRender(deleteTask(state, today, task.id));
      });

      label.append(checkbox, text);
      item.append(label, remove);
      list.append(item);
    });

    progressBar.style.width = `${stats.completionRate}%`;
    progressText.textContent = `${stats.completionRate}%`;
    completedCount.textContent = String(stats.completed);
    totalCount.textContent = String(stats.total);
    streak.textContent = String(state.streak);
    totalFinished.textContent = String(totalCompletedTasks);
    completionMessage.textContent = stats.allComplete
      ? '今天也离天大更近了一步。收工前，记得夸夸认真坚持的自己。'
      : '先完成一件最小的事，让今天开始滚动起来。';
    completionMessage.classList.toggle('is-complete', stats.allComplete);
  }

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const text = input.value.trim();
    if (!text) return;

    persistAndRender(addTask(state, today, text, createTaskId()));
    input.value = '';
    input.focus();
  });

  rewardInput.addEventListener('change', () => {
    persistAndRender(setDailyReward(state, today, rewardInput.value));
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
