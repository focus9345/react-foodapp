import { Link } from "@nextui-org/link"
export default function MealsPage() {

    return (
      <>
      <header>
        <h1>Delicious meals, created{' '}
        <span className="">by you</span>
        </h1>
        <p>Choose your favorate recipe and cook it yourself. It is easy any one can do it.</p>
        <p className="">
          <Link href="meals/share" color="secondary">Share your favorate Recipe</Link>
        </p>
      </header>
      <main>
            Meals Here
      </main>
      </>
    );
  }