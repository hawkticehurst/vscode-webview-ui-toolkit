import '../node_modules/@vscode/codicons/dist/codicon.css';
import {provideVSCodeDesignSystem, allComponents} from '../src/index';

provideVSCodeDesignSystem().register(allComponents);
