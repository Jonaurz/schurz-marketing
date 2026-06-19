/**
 * Serialisiert strukturierte Daten und entschärft "<", damit Inhalte nicht
 * unbeabsichtigt ein Script-Element schließen können.
 */
export function serializeJsonLd(value: unknown) {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}
