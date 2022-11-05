import type { RouteRecordName, RouteMeta } from "vue-router";

export interface RouteRecordBase{
  /**
   * Path of the record. Should start with `/` unless the record is the child of
   * another record.
   *
   * @example `/users/:id` matches `/users/1` as well as `/users/posva`.
   */
  path: string;
  /**
   * Name for the route record.
   */
  name: RouteRecordName;
  /**
   * Arbitrary data attached to the record.
   */
  meta?: RouteMeta;
}