export interface AlpineStoreImages {
  maskedIds: string[];
  revealedIds: string[];
  registerMask(id: string): void;
  reveal(id: string): void;
  isRevealed(id: string): boolean;
}
