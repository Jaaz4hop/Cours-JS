import DOMPurify from "./node_modules/dompurify/dist/purify.es.mjs";

export function nettoyer(texte) {
    return DOMPurify.sanitize(texte);
}