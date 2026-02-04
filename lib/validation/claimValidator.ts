interface AtomicFact {
  id: string;
  text: string;
}

interface CaptionLine {
  text: string;
  factIds: string[];
}

export function validateCaptions(
  captions: CaptionLine[],
  facts: AtomicFact[],
  blockedPhrases: string[]
) {
  const factSet = new Set(facts.map((fact) => fact.id));
  const blocked = blockedPhrases.map((phrase) => phrase.toLowerCase());

  return captions.map((caption) => {
    const hasFact = caption.factIds.some((id) => factSet.has(id));
    const hasBlocked = blocked.some((phrase) =>
      caption.text.toLowerCase().includes(phrase)
    );

    return {
      ...caption,
      grounded: hasFact && !hasBlocked,
      violations: {
        missingFact: !hasFact,
        blockedPhrase: hasBlocked
      }
    };
  });
}
