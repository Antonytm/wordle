import { WORDS } from "../constants/wordlist";
import { POPULAR_WORDS } from "../constants/popularWordList";

export const isWordInWordList = (word: string) => {
  return WORDS.includes(word.toLowerCase());
};

export const isWinningWord = (word: string) => {
  return solution === word;
};

export const getWordOfDay = () => {
  // January 1, 2022 Game Epoch
  const epochMs = 1642914000000;
  const now = Date.now();
  const msInDay = 86400000;
  const index = Math.floor((now - epochMs) / msInDay);

  return POPULAR_WORDS[index].toUpperCase();
};

export const solution = getWordOfDay();
