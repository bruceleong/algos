function removeKthNode(head, k) {
  let counter = 1;
  let first = head;
  let second = head;

  while (counter <= k) {
    second = second.next
    counter++
  }

  if (second === null) {
    head.value = head.next.value
    head.next = head.next.next
    return
  }

  while (second.next !== null) {
    first = first.next
    second = second.next
  }
  first.next = first.next.next
}
