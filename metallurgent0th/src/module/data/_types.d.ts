import "./actor/_types";
import "./item/_types";

export type SubtypeMetadata = {
  /** The registered document subtype in system.json. */
  type: string;
  /** A FontAwesome icon that can be added to `typeIcons`, e.g. `"fa-solid fa-user"`. */
  icon?: string;
};
