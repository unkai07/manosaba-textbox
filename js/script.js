// Configuration
const CHARACTERS = {
    "ema": { name: "樱羽艾玛", emotion_count: 8, font: "fonts/text.woff2" },
    "hiro": { name: "二阶堂希罗", emotion_count: 6, font: "fonts/text.woff2" },
    "sherri": { name: "橘雪莉", emotion_count: 7, font: "fonts/text.woff2" },
    "hanna": { name: "远野汉娜", emotion_count: 5, font: "fonts/text.woff2" },
    "anan": { name: "夏目安安", emotion_count: 9, font: "fonts/text.woff2" },
    "yuki": { name: "月代雪", emotion_count: 18, font: "fonts/text.woff2" },
    "meruru": { name: "冰上梅露露", emotion_count: 6, font: "fonts/text.woff2" },
    "noa": { name: "城崎诺亚", emotion_count: 6, font: "fonts/text.woff2" },
    "reia": { name: "莲见蕾雅", emotion_count: 7, font: "fonts/text.woff2" },
    "miria": { name: "佐伯米莉亚", emotion_count: 4, font: "fonts/text.woff2" },
    "nanoka": { name: "黑部奈叶香", emotion_count: 5, font: "fonts/text.woff2" },
    "mago": { name: "宝生玛格", emotion_count: 5, font: "fonts/text.woff2" },
    "alisa": { name: "紫藤亚里沙", emotion_count: 6, font: "fonts/text.woff2" },
    "coco": { name: "泽渡可可", emotion_count: 5, font: "fonts/text.woff2" }
};

