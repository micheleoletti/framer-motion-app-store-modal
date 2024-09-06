import { ExpandableCard } from "@/components/ExpandableCard";

export default function Home() {
  return (
    <div className="bg-black p-4 items-center gap-6 overflow-scroll text-white relative flex flex-col">
      <ExpandableCard
        title="Fiscal Fury"
        description="When hippos get mad at paperwork."
        imageUrl="/fiscal-fury.webp"
        appIconUrl="/fiscal-fury-icon.webp"
        appName="Fiscal Fury"
        appDescription="IRS didn't see that coming."
      >
        <strong>Welcome to Fiscal Fury!</strong> <br />
        <p>
          Step into the chaotic world of Fiscal Fury, where hippos are on a
          rampage.
        </p>
        <br />
        <p>
          <strong>Game Features</strong> <br />- <strong>Epic Battles:</strong>{" "}
          Witness hippos clashing over paperwork. <br />-{" "}
          <strong>Unexpected Twists:</strong> Every turn brings a new surprise.{" "}
          <br />- <strong>Unique Characters:</strong> Meet quirky hippos with
          distinct personalities. <br />- <strong>Strategic Gameplay:</strong>{" "}
          Outsmart your opponents in this wild adventure. <br />
        </p>
        <br />
        <p>
          <strong>Storyline:</strong> <br />
          In Fiscal Fury, the hippos are furious, and no one knows why. Navigate
          through the chaos, uncover secrets, and restore order.
        </p>
        <br />
        <p>
          <strong>Join the Frenzy!</strong> <br />
          Download Fiscal Fury and dive into the madness today.
        </p>
      </ExpandableCard>

      <ExpandableCard
        title="Dragonic"
        description="Fly the coolest dragons"
        imageUrl="/dragon-card-full.webp"
        appIconUrl="/app-icon.webp"
        appName="Dragonic"
        appDescription="Fairy tale game."
      >
        <strong>Embark on an Epic Adventure!</strong> <br />
        <p>
          Join the world of Dragonic, where mythical creatures soar the skies.
        </p>
        <br />
        <p>
          <strong>Game Features</strong> <br />-{" "}
          <strong>Stunning Graphics:</strong> Experience breathtaking visuals as
          you explore vast landscapes. <br />- <strong>Exciting Quests:</strong>{" "}
          Complete challenging missions and uncover hidden secrets. <br />-{" "}
          <strong>Customizable Dragons:</strong> Train and customize your
          dragons to become the ultimate beast. <br />-{" "}
          <strong>Multiplayer Mode:</strong> Team up with friends and take on
          epic battles together. <br />
        </p>
        <br />
        <p>
          <strong>Storyline:</strong> <br />
          In a land where dragons rule the skies, you are the chosen one to
          bring peace to the realm. Battle fierce enemies, forge alliances, and
          discover the ancient secrets of the dragon world.
        </p>
        <p>
          <strong>Join the Adventure Now!</strong> <br />
          Download Dragonic and become a legend in this magical world.
        </p>
      </ExpandableCard>

      <ExpandableCard
        title="Hey day"
        description="What a day"
        imageUrl="/hey-day.jpg"
        appIconUrl="/hey-day-icon.webp"
        appName="Hey day"
        appDescription="Just greeting farm animals."
      >
        <strong>Welcome to Hey Day!</strong> <br />
        <p>
          Step into the charming world of Hey Day, where farm life is at its
          best.
        </p>
        <br />
        <p>
          <strong>Game Features</strong> <br />-{" "}
          <strong>Beautiful Scenery:</strong> Enjoy picturesque landscapes and
          vibrant colors. <br />- <strong>Fun Activities:</strong> Engage in
          various farming tasks and interact with adorable animals. <br />-{" "}
          <strong>Customizable Farm:</strong> Design and decorate your farm to
          your liking. <br />- <strong>Social Interaction:</strong> Visit
          friends&apos; farms and trade goods with them. <br />
        </p>
        <br />
        <p>
          <strong>Storyline:</strong> <br />
          In Hey Day, you inherit a quaint farm and must restore it to its
          former glory. Grow crops, raise animals, and build a thriving
          community.
        </p>
        <p>
          <strong>Start Your Farming Journey!</strong> <br />
          Download Hey Day and experience the joy of farm life today.
        </p>
      </ExpandableCard>
    </div>
  );
}
