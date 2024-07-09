//import { CartCounter } from "../../../shopping-cart/components/CartCounter";

import { CartCounter } from "@/shopping-cart";

export const metadata = {
  title: "Contador Pagina",
  description: "Simple",
};

export default function CounterPage() {
  return (
    <div className=" flex flex-col items-center justify-center w-full h-full">
      <span>Contador de datos</span>
      <CartCounter />
    </div>
  );
}
