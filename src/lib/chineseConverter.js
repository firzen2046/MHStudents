// Traditional ⇄ Simplified Chinese conversion (automatic, with manual overrides)
// The app's source content is authored in Traditional Chinese. The converter
// transforms whatever text is currently displayed into the active language.
// Both directions are idempotent (t2s on already-simplified text is a no-op,
// s2t on already-traditional text is a no-op), so it is safe to run repeatedly
// on every render/mutation without storing originals.

import * as OpenCCNS from 'opencc-js';

const OpenCC = OpenCCNS.Converter ? OpenCCNS : (OpenCCNS.default || OpenCCNS);

let t2s = null;
let s2t = null;
try {
  t2s = OpenCC.Converter({ from: 'taiwan', to: 'china' });
  s2t = OpenCC.Converter({ from: 'china', to: 'taiwan' });
} catch (e) {
  t2s = null;
  s2t = null;
}

// Manual overrides for known Traditional → Simplified-CN terms that
// character-level conversion alone doesn't fix. Applied before the engine on
// the Traditional source so the chosen CN term wins. Extend as needed.
const T2S_OVERRIDES = [
  ['資訊', '信息'],
  ['軟體', '软件'],
  ['程式', '程序'],
  ['預設', '默认'],
  ['影片', '视频'],
  ['網路', '网络'],
  ['記憶體', '内存'],
  ['螢幕', '屏幕'],
  ['滑鼠', '鼠标'],
  ['使用者', '用户'],
  ['應用程式', '应用程序'],
  ['硬碟', '硬盘'],
  ['光碟', '光盘'],
  ['儲存', '存储'],
  ['伺服器', '服务器'],
  ['畫面', '画面'],
  ['連結', '链接'],
  ['視窗', '窗口'],
  ['檔案', '档案'],
  ['資料', '资料'],
];

export function toSimplified(text) {
  if (!text || !text.trim()) return text;
  let s = text;
  for (const [tw, cn] of T2S_OVERRIDES) {
    if (s.indexOf(tw) !== -1) s = s.split(tw).join(cn);
  }
  return t2s ? t2s(s) : s;
}

export function toTraditional(text) {
  if (!text || !text.trim()) return text;
  return s2t ? s2t(text) : text;
}

export function convertForLang(text, lang) {
  if (lang === 'zh_TW') return toTraditional(text);
  return toSimplified(text);
}