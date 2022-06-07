const new_list = [1, 2, 3];

result = new_list[0];

if (new_list.includes(1)) {
  console.log(true);
}

for (num of new_list) {
  if (num === 1) {
    console.log(true);
    break;
  }
}
