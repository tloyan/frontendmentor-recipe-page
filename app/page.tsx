import Image from "next/image";

// const recipe = {
//   img: {
//     src: "/"
//   }
// }

export default function Home() {
  return (
    <article>
      <div>
        <Image src="/image-omelette.jpeg" alt="recipe image" width={1312} height={600} />
      </div>
      <div className="py-10 px-8 space-y-8">
        <header className="space-y-6">
          <h1 className="font-serif text-[36px] leading-none text-stone-900">Simple Omelette Recipe</h1>
          <p className="">An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats.</p>
        </header>
        <PreparationTimeSection />
        <IngredientsSection />
        <hr className="border-stone-150"/>
        <InstructionSection />
        <hr className="border-stone-150"/>
        <NutritionSection />
      </div>
    </article>
  );
}

function ListItem({ heading, body, marker = '•', markerPos = 'middle' }: { heading?: string, body: string, marker?: string, markerPos?: "middle" | "top" }) {
  return (
    <li className="flex items-center space-x-4">
      <p className={`text-base pl-2 ${marker === "•" ? "pr-[10px]" : "pr-[3px]"} text-rose-800 font-bold ${ markerPos === "top" && "self-start"}`}><span className={`${marker === "•" && "align-middle"}`}>{marker}</span></p>
      <p>
        {heading && <span className="font-bold">{heading}: </span>}
        {body}
      </p>
    </li>
  )
}

function List({ list, type = "ul" }: { list: Array<{ heading?: string, body: string } | string>, type?: "ul" | "ol" }) {
  const fList = list.map((item) => {
    if (typeof item == "string")
      return { body: item }
    return item
  })

  if (type === "ol") {
    return (
      <ol className="space-y-2">
        {fList.map((item, n) => 
          <ListItem key={item.body} heading={item.heading} body={item.body} marker={`${String(n + 1)}.`} markerPos="top" />  
        )}
      </ol>
    )
  }
  
  return (
    <ul className="space-y-2">
      {fList.map(item => 
        <ListItem key={item.body} heading={item.heading} body={item.body} />  
      )}
    </ul>
  )
}

function PreparationTimeSection() {
  return (
    <section className="bg-rose-50 rounded-xl p-6 space-y-4">
      <p className="text-rose-800 text-xl leading-none font-semibold">Preparation time</p>
      <List list={[
        { heading: "Total", body: "Approximately 10 minutes" },
        { heading: "Preparation", body: "5 minutes" },
        { heading: "Cooking", body: "5 minutes" }
      ]} />
    </section>
  )
}

function IngredientsSection() {
  return (
    <section className="space-y-6">
      <h2 className="font-serif text-[28px] leading-none text-brown-800">Ingredients</h2>
      <List list={[
        "2-3 large eggs",
        "Salt, to taste",
        "Pepper, to taste",
        "1 tablespoon of butter or oil",
        "Optional fillings: cheese, diced vegetables, cooked meats, herbs"
      ]} />
    </section>
  )
}

function InstructionSection() {
  return (
    <section className="space-y-6">
      <h2 className="font-serif text-[28px] leading-none text-brown-800">Instructions</h2>
      <List type="ol" list={[
        { heading: "Beat the eggs", body: "In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture." },
        { heading: "Heat the pan", body: "Place a non-stick frying pan over medium heat and add butter or oil." },
        { heading: "Cook the omelette", body: "Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface." },
        { heading: "Add fillings (optional)", body: "When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette." },
        { heading: "Fold and serve", body: "As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate." },
        { heading: "Enjoy", body: "Serve hot, with additional salt and pepper if needed." },
      ]} />
    </section>
  )
}

function NutritionSection() {
  const data = { calories: "277kcal", carbs: "0g", protein: "20g", fat: "22g" }
  return (
    <section className="space-y-6">
      <h2 className="font-serif text-[28px] leading-none text-brown-800">Nutrition</h2>
      <p className="pl-[1px]">The table below shows nutritional values per serving without the additional fillings.</p>
      <table className="table-auto w-full">
        <tbody className="divide-y divide-stone-150">
          <tr className="w-full px-8 pb-3 block flex">
            <td className="w-1/2">Calories</td>
            <td className="w-1/2 font-bold text-brown-800">277kcal</td>
          </tr>
          <tr className="w-full px-8 py-3 block flex">
            <td className="w-1/2">Carbs</td>
            <td className="w-1/2 font-bold text-brown-800">0g</td>
          </tr>
          <tr className="w-full px-8 py-3 block flex">
            <td className="w-1/2">Protein</td>
            <td className="w-1/2 font-bold text-brown-800">20g</td>
          </tr>
          <tr className="w-full px-8 pt-3 block flex">
            <td className="w-1/2">Fat</td>
            <td className="w-1/2 font-bold text-brown-800">22g</td>
          </tr>
        </tbody>
      </table>
    </section>
  )
}