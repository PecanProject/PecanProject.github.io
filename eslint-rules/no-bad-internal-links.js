/**
 * ESLint rule: no-bad-internal-links
 *
 * Enforces correct internal link format in JSX:
 * - No leading/trailing whitespace in any URL
 * - Internal links must start with '/'
 * - Internal links must not use .html extension
 * - Internal links must end with '/'
 */
module.exports = {
  meta: {
    type: "problem",
    docs: {
      description:
        "Enforce correct internal link format in JSX (absolute paths, no .html, trailing slash)",
    },
    messages: {
      whitespace:
        "Link has leading or trailing whitespace: '{{value}}'. Remove the extra spaces.",
      noLeadingSlash:
        "Internal link '{{value}}' should start with '/'. Did you mean '/{{suggested}}'?",
      htmlExtension:
        "Internal link '{{value}}' should not use .html extension. Did you mean '{{suggested}}'?",
      noTrailingSlash:
        "Internal link '{{value}}' should end with '/'. Did you mean '{{value}}/'?",
    },
  },
  create(context) {
    return {
      JSXAttribute(node) {
        const attrName = node.name && node.name.name;
        if (attrName !== "href" && attrName !== "to") return;

        // Only handle string literals, skip expressions like {`/path/${var}`}
        if (
          !node.value ||
          node.value.type !== "Literal" ||
          typeof node.value.value !== "string"
        ) {
          return;
        }

        const value = node.value.value;

        // Check for leading/trailing whitespace (applies to all URLs)
        if (value !== value.trim()) {
          context.report({ node, messageId: "whitespace", data: { value } });
          return;
        }

        // Skip external URLs, anchors, and protocol-relative URLs
        if (
          value.startsWith("http://") ||
          value.startsWith("https://") ||
          value.startsWith("mailto:") ||
          value.startsWith("tel:") ||
          value.startsWith("#") ||
          value.startsWith("//")
        ) {
          return;
        }

        // Skip empty strings
        if (value === "") return;

        // --- Internal link checks ---

        // Must start with /
        if (!value.startsWith("/")) {
          const stripped = value.replace(/\.html?$/, "");
          const suggested = stripped.endsWith("/") ? stripped : stripped + "/";
          context.report({
            node,
            messageId: "noLeadingSlash",
            data: { value, suggested },
          });
          return;
        }

        // Must not end with .html
        if (/\.html?$/.test(value)) {
          const suggested = value.replace(/\.html?$/, "/");
          context.report({
            node,
            messageId: "htmlExtension",
            data: { value, suggested },
          });
          return;
        }

        // Must end with / (except paths with anchors or query strings)
        if (
          !value.endsWith("/") &&
          !value.includes("#") &&
          !value.includes("?")
        ) {
          context.report({
            node,
            messageId: "noTrailingSlash",
            data: { value },
          });
        }
      },
    };
  },
};
