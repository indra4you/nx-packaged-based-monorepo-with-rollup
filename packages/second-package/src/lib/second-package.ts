import {
    firstPackage,
} from 'first-package';

import {
    trimString,
} from 'utility';

export function secondPackage(): void {
    firstPackage();
    
    console.log('Package → Second: Called');

    const valueWithSpace: string = '   Value with Space  ';
    console.log('Package → Second: Value with space', valueWithSpace);

    const valueWithOutSpace: string = trimString(valueWithSpace);
    console.log('Package → Second: Value without space', valueWithOutSpace);
}