const TEXT_CONFIGS = {
    "nanoka": [
        { text: "黑", position: [759, 103], font_color: "rgb(131,143,147)", font_size: 196 },
        { text: "部", position: [955, 215], font_color: "rgb(255, 255, 255)", font_size: 92 },
        { text: "奈", position: [1053, 157], font_color: "rgb(255, 255, 255)", font_size: 147 },
        { text: "叶香", position: [1197, 215], font_color: "rgb(255, 255, 255)", font_size: 92 }
    ],
    "hiro": [
        { text: "二", position: [759, 103], font_color: "rgb(239,79,84)", font_size: 196 },
        { text: "阶堂", position: [955, 215], font_color: "rgb(255, 255, 255)", font_size: 92 },
        { text: "希", position: [1143, 150], font_color: "rgb(255, 255, 255)", font_size: 147 },
        { text: "罗", position: [1283, 215], font_color: "rgb(255, 255, 255)", font_size: 92 }
    ],
    "ema": [
        { text: "樱", position: [759, 113], font_color: "rgb(253,145,175)", font_size: 186 },
        { text: "羽", position: [949, 215], font_color: "rgb(255, 255, 255)", font_size: 92 },
        { text: "艾", position: [1039, 157], font_color: "rgb(255, 255, 255)", font_size: 147 },
        { text: "玛", position: [1183, 215], font_color: "rgb(255, 255, 255)", font_size: 92 }
    ],
    "sherri": [
        { text: "橘", position: [759, 113], font_color: "rgb(137,177,251)", font_size: 186 },
        { text: "雪", position: [943, 150], font_color: "rgb(255, 255, 255)", font_size: 147 },
        { text: "莉", position: [1093, 215], font_color: "rgb(255, 255, 255)", font_size: 92 }
    ],
    "anan": [
        { text: "夏", position: [759, 113], font_color: "rgb(159,145,251)", font_size: 186 },
        { text: "目", position: [949, 215], font_color: "rgb(255, 255, 255)", font_size: 92 },
        { text: "安", position: [1039, 157], font_color: "rgb(255, 255, 255)", font_size: 147 },
        { text: "安", position: [1183, 215], font_color: "rgb(255, 255, 255)", font_size: 92 }
    ],
    "noa": [
        { text: "城", position: [759, 113], font_color: "rgb(104,223,231)", font_size: 186 },
        { text: "崎", position: [945, 215], font_color: "rgb(255, 255, 255)", font_size: 92 },
        { text: "诺", position: [1042, 157], font_color: "rgb(255, 255, 255)", font_size: 147 },
        { text: "亚", position: [1186, 215], font_color: "rgb(255, 255, 255)", font_size: 92 }
    ],
    "coco": [
        { text: "泽", position: [759, 113], font_color: "rgb(251,114,78)", font_size: 186 },
        { text: "渡", position: [945, 215], font_color: "rgb(255, 255, 255)", font_size: 92 },
        { text: "可", position: [1042, 157], font_color: "rgb(255, 255, 255)", font_size: 147 },
        { text: "可", position: [1186, 215], font_color: "rgb(255, 255, 255)", font_size: 92 }
    ],
    "alisa": [
        { text: "紫", position: [759, 113], font_color: "rgb(235,75,60)", font_size: 186 },
        { text: "藤", position: [945, 215], font_color: "rgb(255, 255, 255)", font_size: 92 },
        { text: "亚", position: [1042, 157], font_color: "rgb(255, 255, 255)", font_size: 147 },
        { text: "里沙", position: [1186, 215], font_color: "rgb(255, 255, 255)", font_size: 92 }
    ],
    "reia": [
        { text: "莲", position: [759, 113], font_color: "rgb(253,177,88)", font_size: 186 },
        { text: "见", position: [945, 215], font_color: "rgb(255, 255, 255)", font_size: 92 },
        { text: "蕾", position: [1042, 157], font_color: "rgb(255, 255, 255)", font_size: 147 },
        { text: "雅", position: [1186, 215], font_color: "rgb(255, 255, 255)", font_size: 92 }
    ],
    "mago": [
        { text: "宝", position: [759, 113], font_color: "rgb(185,124,235)", font_size: 186 },
        { text: "生", position: [945, 215], font_color: "rgb(255, 255, 255)", font_size: 92 },
        { text: "玛", position: [1042, 157], font_color: "rgb(255, 255, 255)", font_size: 147 },
        { text: "格", position: [1186, 215], font_color: "rgb(255, 255, 255)", font_size: 92 }
    ],
    "hanna": [
        { text: "远", position: [759, 113], font_color: "rgb(169,199,30)", font_size: 186 },
        { text: "野", position: [945, 215], font_color: "rgb(255, 255, 255)", font_size: 92 },
        { text: "汉", position: [1042, 157], font_color: "rgb(255, 255, 255)", font_size: 147 },
        { text: "娜", position: [1186, 215], font_color: "rgb(255, 255, 255)", font_size: 92 }
    ],
    "meruru": [
        { text: "冰", position: [759, 113], font_color: "rgb(227,185,175)", font_size: 186 },
        { text: "上", position: [945, 215], font_color: "rgb(255, 255, 255)", font_size: 92 },
        { text: "梅", position: [1042, 157], font_color: "rgb(255, 255, 255)", font_size: 147 },
        { text: "露露", position: [1186, 215], font_color: "rgb(255, 255, 255)", font_size: 92 }
    ],
    "miria": [
        { text: "佐", position: [759, 113], font_color: "rgb(235,207,139)", font_size: 186 },
        { text: "伯", position: [945, 215], font_color: "rgb(255, 255, 255)", font_size: 92 },
        { text: "米", position: [1042, 157], font_color: "rgb(255, 255, 255)", font_size: 147 },
        { text: "莉亚", position: [1186, 215], font_color: "rgb(255, 255, 255)", font_size: 92 }
    ],
    "yuki": [
        { text: "月", position: [759, 103], font_color: "rgb(195,209,231)", font_size: 196 },
        { text: "代", position: [948, 215], font_color: "rgb(255, 255, 255)", font_size: 92 },
        { text: "雪", position: [1053, 157], font_color: "rgb(255, 255, 255)", font_size: 147 }
    ]
};

const TEXT_BOX_CONFIG = {
    x: 728,
    y: 355,
    width: 1611, // 2339 - 728
    height: 445, // 800 - 355
    padding: 12
};

