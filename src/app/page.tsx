import { Button } from "@nextui-org/button";


export default function Home() {
  console.log('Home');
  return (
    <section className="grow p-10 border-3 border-yellow-200">
      <h1>Home Page</h1>
      <div>
        <Button>Click Me</Button>
      </div>
    </section>
  );
}
