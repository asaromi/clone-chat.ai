import { monotonicFactory } from "ulid";

export default (time = Date.parse()) => monotonicFactory(time);
