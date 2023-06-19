import { Transform } from "stream";
const transform = async () => {
  //   process.stdin.on("data", (chunk) => {
  //     process.stdout.pipe(chunk.toString());
  //   });
  const reverseTransform = new Transform({
    transform(chunk, _, callback) {
      this.push(chunk.toString().split("").reverse().join(""));
      callback();
    },
  });
  process.stdin.pipe(reverseTransform).pipe(process.stdout);
};

await transform();