// DOM Elements
const canvas = document.getElementById('preview-canvas');
const ctx = canvas.getContext('2d');
const loadingIndicator = document.getElementById('loading-indicator');
const generateBtn = document.getElementById('generate-btn');
const downloadBtn = document.getElementById('download-btn');

// Tabs
const tabs = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

// Text Box Controls
const characterSelect = document.getElementById('character-select');
const expressionSelect = document.getElementById('expression-select');
const randomExpressionBtn = document.getElementById('random-expression-btn');
const backgroundSelect = document.getElementById('background-select');
const randomBackgroundBtn = document.getElementById('random-background-btn');
const textInput = document.getElementById('text-input');

// Anan Says Controls
const ananExpressionSelect = document.getElementById('anan-expression-select');
const ananTextInput = document.getElementById('anan-text-input');

// Trial Controls
const trialCharacterSelect = document.getElementById('trial-character-select');
const trialOptionsList = document.getElementById('trial-options-list');
const addOptionBtn = document.getElementById('add-option-btn');

// State
let currentTab = localStorage.getItem('currentTab') || 'textbox';
let currentCharacter = 'sherri'; // Default character
let currentExpression = 1;
let currentBackground = 1;
let fontLoaded = false;
let trialOptions = []; // Array of {type, text}

// Initialize
async function init() {
    // Load font
    try {
        const font = new FontFace('CustomFont', 'url(fonts/text.woff2)');
        await font.load();
        document.fonts.add(font);
        fontLoaded = true;
    } catch (e) {
        console.error('Font loading failed:', e);
    }

    // Populate character select
    for (const [key, value] of Object.entries(CHARACTERS)) {
        const option = document.createElement('option');
        option.value = key;
        option.textContent = value.name;
        if (key === currentCharacter) option.selected = true;
        characterSelect.appendChild(option);
    }

    // Populate background select
    for (let i = 1; i <= 16; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = `背景 ${i}`;
        backgroundSelect.appendChild(option);
    }

    updateExpressionOptions();
    addTrialOption(); // Add one default option

    // Tab switching
    // Initialize tabs based on saved state
    tabs.forEach(t => t.classList.remove('active'));
    tabContents.forEach(c => c.classList.remove('active'));

    const activeTabBtn = document.querySelector(`.tab-btn[data-tab="${currentTab}"]`);
    const activeTabContent = document.getElementById(`${currentTab}-controls`);

    if (activeTabBtn && activeTabContent) {
        activeTabBtn.classList.add('active');
        activeTabContent.classList.add('active');
    }

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));

            tab.classList.add('active');
            document.getElementById(`${tab.dataset.tab}-controls`).classList.add('active');
            currentTab = tab.dataset.tab;
            localStorage.setItem('currentTab', currentTab);
            generateImage();
        });
    });

    // Event listeners
    // Text Box
    characterSelect.addEventListener('change', (e) => {
        currentCharacter = e.target.value;
        updateExpressionOptions();
        currentExpression = 1; // Reset expression
        generateImage();
    });

    expressionSelect.addEventListener('change', (e) => {
        currentExpression = parseInt(e.target.value);
        generateImage();
    });

    randomExpressionBtn.addEventListener('click', () => {
        const count = CHARACTERS[currentCharacter].emotion_count;
        currentExpression = Math.floor(Math.random() * count) + 1;
        expressionSelect.value = currentExpression;
        generateImage();
    });



    backgroundSelect.addEventListener('change', (e) => {
        currentBackground = e.target.value;
        generateImage();
    });

    randomBackgroundBtn.addEventListener('click', () => {
        currentBackground = Math.floor(Math.random() * 16) + 1;
        backgroundSelect.value = currentBackground;
        generateImage();
    });

    // Anan Says
    ananExpressionSelect.addEventListener('change', generateImage);

    // Trial Options
    trialCharacterSelect.addEventListener('change', generateImage);
    addOptionBtn.addEventListener('click', addTrialOption);

    generateBtn.addEventListener('click', generateImage);

    downloadBtn.addEventListener('click', () => {
        try {
            const link = document.createElement('a');
            let filename = 'image';
            if (currentTab === 'textbox') filename = `${currentCharacter}_${Date.now()}`;
            else if (currentTab === 'anansays') filename = `anan_says_${Date.now()}`;
            else if (currentTab === 'trial') filename = `trial_${Date.now()}`;

            link.download = `${filename}.png`;
            link.href = canvas.toDataURL();
            link.click();
        } catch (e) {
            console.error('Download failed:', e);
            if (e.name === 'SecurityError') {
                alert('无法下载图片：浏览器安全限制。\n\n如果您是直接打开的 HTML 文件 (file://)，请尝试使用本地服务器运行 (例如 python -m http.server)。\n\n如果部署到 GitHub Pages，此功能将正常工作。');
            } else {
                alert('下载失败，请检查控制台日志。');
            }
        }
    });

    // Initial generation
    generateImage();
}

