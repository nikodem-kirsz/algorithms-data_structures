class ListNode {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  function mergeTwoLists(l1, l2) {
    // Base case: if one of the lists is empty, return the other list
    if (!l1) {
      return l2;
    }
    if (!l2) {
      return l1;
    }
  
    // Recursive case: compare the values of the head nodes of the two lists
    if (l1.val <= l2.val) {
      // If l1's head node is smaller, merge the remaining nodes of l1 and l2
      l1.next = mergeTwoLists(l1.next, l2);
      return l1;
    } else {
      // If l2's head node is smaller, merge the remaining nodes of l1 and l2
      l2.next = mergeTwoLists(l1, l2.next);
      return l2;
    }
  }
  
  // Example usage:
  const l1 = new ListNode(1);
  l1.next = new ListNode(2);
  l1.next.next = new ListNode(4);
  
  const l2 = new ListNode(1);
  l2.next = new ListNode(3);
  l2.next.next = new ListNode(4);
  
  const mergedList = mergeTwoLists(l1, l2);
  console.log(mergedList); // ListNode { val: 1, next: ListNode { val: 1, next: ListNode { val: 2, next: ListNode { val: 3, next: ListNode { val: 4, next: ListNode { val: 4, next: null } } } } } } }