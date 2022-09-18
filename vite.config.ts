import { defineConfig } from 'vitest/config';

/**
 * config only for testing
 */
export default defineConfig({
  test: {
    coverage: {
      provider: 'c8',
    },
  },
});