function updateExpressionOptions() {
    expressionSelect.innerHTML = '';
    const count = CHARACTERS[currentCharacter].emotion_count;
    for (let i = 1; i <= count; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = `表情 ${i}`;
        expressionSelect.appendChild(option);
    }
}

function addTrialOption() {
    const div = document.createElement('div');
    div.className = 'option-item';

    const select = document.createElement('select');
    const types = [
        { val: 'agreement', text: '赞同' },
        { val: 'doubt', text: '疑问' },
        { val: 'perjury', text: '伪证' },
        { val: 'refutation', text: '反驳' },
        { val: 'magic_chiyusaisei', text: '魔法:治愈再生' },
        { val: 'magic_ekitaisousa', text: '魔法:液体操作' },
        { val: 'magic_fuyuu', text: '魔法:浮游' },
        { val: 'magic_genshi', text: '魔法:幻视' },
        { val: 'magic_hakka', text: '魔法:发火' },
        { val: 'magic_irekawari', text: '魔法:交换' },
        { val: 'magic_kairiki', text: '魔法:怪力' },
        { val: 'magic_majogoroshi', text: '魔法:魔女杀手' },
        { val: 'magic_monomane', text: '魔法:模仿' },
        { val: 'magic_sennou', text: '魔法:洗脑' },
        { val: 'magic_senrigan', text: '魔法:千里眼' },
        { val: 'magic_shinimodori', text: '魔法:死归' },
        { val: 'magic_shisenyuudou', text: '魔法:视线诱导' }
    ];

    types.forEach(t => {
        const opt = document.createElement('option');
        opt.value = t.val;
        opt.textContent = t.text;
        select.appendChild(opt);
    });

    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = '选项文本';

    const removeBtn = document.createElement('button');
    removeBtn.className = 'remove-option-btn';
    removeBtn.innerHTML = '×';
    removeBtn.onclick = () => {
        div.remove();
        generateImage();
    };

    div.appendChild(select);
    div.appendChild(input);
    div.appendChild(removeBtn);
    trialOptionsList.appendChild(div);
}

async function generateImage() {
    loadingIndicator.classList.remove('hidden');
    downloadBtn.disabled = true;

    try {
        if (currentTab === 'textbox') {
            await generateTextBox();
        } else if (currentTab === 'anansays') {
            await generateAnanSays();
        } else if (currentTab === 'trial') {
            await generateTrial();
        }
        downloadBtn.disabled = false;
    } catch (e) {
        console.error('Generation failed:', e);
        alert('生成图片失败，请检查控制台日志。');
    } finally {
        loadingIndicator.classList.add('hidden');
    }
}

async function generateTextBox() {
    // Background logic
    let bgNum;
    bgNum = parseInt(currentBackground);

    // Load images
    const bgPath = `img/textbox/background/c${bgNum}.webp`;
    const charPath = `img/textbox/${currentCharacter}/${currentCharacter} (${currentExpression}).webp`;

    const [bgImg, charImg] = await Promise.all([
        loadImage(bgPath),
        loadImage(charPath)
    ]);

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw background
    canvas.width = bgImg.width;
    canvas.height = bgImg.height;
    ctx.drawImage(bgImg, 0, 0);

    // Draw character overlay (at 0, 134)
    ctx.drawImage(charImg, 0, 134);

    // Draw character name
    drawCharacterName();

    // Draw text
    drawMainText(textInput.value);
}

