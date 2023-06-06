class Node:
    def __init__(self, value, priority):
        self.value = value
        self.priority = priority
        self.left = None
        self.right = None

class PriorityQueue:
    def __init__(self):
        self.root = None

    def insert(self, value, priority):
        node = Node(value, priority)
        if self.root is None:
            self.root = node
        else:
            self._insert_helper(self.root, node)

    def _insert_helper(self, curr_node, node):
        if node.priority < curr_node.priority:
            if curr_node.left is None:
                curr_node.left = node
            else:
                self._insert_helper(curr_node.left, node)
        else:
            if curr_node.right is None:
                curr_node.right = node
            else:
                self._insert_helper(curr_node.right, node)

    def remove(self):
        if self.root is None:
            return None
        else:
            value = self.root.value
            if self.root.left is None and self.root.right is None:
                self.root = None
            elif self.root.left is None:
                self.root = self.root.right
            elif self.root.right is None:
                self.root = self.root.left
            else:
                self._remove_helper(self.root)
            return value

    def _remove_helper(self, node):
        if node.left is None and node.right is None:
            node = None
        elif node.left is None:
            node = node.right
        elif node.right is None:
            node = node.left
        else:
            if node.left.priority < node.right.priority:
                node.value = node.left.value
                node.priority = node.left.priority
                self._remove_helper(node.left)
            else:
                node.value = node.right.value
                node.priority = node.right.priority
                self._remove_helper(node.right)

    def peek(self):
        if self.root is None:
            return None
        else:
            return self.root.value
