const doc = {
  avlTree: {
    title: 'avlTree',
    usage: 'const avlTree = jagu.avlTree();',
    funcs: [
      {
        usage: 'insert(value)',
        description: 'inserts a value into the tree and maintains the tree balance by rotating the imbalanced node.',
      },
      {
        usage: 'root()',
        description: 'returns the root node.',
      },
      {
        usage: 'min()',
        description: 'returns the min value node (most left).',
      },
      {
        usage: 'max()',
        description: 'returns the max value node (most right).',
      },
      {
        usage: 'count()',
        description: 'gets nodes count.',
      },
      {
        usage: 'traverseInOrder( func )',
        description: 'traverse the tree in inorder and apply a callback on each node.',
      },
      {
        usage: 'traversePreOrder( func )',
        description: 'traverse the tree in preorder and apply a callback on each node.',
      },
      {
        usage: 'traversePostOrder( func )',
        description: 'traverse the tree in postorder and apply a callback on each node.',
      },
      {
        usage: 'traverse(func, order) @param order [string] :: inOrder, preOrder, postOrder',
        description: 'traverse the tree in the defined order and apply a callback on each node.',
      },
      {
        usage: 'remove()',
        description: 'removes a value\'s node (if exists) from the tree and maintains the tree balance by rotating the imbalanced node.',
      },
      {
        usage: 'clear()',
        description: 'clears the tree.',
      },
    ],
    visualization: undefined
  },
  binarySearchTree: {
    title: 'binarySearchTree',
    usage: 'const binarySearchTree = jagu.binarySearchTree();',
    funcs: [
      {
        usage: 'insert(value)',
        description: 'inserts a value into the tree.',
      },
      {
        usage: 'root()',
        description: 'returns the root node.',
      },
      {
        usage: 'min()',
        description: 'returns the min value node (most left).',
      },
      {
        usage: 'max()',
        description: 'returns the max value node (most right).',
      },
      {
        usage: 'count()',
        description: 'gets nodes count.',
      },
      {
        usage: 'find(value)',
        description: 'finds the value\'s node or returns null if not found.',
      },
      {
        usage: 'traverseInOrder( func )',
        description: 'traverse the tree in inorder and apply a callback on each node.',
      },
      {
        usage: 'traversePreOrder( func )',
        description: 'traverse the tree in preorder and apply a callback on each node.',
      },
      {
        usage: 'traversePostOrder( func )',
        description: 'traverse the tree in postorder and apply a callback on each node.',
      },
      {
        usage: 'traverse(func, order) @param order [string] :: inOrder, preOrder, postOrder',
        description: 'traverse the tree in the defined order and apply a callback on each node.',
      },
      {
        usage: 'remove()',
        description: 'removes a value\'s node (if exists) from the tree.',
      },
      {
        usage: 'clear()',
        description: 'clears the tree.',
      },
    ],
    visualization: undefined
  },
  graph: undefined,
  linkedList: {
    title: 'linkedList',
    usage: 'const linkedList = jagu.linkedList();',
    funcs: [
      {
        usage: 'addFirst(value)',
        description: 'adds a node of the given value at the beginning of the list.',
      },
      {
        usage: 'addLast(value)',
        description: 'adds a node of the given value at the end of the list.',
      },
      {
        usage: 'addAfter(value, newValue)',
        description: 'adds a node with a given value after an existing value\'s node.',
      },
      {
        usage: 'addBefore(value, newValue)',
        description: 'adds a node with a given value before an existing value\'s node.',
      },
      {
        usage: 'find(value)',
        description: 'finds a node by its value and returns a linked list node object.',
      },
      {
        usage: 'head()',
        description: 'returns the first linkedListNode object in the list.',
      },
      {
        usage: 'traverse( func )',
        description: 'traverse the linked list and calls cb for each node',
      },
      {
        usage: 'remove(value)',
        description: 'remove the value\'s node - if exists - from the list.',
      },
      {
        usage: 'removeFirst()',
        description: 'removes the first node in the list.',
      },
      {
        usage: 'removeLast()',
        description: 'removes the last node in the list.',
      },
      {
        usage: 'toArray()',
        description: 'converts the linkedList to an array',
      },
      {
        usage: 'count()',
        description: 'returns nodes\' count in the list.',
      },
      {
        usage: 'clear()',
        description: 'removes all nodes from the list.',
      },
    ],
    visualization: undefined
  },
  matrix: undefined,
  priorityQueue: {
    title: 'priorityQueue',
    usage: 'const priorityQueue = jagu.priorityQueue();',
    funcs: [
      {
        usage: 'enqueue(element, priority)',
        description: 'adds an element with priority (number) to the back of the queue.',
      },
      {
        usage: 'front()',
        description: 'returns the front element in queue.',
      },
      {
        usage: 'back()',
        description: 'returns the back element in the queue.',
      },
      {
        usage: 'dequeue()',
        description: 'dequeues the highest priority element from the queue.',
      },
      {
        usage: 'isEmpty()',
        description: 'checks if the queue is empty.',
      },
      {
        usage: 'length()',
        description: 'returns the length of the queue.',
      },
      {
        usage: 'toArray()',
        description: 'converts the queue to an array from highest prority element to lowest',
      },
      {
        usage: 'clear()',
        description: 'clears the queue',
      },
    ],
    visualization: undefined
  },
  queue: {
    title: 'queue',
    usage: 'const queue = jagu.queue();',
    funcs: [
      {
        usage: 'enqueue(element)',
        description: 'adds an element to the back of the queue.',
      },
      {
        usage: 'front()',
        description: 'returns the front element in queue.',
      },
      {
        usage: 'back()',
        description: 'returns the back element in the queue.',
      },
      {
        usage: 'dequeue()',
        description: 'dequeues an element from the queue.',
      },
      {
        usage: 'isEmpty()',
        description: 'checks if the queue is empty.',
      },
      {
        usage: 'length()',
        description: 'returns the length of the queue.',
      },
      {
        usage: 'toArray()',
        description: 'converts the queue to an array with front starting at 0.',
      },
      {
        usage: 'clear()',
        description: 'clears the queue',
      },
    ],
    visualization: {
      usage: 'const queueVis = jagu.vis(string, queue).queue()',
      arguments: [
        '{String} [renderer] html svg tag',
        '{Object} [datastructure] jagu datastructure'
      ],
      funcs: [
        'enqueue(element)', 'dequeue()', 'draw()', 'clear'
      ],
      code: ''
    }
  },
  set: {
    title: 'set',
    usage: 'const set = jagu.set();',
    funcs: [
      {
        usage: 'add(element)',
        description: 'adds an element to the set.',
      },
      {
        usage: 'contains()',
        description: 'checks if the set contains an element.',
      },
      {
        usage: 'remove()',
        description: 'removes an element from the set.',
      },
      {
        usage: 'size()',
        description: 'returns the number of elements in the set.',
      },
      {
        usage: 'isEmpty()',
        description: 'checks if the set is empty.',
      },
      {
        usage: 'union(set)',
        description: 'unions the set with another set and returns the resulting set.',
      },
      {
        usage: 'intersect(set)',
        description: 'intersects the set with another set and returns the resulting set.',
      },
      {
        usage: 'diff(set)',
        description: 'returns the diff set between the set and another set.',
      },
      {
        usage: 'isSubsetOf(set)',
        description: 'checks if the set is a subset of another set',
      },
      {
        usage: 'isSupersetOf(set)',
        description: 'checks if the set is a subset of another set',
      },
      {
        usage: 'toArray()',
        description: 'converts the set to an array.',
      },
      {
        usage: 'clear()',
        description: 'clears the set',
      },
    ],
    visualization: undefined
  },
  stack: {
    title: 'stack',
    usage: 'const stack = jagu.stack();',
    funcs: [
      {
        usage: 'push(element)',
        description: 'push an element to the top of the stack.',
      },
      {
        usage: 'peek()',
        description: 'returns the top element in the stack.',
      },
      {
        usage: 'pop()',
        description: 'pops the top element of the stack.',
      },
      {
        usage: 'isEmpty()',
        description: 'checks if the stack is empty.',
      },
      {
        usage: 'length()',
        description: 'returns the length length of the stack.',
      },
      {
        usage: 'clear()',
        description: 'clears the stack',
      },
      {
        usage: 'toArray()',
        description: 'returns elements to array.',
      },
    ],
    visualization: {
      usage: 'const stackVis = jagu.vis(string, stack).stack()',
      arguments: [
        '{String} [renderer] html svg tag',
        '{Object} [datastructure] jagu datastructure'
      ],
      funcs: [
        'push(element)', 'pop()', 'draw()', 'clear'
      ],
      code: ''
    }
  },
  trie: {
    title: 'trie',
    usage: 'const trie = jagu.trie();',
    funcs: [
      {
        usage: 'insert(word)',
        description: 'inserts a word into the trie.',
      },
      {
        usage: 'search(word)',
        description: 'finds a word in the trie and returns the last char\'s node or null if word is not found.',
      },
      {
        usage: 'traverse( func )',
        description: 'traverse the trie and calls cb for each word including the empty word',
      },
      {
        usage: 'remove(word)',
        description: 'removes a word from the trie',
      },
      {
        usage: 'countNodes()',
        description: 'gets the count of characters nodes in the trie',
      },
      {
        usage: 'countWords()',
        description: 'gets the count of the words in the trie',
      },
      {
        usage: 'clear()',
        description: 'clears the trie',
      }
    ],
    visualization: undefined
  }
};

export default doc;

