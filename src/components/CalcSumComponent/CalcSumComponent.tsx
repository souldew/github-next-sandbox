import { calcSum } from "@/lib/calcSum";

const CalcSumComponent = () => {
  const onClick = () => {
    const ans = calcSum(1, 3);
    console.log("ans", ans);
  };
  return <button onClick={onClick} />;
};

export { CalcSumComponent };