async function generateAnanSays() {
    const face = ananExpressionSelect.value;
    const text = ananTextInput.value;

    const basePath = `img/anan_says/${face}.webp`;
    const overlayPath = `img/anan_says/base_overlay.webp`;

    const [baseImg, overlayImg] = await Promise.all([
        loadImage(basePath),
        loadImage(overlayPath)
    ]);

    canvas.width = baseImg.width;
    canvas.height = baseImg.height;

    ctx.drawImage(baseImg, 0, 0);
    ctx.drawImage(overlayImg, 0, 0);

    // Draw text
    // Region: 100, 440, 320, 200
    drawTextInBox(text, 100, 460, 320, 180);
}

async function generateTrial() {
    const char = trialCharacterSelect.value;
    const options = Array.from(trialOptionsList.children).map(div => ({
        type: div.querySelector('select').value,
        text: div.querySelector('input').value
    })).filter(o => o.text); // Filter empty

    const bgPath = `img/trial/background.webp`;
    const charPath = `img/trial/${char}.webp`;
    const blackPath = `img/trial/black.webp`; // Assuming we have a black bg or just fill rect

    const [bgImg, charImg] = await Promise.all([
        loadImage(bgPath),
        loadImage(charPath)
    ]);

    canvas.width = 1260;
    canvas.height = 1080;

    // Draw black bg
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, 1260, 1080);

    // Draw background
    ctx.drawImage(bgImg, 0, 0);

    // Draw character (at 667, 0)
    ctx.drawImage(charImg, 667, 0);

    // Draw options
    if (options.length > 0) {
        const coords = getOptionCoordinates(options.length);

        for (let i = 0; i < options.length; i++) {
            const opt = options[i];
            const [x, y] = coords[i];

            // Draw option bg
            const optBg = await loadImage(`img/trial/option.webp`);
            ctx.drawImage(optBg, x, y);

            // Draw statement icon
            const icon = await loadImage(`img/trial/${opt.type}.webp`);
            ctx.drawImage(icon, x + 21, y - 43);

            // Draw text
            // Region: x+109, y+60, w=611, h=100
            drawTrialText(opt.text, x + 109, y + 60, 611, 100);
        }
    }
}

function getOptionCoordinates(number) {
    // Logic ported from python drawer.py
    const coords = [];
    let padding;

    if (number % 2 === 1) {
        const half = Math.floor(number / 2);
        const ceilHalf = Math.ceil(-number / 2);

        const v1 = (1080 - 364 - 216) / half;
        const v2 = (-364 + 47) / ceilHalf;

        padding = 286;
        if (half !== 0) padding = Math.min(padding, v1);
        if (ceilHalf !== 0) padding = Math.min(padding, v2);

        for (let i = ceilHalf; i <= half; i++) {
            coords.push([29, 364 + padding * i]);
        }
    } else {
        const half = Math.floor(number / 2);
        const ceilHalf = Math.ceil(-number / 2);

        const v1 = (1080 - 364 - 216) / (half - 0.5);
        const v2 = (-364 + 47) / (ceilHalf + 0.5);

        padding = Math.min(286, v1, v2);

        for (let i = ceilHalf; i < half; i++) {
            coords.push([29, 364 + padding * (i + 0.5)]);
        }
    }
    return coords;
}

