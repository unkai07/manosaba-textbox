// Configuration
const CHARACTERS = {
    "ema": { name: "樱羽艾玛", emotion_count: 8, font: "static/fonts/font3.ttf" },
    "hiro": { name: "二阶堂希罗", emotion_count: 6, font: "static/fonts/font3.ttf" },
    "sherri": { name: "橘雪莉", emotion_count: 7, font: "static/fonts/font3.ttf" },
    "hanna": { name: "远野汉娜", emotion_count: 5, font: "static/fonts/font3.ttf" },
    "anan": { name: "夏目安安", emotion_count: 9, font: "static/fonts/font3.ttf" },
    "yuki": { name: "月代雪", emotion_count: 18, font: "static/fonts/font3.ttf" },
    "meruru": { name: "冰上梅露露", emotion_count: 6, font: "static/fonts/font3.ttf" },
    "noa": { name: "城崎诺亚", emotion_count: 6, font: "static/fonts/font3.ttf" },
    "reia": { name: "莲见蕾雅", emotion_count: 7, font: "static/fonts/font3.ttf" },
    "miria": { name: "佐伯米莉亚", emotion_count: 4, font: "static/fonts/font3.ttf" },
    "nanoka": { name: "黑部奈叶香", emotion_count: 5, font: "static/fonts/font3.ttf" },
    "mago": { name: "宝生玛格", emotion_count: 5, font: "static/fonts/font3.ttf" },
    "alisa": { name: "紫藤亚里沙", emotion_count: 6, font: "static/fonts/font3.ttf" },
    "coco": { name: "泽渡可可", emotion_count: 5, font: "static/fonts/font3.ttf" }
};

