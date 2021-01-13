class Task {
  constructor(description) {
    description = description.trim();

    if (description.length === 0) {
      throw new Error("Description must contain a least one character.");
    }

    this.description = description;
  }
}

module.exports = Task;
