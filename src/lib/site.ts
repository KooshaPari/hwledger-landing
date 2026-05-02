/**
 * Site path utilities for hwledger-landing
 */

import { sitePath as _sitePath } from '@kilocode/landing-utils';
import { SITE_CONFIG } from './constants';

/** Re-export shared types for convenience */
export type { SitePathFunction } from '@kilocode/landing-utils';

/**
 * Constructs an absolute site path by prepending the base URL path.
 * @param path - The relative path to append
 * @returns The absolute path with base URL prefix
 */
export function sitePath(path: string): string {
  return _sitePath(SITE_CONFIG.baseUrl, path);
}