function drawTextInBox(text, x, y, w, h) {
    if (!text) return;

    // Auto-size font logic
    let minSize = 10;
    let maxSize = 40;
    let bestSize = minSize;
    let bestLines = [];

    // Use bold font for measurement to ensure it fits (conservative)
    // We wrap the original text (including brackets)
    while (minSize <= maxSize) {
        const mid = Math.floor((minSize + maxSize) / 2);
        ctx.font = `bold ${mid}px CustomFont`;
        const lines = wrapText(text, w);
        const totalHeight = lines.length * (mid * 1.2);

        if (totalHeight <= h) {
            bestSize = mid;
            bestLines = lines;
            minSize = mid + 1;
        } else {
            maxSize = mid - 1;
        }
    }

    const lineHeight = bestSize * 1.2;
    const totalHeight = bestLines.length * lineHeight;
    const startYOffset = y + (h - totalHeight) / 2; // Vertical align middle

    let inBracket = false;

    bestLines.forEach((lineText, i) => {
        // Parse line into segments
        const segments = [];
        let currentText = '';

        for (let j = 0; j < lineText.length; j++) {
            const char = lineText[j];
            if (char === '【' || char === '[') {
                if (currentText) {
                    segments.push({ text: currentText, highlighted: inBracket });
                    currentText = '';
                }
                inBracket = true;
                currentText += char;
                segments.push({ text: currentText, highlighted: true });
                currentText = '';
            } else if (char === '】' || char === ']') {
                currentText += char;
                segments.push({ text: currentText, highlighted: true });
                currentText = '';
                inBracket = false;
            } else {
                currentText += char;
            }
        }
        if (currentText) {
            segments.push({ text: currentText, highlighted: inBracket });
        }

        // Calculate total width of the line to center it
        let lineWidth = 0;
        segments.forEach(segment => {
            if (segment.highlighted) {
                ctx.font = `bold ${bestSize}px CustomFont`;
            } else {
                ctx.font = `${bestSize}px CustomFont`;
            }
            lineWidth += ctx.measureText(segment.text).width;
        });

        const startXOffset = x + (w - lineWidth) / 2; // Horizontal align middle
        let currentX = startXOffset;

        // Draw each segment
        segments.forEach(segment => {
            if (segment.highlighted) {
                ctx.fillStyle = 'rgb(159, 145, 251)'; // Purple color
                ctx.font = `bold ${bestSize}px CustomFont`; // Bold font
            } else {
                ctx.fillStyle = 'black'; // Default color
                ctx.font = `${bestSize}px CustomFont`; // Regular font
            }

            ctx.fillText(segment.text, currentX, startYOffset + i * lineHeight);
            currentX += ctx.measureText(segment.text).width;
        });
    });
}

function drawTrialText(text, x, y, w, h) {
    if (!text) return;

    // Auto-size font logic
    let minSize = 10;
    let maxSize = 40;
    let bestSize = minSize;
    let bestLines = [];

    while (minSize <= maxSize) {
        const mid = Math.floor((minSize + maxSize) / 2);
        ctx.font = `${mid}px CustomFont`;
        const lines = wrapText(text, w);
        const totalHeight = lines.length * (mid * 1.2);

        if (totalHeight <= h) {
            bestSize = mid;
            bestLines = lines;
            minSize = mid + 1;
        } else {
            maxSize = mid - 1;
        }
    }

    ctx.font = `${bestSize}px CustomFont`;
    ctx.fillStyle = 'rgb(39, 33, 30)';
    ctx.textBaseline = 'top';

    bestLines.forEach((line, i) => {
        const totalHeight = bestLines.length * (bestSize * 1.2);
        const startY = y + (h - totalHeight) / 2; // Vertical align middle
        const textWidth = ctx.measureText(line).width;
        const startX = x + (w - textWidth) / 2; // Horizontal align middle
        ctx.fillText(line, startX, startY + i * (bestSize * 1.2));
    });
}

function loadImage(src) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = reject;
        img.src = src;
    });
}

function drawCharacterName() {
    const config = TEXT_CONFIGS[currentCharacter];
    if (!config) return;

    ctx.font = '92px CustomFont'; // Default size, will be overridden
    ctx.textBaseline = 'top';

    config.forEach(item => {
        if (!item.text) return;

        ctx.font = `${item.font_size}px CustomFont`;

        ctx.shadowColor = 'black';
        ctx.shadowOffsetX = 4;
        ctx.shadowOffsetY = 4;
        ctx.shadowBlur = 0; // For a sharp shadow like the original offset

        ctx.fillStyle = item.font_color;
        ctx.fillText(item.text, item.position[0], item.position[1]);

        // Reset shadow properties to avoid affecting subsequent drawings
        ctx.shadowColor = 'transparent';
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0;
        ctx.shadowBlur = 0;
    });
}

