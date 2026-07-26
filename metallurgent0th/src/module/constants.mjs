export const systemID = "metallurgent0th";

/**
 * Translates repoository paths to Foundry Data Paths.
 * @param {string} path - A path relative to the root of this repository.
 * @returns {string} The path relative to the Fourndry data folder.
 */
export const systemPath = (path) => `systems/${systemID}/${path}`;
