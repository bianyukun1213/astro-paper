import type { AlpineStoreImages } from "@/utils/types";
import type { Alpine } from "alpinejs";

export default (Alpine: Alpine) => {
  Alpine.store("images", {
    maskedIds: [],
    revealedIds: [],
    registerMask(id: string) {
      if (!this.maskedIds.includes(id)) {
        this.maskedIds.push(id);
      }
    },
    reveal(id: string) {
      if (!this.revealedIds.includes(id)) {
        this.revealedIds.push(id);
      }
    },
    isRevealed(id: string) {
      const hasMask = this.maskedIds.includes(id);
      const isUnlocked = this.revealedIds.includes(id);
      return !hasMask || isUnlocked;
    },
  } as AlpineStoreImages);
};
