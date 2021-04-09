import { defaultKeymap, keyMetadata, KeyToken } from "./keyboard";

const hidKeycodes = [
  { code: "0", action: "NoEvent" },
  { code: "1", action: "ErrorRollOver" },
  { code: "2", action: "POSTFail" },
  { code: "3", action: "ErrorUndefined" },
  { code: "4", action: "A" },
  { code: "5", action: "B" },
  { code: "6", action: "C" },
  { code: "7", action: "D" },
  { code: "8", action: "E" },
  { code: "9", action: "F" },
  { code: "10", action: "G" },
  { code: "11", action: "H" },
  { code: "12", action: "I" },
  { code: "13", action: "J" },
  { code: "14", action: "K" },
  { code: "15", action: "L" },
  { code: "16", action: "M" },
  { code: "17", action: "N" },
  { code: "18", action: "O" },
  { code: "19", action: "P" },
  { code: "20", action: "Q" },
  { code: "21", action: "R" },
  { code: "22", action: "S" },
  { code: "23", action: "T" },
  { code: "24", action: "U" },
  { code: "25", action: "V" },
  { code: "26", action: "W" },
  { code: "27", action: "X" },
  { code: "28", action: "Y" },
  { code: "29", action: "Z" },
  { code: "30", action: "1" },
  { code: "31", action: "2" },
  { code: "32", action: "3" },
  { code: "33", action: "4" },
  { code: "34", action: "5" },
  { code: "35", action: "6" },
  { code: "36", action: "7" },
  { code: "37", action: "8" },
  { code: "38", action: "9" },
  { code: "39", action: "0" },
  { code: "40", action: "Enter" },
  { code: "41", action: "Escape" },
  { code: "42", action: "Backspace" },
  { code: "43", action: "Tab" },
  { code: "44", action: "Space" },
  { code: "45", action: "-_" },
  { code: "46", action: "=+" },
  { code: "47", action: "[{" },
  { code: "48", action: "]}" },
  { code: "49", action: "\\|" },
  { code: "50", action: "..." },
  { code: "51", action: ";:" },
  { code: "52", action: "'\"" },
  { code: "53", action: "`~" },
  { code: "54", action: ",<" },
  { code: "55", action: ".>" },
  { code: "56", action: "/?" },
  { code: "57", action: "Caps Lock" },
  { code: "58", action: "F1" },
  { code: "59", action: "F2" },
  { code: "60", action: "F3" },
  { code: "61", action: "F4" },
  { code: "62", action: "F5" },
  { code: "63", action: "F6" },
  { code: "64", action: "F7" },
  { code: "65", action: "F8" },
  { code: "66", action: "F9" },
  { code: "67", action: "F10" },
  { code: "68", action: "F11" },
  { code: "69", action: "F12" },
  { code: "70", action: "Print Screen" },
  { code: "71", action: "Scroll Lock" },
  { code: "72", action: "Pause" },
  { code: "73", action: "Insert" },
  { code: "74", action: "Home" },
  { code: "75", action: "Page Up" },
  { code: "76", action: "Delete" },
  { code: "77", action: "End" },
  { code: "78", action: "Page Down" },
  { code: "79", action: "Right" },
  { code: "80", action: "Left" },
  { code: "81", action: "Down" },
  { code: "82", action: "Up" },
  { code: "83", action: "Num Lock" },
  { code: "84", action: "Keypad /" },
  { code: "85", action: "Keypad *" },
  { code: "86", action: "Keypad -" },
  { code: "87", action: "Keypad +" },
  { code: "88", action: "Keypad Enter" },
  { code: "89", action: "Keypad 1 / End" },
  { code: "90", action: "Keypad 2 / Down" },
  { code: "91", action: "Keypad 3 / Page Down" },
  { code: "92", action: "Keypad 4 / Left" },
  { code: "93", action: "Keypad 5" },
  { code: "94", action: "Keypad 6 / Right" },
  { code: "95", action: "Keypad 7 / Home" },
  { code: "96", action: "Keypad 8 / Up" },
  { code: "97", action: "Keypad 9 / Page Up" },
  { code: "98", action: "Keypad 0 / Insert" },
  { code: "99", action: "Keypad . / Delete" },
  { code: "100", action: "..." },
  { code: "101", action: "Applications" },
  { code: "102", action: "Power" },
  { code: "103", action: "Keypad =" },
  { code: "104", action: "F13" },
  { code: "105", action: "F14" },
  { code: "106", action: "F15" },
  { code: "107", action: "F16" },
  { code: "108", action: "F17" },
  { code: "109", action: "F18" },
  { code: "110", action: "F19" },
  { code: "111", action: "F20" },
  { code: "112", action: "F21" },
  { code: "113", action: "F22" },
  { code: "114", action: "F23" },
  { code: "115", action: "F24" },
  { code: "116", action: "Execute" },
  { code: "117", action: "Help" },
  { code: "118", action: "Menu" },
  { code: "119", action: "Select" },
  { code: "120", action: "Stop" },
  { code: "121", action: "Again" },
  { code: "122", action: "Undo" },
  { code: "123", action: "Cut" },
  { code: "124", action: "Copy" },
  { code: "125", action: "Paste" },
  { code: "126", action: "Find" },
  { code: "127", action: "Mute" },
  { code: "128", action: "Volume Up" },
  { code: "129", action: "Volume Down" },
  { code: "130", action: "Locking Caps Lock" },
  { code: "131", action: "Locking Num Lock" },
  { code: "132", action: "Locking Scroll Lock" },
  { code: "133", action: "Keypad ," },
  { code: "134", action: "Keypad =" },
  { code: "135", action: "Internat" },
  { code: "136", action: "Internat" },
  { code: "137", action: "Internat" },
  { code: "138", action: "Internat" },
  { code: "139", action: "Internat" },
  { code: "140", action: "Internat" },
  { code: "141", action: "Internat" },
  { code: "142", action: "Internat" },
  { code: "143", action: "Internat" },
  { code: "144", action: "LANG" },
  { code: "145", action: "LANG" },
  { code: "146", action: "LANG" },
  { code: "147", action: "LANG" },
  { code: "148", action: "LANG" },
  { code: "149", action: "LANG" },
  { code: "150", action: "LANG" },
  { code: "151", action: "LANG" },
  { code: "152", action: "LANG" },
  { code: "153", action: "Alt Erase" },
  { code: "154", action: "SysRq" },
  { code: "155", action: "Cancel" },
  { code: "156", action: "Clear" },
  { code: "157", action: "Prior" },
  { code: "158", action: "Return" },
  { code: "159", action: "Separ" },
  { code: "160", action: "Out" },
  { code: "161", action: "Oper" },
  { code: "162", action: "Clear/Again" },
  { code: "163", action: "CrSel/Props" },
  { code: "164", action: "ExSel>" },
  { code: "224", action: "LCtrl" },
  { code: "225", action: "LShift" },
  { code: "226", action: "LAlt" },
  { code: "227", action: "LGUI" },
  { code: "228", action: "RCtrl" },
  { code: "229", action: "RShift" },
  { code: "230", action: "RAlt" },
  { code: "231", action: "RGUI" },
];

