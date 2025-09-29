class DLL {
  constructor() { this.head = this.tail = null; }
  append(d) {
    let n = { data: d, prev: this.tail, next: null };
    if (!this.head) this.head = n;
    if (this.tail) this.tail.next = n;
    this.tail = n;
  }
  print() {
    let cur = this.head, s = "";
    while (cur) { s += cur.data + " <-> "; cur = cur.next; }
    console.log(s + "null");
  }
}
let list = new DLL();
[10, 20, 30].forEach(x => list.append(x));
list.print();