const TEXT_CONFIGS = {
    "nanoka": [
        { text: "黑", position: [759, 63], font_color: "rgb(131,143,147)", font_size: 196 },
        { text: "部", position: [955, 175], font_color: "rgb(255, 255, 255)", font_size: 92 },
        { text: "奈", position: [1053, 117], font_color: "rgb(255, 255, 255)", font_size: 147 },
        { text: "叶香", position: [1197, 175], font_color: "rgb(255, 255, 255)", font_size: 92 }
    ],
    "hiro": [
        { text: "二", position: [759, 63], font_color: "rgb(239,79,84)", font_size: 196 },
        { text: "阶堂", position: [955, 175], font_color: "rgb(255, 255, 255)", font_size: 92 },
        { text: "希", position: [1143, 110], font_color: "rgb(255, 255, 255)", font_size: 147 },
        { text: "罗", position: [1283, 175], font_color: "rgb(255, 255, 255)", font_size: 92 }
    ],
    "ema": [
        { text: "樱", position: [759, 73], font_color: "rgb(253,145,175)", font_size: 186 },
        { text: "羽", position: [949, 175], font_color: "rgb(255, 255, 255)", font_size: 92 },
        { text: "艾", position: [1039, 117], font_color: "rgb(255, 255, 255)", font_size: 147 },
        { text: "玛", position: [1183, 175], font_color: "rgb(255, 255, 255)", font_size: 92 }
    ],
    "sherri": [
        { text: "橘", position: [759, 73], font_color: "rgb(137,177,251)", font_size: 186 },
        { text: "雪", position: [943, 110], font_color: "rgb(255, 255, 255)", font_size: 147 },
        { text: "莉", position: [1093, 175], font_color: "rgb(255, 255, 255)", font_size: 92 }
    ],
    "anan": [
        { text: "夏", position: [759, 73], font_color: "rgb(159,145,251)", font_size: 186 },
        { text: "目", position: [949, 175], font_color: "rgb(255, 255, 255)", font_size: 92 },
        { text: "安", position: [1039, 117], font_color: "rgb(255, 255, 255)", font_size: 147 },
        { text: "安", position: [1183, 175], font_color: "rgb(255, 255, 255)", font_size: 92 }
    ],
    "noa": [
        { text: "城", position: [759, 73], font_color: "rgb(104,223,231)", font_size: 186 },
        { text: "崎", position: [945, 175], font_color: "rgb(255, 255, 255)", font_size: 92 },
        { text: "诺", position: [1042, 117], font_color: "rgb(255, 255, 255)", font_size: 147 },
        { text: "亚", position: [1186, 175], font_color: "rgb(255, 255, 255)", font_size: 92 }
    ],
    "coco": [
        { text: "泽", position: [759, 73], font_color: "rgb(251,114,78)", font_size: 186 },
        { text: "渡", position: [945, 175], font_color: "rgb(255, 255, 255)", font_size: 92 },
        { text: "可", position: [1042, 117], font_color: "rgb(255, 255, 255)", font_size: 147 },
        { text: "可", position: [1186, 175], font_color: "rgb(255, 255, 255)", font_size: 92 }
    ],
    "alisa": [
        { text: "紫", position: [759, 73], font_color: "rgb(235,75,60)", font_size: 186 },
        { text: "藤", position: [945, 175], font_color: "rgb(255, 255, 255)", font_size: 92 },
        { text: "亚", position: [1042, 117], font_color: "rgb(255, 255, 255)", font_size: 147 },
        { text: "里沙", position: [1186, 175], font_color: "rgb(255, 255, 255)", font_size: 92 }
    ],
    "reia": [
        { text: "莲", position: [759, 73], font_color: "rgb(253,177,88)", font_size: 186 },
        { text: "见", position: [945, 175], font_color: "rgb(255, 255, 255)", font_size: 92 },
        { text: "蕾", position: [1042, 117], font_color: "rgb(255, 255, 255)", font_size: 147 },
        { text: "雅", position: [1186, 175], font_color: "rgb(255, 255, 255)", font_size: 92 }
    ],
    "mago": [
        { text: "宝", position: [759, 73], font_color: "rgb(185,124,235)", font_size: 186 },
        { text: "生", position: [945, 175], font_color: "rgb(255, 255, 255)", font_size: 92 },
        { text: "玛", position: [1042, 117], font_color: "rgb(255, 255, 255)", font_size: 147 },
        { text: "格", position: [1186, 175], font_color: "rgb(255, 255, 255)", font_size: 92 }
    ],
    "hanna": [
        { text: "远", position: [759, 73], font_color: "rgb(169,199,30)", font_size: 186 },
        { text: "野", position: [945, 175], font_color: "rgb(255, 255, 255)", font_size: 92 },
        { text: "汉", position: [1042, 117], font_color: "rgb(255, 255, 255)", font_size: 147 },
        { text: "娜", position: [1186, 175], font_color: "rgb(255, 255, 255)", font_size: 92 }
    ],
    "meruru": [
        { text: "冰", position: [759, 73], font_color: "rgb(227,185,175)", font_size: 186 },
        { text: "上", position: [945, 175], font_color: "rgb(255, 255, 255)", font_size: 92 },
        { text: "梅", position: [1042, 117], font_color: "rgb(255, 255, 255)", font_size: 147 },
        { text: "露露", position: [1186, 175], font_color: "rgb(255, 255, 255)", font_size: 92 }
    ],
    "miria": [
        { text: "佐", position: [759, 73], font_color: "rgb(235,207,139)", font_size: 186 },
        { text: "伯", position: [945, 175], font_color: "rgb(255, 255, 255)", font_size: 92 },
        { text: "米", position: [1042, 117], font_color: "rgb(255, 255, 255)", font_size: 147 },
        { text: "莉亚", position: [1186, 175], font_color: "rgb(255, 255, 255)", font_size: 92 }
    ],
    "yuki": [
        { text: "月", position: [759, 63], font_color: "rgb(195,209,231)", font_size: 196 },
        { text: "代", position: [948, 175], font_color: "rgb(255, 255, 255)", font_size: 92 },
        { text: "雪", position: [1053, 117], font_color: "rgb(255, 255, 255)", font_size: 147 }
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
const characterSelect = document.getElementById('character-select');
const expressionSelect = document.getElementById('expression-select');
const randomExpressionBtn = document.getElementById('random-expression-btn');
const textInput = document.getElementById('text-input');
const generateBtn = document.getElementById('generate-btn');
const downloadBtn = document.getElementById('download-btn');
const loadingIndicator = document.getElementById('loading-indicator');

// State
let currentCharacter = 'sherri'; // Default character
let currentExpression = 1;
let currentBackground = 1;
let fontLoaded = false;

// Initialize
async function init() {
    // Load font
    try {
        const font = new FontFace('CustomFont', 'url(static/fonts/font3.ttf)');
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

    updateExpressionOptions();

    // Event listeners
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

    generateBtn.addEventListener('click', generateImage);

    downloadBtn.addEventListener('click', () => {
        try {
            const link = document.createElement('a');
            link.download = `${currentCharacter}_${Date.now()}.png`;
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

async function generateImage() {
    loadingIndicator.classList.remove('hidden');
    downloadBtn.disabled = true;

    try {
        // Random background logic from Python code: img_num = j * 16 + i + 1
        // Here we just pick a random background from 1 to 16
        currentBackground = Math.floor(Math.random() * 16) + 1;

        // Load images
        const bgPath = `static/img/background/c${currentBackground}.png`;
        const charPath = `static/img/${currentCharacter}/${currentCharacter} (${currentExpression}).png`;

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

        downloadBtn.disabled = false;
    } catch (e) {
        console.error('Generation failed:', e);
        alert('生成图片失败，请检查控制台日志。');
    } finally {
        loadingIndicator.classList.add('hidden');
    }
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

        // Shadow
        ctx.fillStyle = 'black';
        ctx.fillText(item.text, item.position[0] + 2, item.position[1] + 2);

        // Main text
        ctx.fillStyle = item.font_color;
        ctx.fillText(item.text, item.position[0], item.position[1]);
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
    let maxSize = 145;
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

    // Vertical align middle
    const totalTextHeight = bestLines.length * lineHeight;
    let startY = y + (h - totalTextHeight) / 2;

    bestLines.forEach((line, index) => {
        let lineX = x; // Left align
        // Parse for brackets coloring
        // Simple parser: split by [ or 【
        // This is a simplified version of the Python logic

        const segments = parseColorSegments(line, bracketColor, color);

        segments.forEach(seg => {
            // Shadow
            ctx.fillStyle = 'black';
            ctx.fillText(seg.text, lineX + 4, startY + index * lineHeight + 4);

            // Text
            ctx.fillStyle = seg.color;
            ctx.fillText(seg.text, lineX, startY + index * lineHeight);

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
