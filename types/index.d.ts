import { App } from 'vue';
declare function install(app: App): void;
import './assets/scss/main.scss';
declare const _default: {
    install: typeof install;
};
export default _default;
export * from './components';
export * from './constants';
export * from './utils';
