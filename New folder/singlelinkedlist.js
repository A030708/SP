class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
  }
  append(data) {
    let n = new Node(data);
    if (!this.head) this.head = n;
    else {
      let cur = this.head;
      while (cur.next) cur = cur.next;
      cur.next = n;
    }
  }
  print() {
    let cur = this.head, res = "";
    while (cur) { res += cur.data + " -> "; cur = cur.next; }
    console.log(res + "null");
  }
}
let list = new LinkedList();
[10, 20, 30].forEach(x => list.append(x));
list.print();
