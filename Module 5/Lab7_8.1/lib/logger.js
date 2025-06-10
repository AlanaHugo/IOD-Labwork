function log(operation, id, result) {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ID: ${id}, Operation: ${operation}, Result: ${result}`);
}

module.exports = { log };