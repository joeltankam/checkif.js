import buble from 'rollup-plugin-buble';
import progress from 'rollup-plugin-progress';

export default {
    input: './index.js',
    output: {
        name: 'checkif',
        file: './dist/checkif.js',
        format: 'umd',
    },
    plugins: [buble(), progress()],
};
