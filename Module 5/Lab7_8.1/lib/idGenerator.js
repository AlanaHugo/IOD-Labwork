function generateId() {
  return Math.random().toString(36).toString.substr(2, 9);
}

module.exports = { generateId };
