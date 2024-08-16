import { Button } from "@nextui-org/button";


export default function Home() {
  console.log('Home');
  return (
    <section className="grow p-10">
      <h1>Home Page</h1>
      <div>
        <Button>Click Me</Button>
      </div>
    </section>
  );
}