function drawMainText(text) {
    if (!text) return;

    const x = TEXT_BOX_CONFIG.x;
    const y = TEXT_BOX_CONFIG.y;
    const w = TEXT_BOX_CONFIG.width;
    const h = TEXT_BOX_CONFIG.height;

    // Default settings
    const color = 'white';
    const bracketColor = currentCharacter === 'anan' ? 'rgb(159, 145, 251)' : 'rgb(137, 177, 251)';

    // Auto-size font logic
    // Binary search for best font size
    let minSize = 10;
    let maxSize = 120;
    let bestSize = minSize;
    let bestLines = [];

    while (minSize <= maxSize) {
        const mid = Math.floor((minSize + maxSize) / 2);
        ctx.font = `${mid}px CustomFont`;
        const lines = wrapText(text, w);
        const totalHeight = lines.length * (mid * 1.15); // 1.15 line spacing

        if (totalHeight <= h) {
            bestSize = mid;
            bestLines = lines;
            minSize = mid + 1;
        } else {
            maxSize = mid - 1;
        }
    }

    // Draw text
    ctx.font = `${bestSize}px CustomFont`;
    const lineHeight = bestSize * 1.15;

    // Vertical align top
    let startY = y + TEXT_BOX_CONFIG.padding;

    bestLines.forEach((line, index) => {
        let lineX = x; // Left align
        // Parse for brackets coloring
        // Simple parser: split by [ or 【
        // This is a simplified version of the Python logic

        const segments = parseColorSegments(line, bracketColor, color);

        segments.forEach(seg => {
            ctx.shadowColor = 'black';
            ctx.shadowOffsetX = 4;
            ctx.shadowOffsetY = 4;
            ctx.shadowBlur = 0; // No blur for a hard shadow

            // Text
            ctx.fillStyle = seg.color;
            ctx.fillText(seg.text, lineX, startY + index * lineHeight);

            // Reset shadow properties to avoid affecting subsequent draws
            ctx.shadowColor = 'rgba(0, 0, 0, 0)';
            ctx.shadowOffsetX = 0;
            ctx.shadowOffsetY = 0;
            ctx.shadowBlur = 0;

            lineX += ctx.measureText(seg.text).width;
        });
    });
}

function wrapText(text, maxWidth) {
    const lines = [];
    const paragraphs = text.split('\n');

    paragraphs.forEach(para => {
        let line = '';
        const chars = para.split('');

        for (let n = 0; n < chars.length; n++) {
            const testLine = line + chars[n];
            const metrics = ctx.measureText(testLine);
            const testWidth = metrics.width;

            if (testWidth > maxWidth && n > 0) {
                lines.push(line);
                line = chars[n];
            } else {
                line = testLine;
            }
        }
        lines.push(line);
    });

    return lines;
}

function parseColorSegments(text, bracketColor, defaultColor) {
    const segments = [];
    let currentText = '';
    let inBracket = false;

    for (let i = 0; i < text.length; i++) {
        const char = text[i];

        if (char === '[' || char === '【') {
            if (currentText) {
                segments.push({ text: currentText, color: inBracket ? bracketColor : defaultColor });
                currentText = '';
            }
            inBracket = true;
            currentText += char;
            segments.push({ text: currentText, color: bracketColor });
            currentText = '';
        } else if (char === ']' || char === '】') {
            currentText += char;
            segments.push({ text: currentText, color: bracketColor });
            currentText = '';
            inBracket = false;
        } else {
            currentText += char;
        }
    }

    if (currentText) {
        segments.push({ text: currentText, color: inBracket ? bracketColor : defaultColor });
    }

    return segments;
}

// Start
init();
