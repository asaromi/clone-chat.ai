import { monotonicFactory } from "ulid";

export default (time) => monotonicFactory(time || Date.now());