const realTokens = [
  ...defaultKeymap.top.fn,
  ...defaultKeymap.top.main,
  ...defaultKeymap.top.thumb,
  ...defaultKeymap.keypad.fn,
  ...defaultKeymap.keypad.main,
  ...defaultKeymap.keypad.thumb,
]
  .filter((token) => token !== "keypd" && token !== "progrm")
  .map((x) => x.toLowerCase());

const actionTokens = [
  ...Object.keys(keyMetadata),
  ...hidKeycodes.map(({ code }) => code),
].map((x) => x.toLowerCase());

const file = `[kp-rctrl]>[z]
[caps]>[kptoggle]
[g]>[a][t&h30][lwin]
[z]>[F18]
*[z]>[F18]
*single macro
{kp-escape}>{h}{e}{l}{l}{o}
*multikey macro
{rctrl}{s}>{g}{o}{a}{l}
{rctrl}{lshift}{s}>{g}{o}{a}{l}
*delay (can be 125ms or 500ms)
{hyphen}>{f1}{d125}{d500}{mute}
*shifted actions
{pause}>{-Lshift}{h}{+Lshift}{i}{space}{-Rshift}{j}{+Rshift}{o}{y}{-Lshift}{1}{+Lshift}
*changing macro speed
{kp-tab}>{speed9}{f}{a}{s}{t}{space}{speed1}{s}{l}{o}{w}
`;

