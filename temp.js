// console.log(`Hello world!`)

movArr = [{id:1}, {id:7}, {id:3}, {id:7} ,{id:5}]

for (let i = 0; i < movArr.length ; i++)
{
  for (let j = i + 1; j < movArr.length ; j++)
  {
    if (movArr[i].id === movArr[j].id)
    {
      console.log(i, j);
      console.log(movArr[i].id, movArr[j].id);
      movArr.splice(j,1);
      console.log(movArr[j].id);
    }
  }
}