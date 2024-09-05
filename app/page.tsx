import { ExpandableCard } from "@/components/ExpandableCard";
import { TestComponent } from "@/components/TestComponent";

export default function Home() {
  return (
    <div className="bg-black flex flex-col p-4 items-center gap-6 overflow-scroll max-w-92">
      {/* <MagicCard
        title="Game of the day"
        description="Fly the coolest dragons"
        imageUrl="/dragon-card-full.webp"
        appIconUrl="/app-icon.webp"
        appName="Dragonic"
        appDescription="Fairy tale game."
      /> */}

      <ExpandableCard
        title="Test 1"
        description="Fly the coolest dragons"
        imageUrl="/dragon-card-full.webp"
        appIconUrl="/app-icon.webp"
        appName="Dragonic"
        appDescription="Fairy tale game."
      >
        <strong>You will not believe this!</strong> <br />
        <p>These dragons are so cool!</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quos.
        </p>
        <strong>You will not believe this!</strong> <br />
        <p>These dragons are so cool!</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quos.
        </p>
        <strong>You will not believe this!</strong> <br />
        <p>These dragons are so cool!</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quos.
        </p>
        <strong>You will not believe this!</strong> <br />
        <p>These dragons are so cool!</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quos.
        </p>
        <strong>You will not believe this!</strong> <br />
        <p>These dragons are so cool!</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quos.
        </p>
      </ExpandableCard>

      <ExpandableCard
        title="Test 2"
        description="Fly the coolest dragons"
        imageUrl="/dragon-card-full.webp"
        appIconUrl="/app-icon.webp"
        appName="Dragonic"
        appDescription="Fairy tale game."
      />

      {/* <ExpandableCard
        title="Test 2"
        description="Fly the coolest dragons"
        imageUrl="/dragon-card-full.webp"
        appIconUrl="/app-icon.webp"
        appName="Dragonic"
        appDescription="Fairy tale game."
      />

      <ExpandableCard
        title="Test 3"
        description="Fly the coolest dragons"
        imageUrl="/dragon-card-full.webp"
        appIconUrl="/app-icon.webp"
        appName="Dragonic"
        appDescription="Fairy tale game."
      /> */}
      {/* 
      <MagicCard
        title="Game of the day"
        description="Fly the coolest dragons"
        imageUrl="/dragon-card-full.webp"
        appIconUrl="/app-icon.webp"
        appName="Dragonic"
        appDescription="Fairy tale game."
      /> */}
      <TestComponent />
    </div>
  );
}
