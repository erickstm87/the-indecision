console.log('utils is running');

const squared = (x) => x * x;
const add = (x, y) => x + y;
export default (x,y) => x - y;
//2 types of exports
//1. default export
//2. named exports

export {
    squared,
    add
    //subtract as default
}; //the default value of subtract can be renamned when it's imported