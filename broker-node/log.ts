import {debug} from 'debug';
export const info = debug("masterserver");
info.log = console.log.bind(console);