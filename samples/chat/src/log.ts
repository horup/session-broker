import debug from 'debug';
export const info = debug('info');
debug.enable('info');
info.log = console.log.bind(console);
