import { cpus } from "os";
import { resolve } from "path";
import { Worker } from "worker_threads";

const performCalculations = async () => {
  const path = resolve('src', 'wt', 'worker.js')
  const numOfCPU = cpus().length;
  const res = new Array(numOfCPU).fill(false);

  const logIfFinish = (res) => {
    if (res.some((item) => !item)) return;
    console.log(res);
  };

  res.forEach((_, i) => {
    const worker = new Worker(path, { workerData: { value: 10 + i } });

    worker.on("message", (data) => {
      res[i] = { status: "resolved", data };
      logIfFinish(res);
    });

    worker.on("exit", (code) => {
      if (code !== 0) {
        res[i] = { status: "error", data: null };
        logIfFinish(res);
      }
    });
  });
};

await performCalculations();