import { Guns } from "@/vendor/suroi/common/src/definitions/guns";
import { Melees } from "@/vendor/suroi/common/src/definitions/melees";
import { IMAGE_BASE_URL, getSuroiImageLink } from "@/lib/util/suroi";
import PageCard from "@/components/cards/PageCard";
import GridTable from "@/components/tables/GridTable";
import { Throwables } from "@/vendor/suroi/common/src/definitions/throwables";
import Link from "next/link";
import Collapsible from "@/components/interactive/Collapsible";

export default function WeaponsPage() {
  return (
    <main className="w-full text-white">
      <div className="prose prose-invert">
        <h1>Weapons</h1>
        <p>
          There are currently <Link href="#guns">{Guns.length} guns</Link> in
          the game, <Link href="#melees">{Melees.length} melee weapons</Link>,
          and <Link href="#throwables">{Throwables.length} throwables</Link> in
          the game.
        </p>
      </div>
      <Collapsible
        label={
          <div className="prose prose-invert">
            <h2 id="guns">Guns</h2>
          </div>
        }
        className="my-4"
      >
        <GridTable>
          {Guns.filter((gun) => {
            return !gun.isDual;
          }).map((gun) => (
            <PageCard
              title={gun.name}
              image={getSuroiImageLink(gun)}
              url={"/weapons/guns/" + gun.idString}
              description={gun.idString}
              key={gun.idString}
            />
          ))}
        </GridTable>
      </Collapsible>
      <Collapsible
        label={
          <div className="prose prose-invert">
            <h2 id="melees">Melees</h2>
          </div>
        }
        className="my-4"
      >
        <GridTable>
          {Melees.map((melee) => (
            <PageCard
              title={melee.name}
              image={getSuroiImageLink(melee)}
              url={"/weapons/melee/" + melee.idString}
              description={melee.idString}
              key={melee.idString}
            />
          ))}
        </GridTable>
      </Collapsible>
      <Collapsible
        label={
          <div className="prose prose-invert">
            <h2 id="throwables">Throwables</h2>
          </div>
        }
        className="my-4"
      >
        <GridTable>
          {Throwables.map((throwable) => (
            <PageCard
              key={throwable.idString}
              title={throwable.name}
              url={"/weapons/throwables/" + throwable.idString}
              image={
                //IMAGE_BASE_URL + "game/weapons/" + throwable.idString + ".svg"
                getSuroiImageLink(throwable)
              }
              description={throwable.idString}
            />
          ))}
        </GridTable>
      </Collapsible>
    </main>
  );
}
