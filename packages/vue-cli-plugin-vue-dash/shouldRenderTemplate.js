const args = process.argv.slice(2);

const createArgumentPresent = args.includes('create');
const invokeArgumentPresent = args.includes('invoke');
const renderOptionPresent = args.includes('--render-template');

const shouldRenderTemplate = createArgumentPresent || (invokeArgumentPresent && renderOptionPresent);

module.exports = { shouldRenderTemplate };
