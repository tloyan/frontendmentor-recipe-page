import Image from "next/image";

const recipe = {
  img: {
    src: "/image-omelette.jpeg",
  },
  title: "Simple Omelette Recipe",
  description:
    "An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats.",
  time: {
    preparation: 5,
    cooking: 5,
  },
  ingredients: [
    "2-3 large eggs",
    "Salt, to taste",
    "Pepper, to taste",
    "1 tablespoon of butter or oil",
    "Optional fillings: cheese, diced vegetables, cooked meats, herbs",
  ],
  instructions: [
    {
      instruction: "Beat the eggs",
      details:
        "In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.",
    },
    {
      instruction: "Heat the pan",
      details:
        "Place a non-stick frying pan over medium heat and add butter or oil.",
    },
    {
      instruction: "Cook the omelette",
      details:
        "Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.",
    },
    {
      instruction: "Add fillings (optional)",
      details:
        "When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.",
    },
    {
      instruction: "Fold and serve",
      details:
        "As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.",
    },
    {
      instruction: "Enjoy",
      details: "Serve hot, with additional salt and pepper if needed.",
    },
  ],
  nutrition: {
    calories: 277,
    carbs: 0,
    protein: 20,
    fat: 22,
  },
};

export default function Home() {
  return (
    <article>
      <div>
        <Image
          src="/image-omelette.jpeg"
          alt="recipe image"
          width={1312}
          height={600}
        />
      </div>
      <div className="space-y-8 px-8 py-10">
        <header className="space-y-6">
          <h1 className="font-serif text-[36px] leading-none text-stone-900">
            {recipe.title}
          </h1>
          <p className="">{recipe.description}</p>
        </header>
        <PreparationTimeSection {...recipe.time} />
        <IngredientsSection ingredients={recipe.ingredients} />
        <hr className="border-stone-150" />
        <InstructionSection instructions={recipe.instructions} />
        <hr className="border-stone-150" />
        <NutritionSection {...recipe.nutrition} />
      </div>
    </article>
  );
}

function ListItem({
  heading,
  body,
  marker = "•",
  markerPos = "middle",
}: {
  heading?: string;
  body: string;
  marker?: string;
  markerPos?: "middle" | "top";
}) {
  return (
    <li className="flex items-center space-x-4">
      <p
        className={`pl-2 text-base ${marker === "•" ? "pr-[10px]" : "pr-[3px]"} font-bold text-rose-800 ${markerPos === "top" && "self-start"}`}
      >
        <span className={`${marker === "•" && "align-middle"}`}>{marker}</span>
      </p>
      <p>
        {heading && <span className="font-bold">{heading}: </span>}
        {body}
      </p>
    </li>
  );
}

function List({
  list,
  type = "ul",
}: {
  list: Array<{ heading?: string; body: string } | string>;
  type?: "ul" | "ol";
}) {
  const fList = list.map((item) => {
    if (typeof item == "string") return { body: item };
    return item;
  });

  if (type === "ol") {
    return (
      <ol className="space-y-2">
        {fList.map((item, n) => (
          <ListItem
            key={item.body}
            heading={item.heading}
            body={item.body}
            marker={`${String(n + 1)}.`}
            markerPos="top"
          />
        ))}
      </ol>
    );
  }

  return (
    <ul className="space-y-2">
      {fList.map((item) => (
        <ListItem key={item.body} heading={item.heading} body={item.body} />
      ))}
    </ul>
  );
}

function PreparationTimeSection({
  preparation,
  cooking,
}: {
  preparation: number;
  cooking: number;
}) {
  return (
    <section className="space-y-4 rounded-xl bg-rose-50 p-6">
      <p className="text-xl font-semibold leading-none text-rose-800">
        Preparation time
      </p>
      <List
        list={[
          {
            heading: "Total",
            body: `Approximately ${preparation + cooking} minutes`,
          },
          { heading: "Preparation", body: `${preparation} minutes` },
          { heading: "Cooking", body: `${cooking} minutes` },
        ]}
      />
    </section>
  );
}

function IngredientsSection({ ingredients }: { ingredients: string[] }) {
  return (
    <section className="space-y-6">
      <h2 className="font-serif text-[28px] leading-none text-brown-800">
        Ingredients
      </h2>
      <List list={ingredients} />
    </section>
  );
}

function InstructionSection({
  instructions,
}: {
  instructions: Array<{ instruction: string; details: string }>;
}) {
  const instructionList = instructions.map((item) => ({
    heading: item.instruction,
    body: item.details,
  }));
  return (
    <section className="space-y-6">
      <h2 className="font-serif text-[28px] leading-none text-brown-800">
        Instructions
      </h2>
      <List type="ol" list={instructionList} />
    </section>
  );
}

function NutritionSection({
  calories,
  carbs,
  protein,
  fat,
}: {
  calories: number;
  carbs: number;
  protein: number;
  fat: number;
}) {
  return (
    <section className="space-y-6">
      <h2 className="font-serif text-[28px] leading-none text-brown-800">
        Nutrition
      </h2>
      <p className="pl-[1px]">
        The table below shows nutritional values per serving without the
        additional fillings.
      </p>
      <table className="w-full table-auto">
        <tbody className="divide-y divide-stone-150">
          <tr className="block flex w-full px-8 pb-3">
            <td className="w-1/2">Calories</td>
            <td className="w-1/2 font-bold text-brown-800">{calories}kcal</td>
          </tr>
          <tr className="block flex w-full px-8 py-3">
            <td className="w-1/2">Carbs</td>
            <td className="w-1/2 font-bold text-brown-800">{carbs}g</td>
          </tr>
          <tr className="block flex w-full px-8 py-3">
            <td className="w-1/2">Protein</td>
            <td className="w-1/2 font-bold text-brown-800">{protein}g</td>
          </tr>
          <tr className="block flex w-full px-8 pt-3">
            <td className="w-1/2">Fat</td>
            <td className="w-1/2 font-bold text-brown-800">{fat}g</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