type Macro = { kind: "macro"; macroId: string; body: string };
type Remap =
  | { kind: "simple"; to: KeyToken }
  | { kind: "t&h"; tap: KeyToken; hold: KeyToken; delay: number }
  | Macro;
type RemapMap = { [key in KeyToken]?: Remap };
type RemapError = { line: number; message: string };

export function parseMapping(input: string) {
  const remaps: RemapMap = {};
  const errors: RemapError[] = [];
  const macros: Macro[] = [];
  input.split("\n").forEach((line, idx) => {
    const tapAndHold = line
      .toLocaleLowerCase()
      .match(/^\[(.*)\]>\[(.*)\]\[t&h(\d+)\]\[(.*)\]$/);
    if (tapAndHold != null) {
      const [, from, tap, delayS, hold] = tapAndHold;
      const delay = parseInt(delayS, 10);
      if (!realTokens.find((token) => token === from)) {
        errors.push({
          line: idx + 1,
          message: `Invalid location token ${from}`,
        });
      } else if (!actionTokens.find((token) => token === tap)) {
        errors.push({ line: idx + 1, message: `Invalid action token ${tap}` });
      } else if (!actionTokens.find((token) => token === hold)) {
        errors.push({
          line: idx + 1,
          message: `Invalid location token ${hold}`,
        });
      } else if (delay <= 0 || delay > 99) {
        errors.push({ line: idx + 1, message: `Invalid hold delay ${delay}` });
      } else if (remaps[from as KeyToken] != null) {
        errors.push({
          line: idx + 1,
          message: `Key already remapped: ${from}`,
        });
      } else {
        remaps[from as KeyToken] = {
          kind: "t&h",
          tap: tap as KeyToken,
          hold: hold as KeyToken,
          delay,
        };
      }
      return;
    }
    const simpleRemap = line.toLowerCase().match(/^\[(.*)\]>\[(.*)\]$/);
    if (simpleRemap != null) {
      const [, from, to] = simpleRemap;
      if (!realTokens.find((token) => token === from)) {
        errors.push({
          line: idx + 1,
          message: `Invalid location token ${from}`,
        });
      } else if (!actionTokens.find((token) => token === to)) {
        errors.push({ line: idx + 1, message: `Invalid action token ${to}` });
      } else if (remaps[from as KeyToken] != null) {
        errors.push({
          line: idx + 1,
          message: `Key already remapped: ${from}`,
        });
      } else {
        remaps[from as KeyToken] = {
          kind: "simple",
          to: to as KeyToken,
        };
      }
      return;
    }
    const singleMacro = line
      .toLocaleLowerCase()
      .match(/^\{([^\}]*)\}>(\{.*\})+$/);
    if (singleMacro != null) {
      const [, from, body] = singleMacro;
      if (!realTokens.find((token) => token === from)) {
        errors.push({
          line: idx + 1,
          message: `Invalid location token ${from}`,
        });
      } else if (remaps[from as KeyToken] != null) {
        errors.push({
          line: idx + 1,
          message: `Key already remapped: ${from}`,
        });
      } else {
        const macro = {
          kind: "macro",
          macroId: `macro_${from}`,
          body,
        } as const;
        remaps[from as KeyToken] = macro;
        macros.push(macro);
      }
      return;
    }
    const multiMacro = line
      .toLocaleLowerCase()
      .match(/^((?:\{[^\}]*\})+)>(\{.*\})+$/);
    if (multiMacro != null) {
      const [, from, body] = multiMacro;
      const fromTokens = from
        .replace(/\}/g, " ")
        .replace(/\{/g, " ")
        .split(" ")
        .filter((x) => x.trim() !== "");
      if (
        fromTokens.some((from) => !realTokens.find((token) => token === from))
      ) {
        errors.push({
          line: idx + 1,
          message: `Invalid location token ${from}`,
        });
      } else {
        const macro = {
          kind: "macro",
          macroId: `macro_${from}`,
          body,
        } as const;
        macros.push(macro);
      }
      return;
    }
    if (line.startsWith("*") || line === "") {
      return;
    }
    errors.push({ line: idx + 1, message: `Failed to parse: ${line}` });
  });
  return { remaps, macros, errors };
}

export type Mapping = ReturnType<typeof parseMapping>;
