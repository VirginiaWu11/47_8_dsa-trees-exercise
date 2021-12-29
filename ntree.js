/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    const stackToVisit = this.root ? [this.root] : [];
    let sum = 0;
    while (stackToVisit.length) {
      console.log("s", { stackToVisit });

      let current = stackToVisit.pop();

      sum += current.val;
      console.log({ stackToVisit, current });
      for (let child of current.children) {
        stackToVisit.push(child);
      }
    }
    return sum;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {}

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {}
}

module.exports = { Tree, TreeNode };
