import React from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { generate } from "shortid";
import { reorderRows, reorder } from "./reorder";
import { ColorMap } from "./types";
import { AuthorList } from "./AuthorList";

const aId = generate();
const unrankedId = generate();

export const Home = () => {
    const [rows, setRows] = React.useState([
        { id: aId, label: "a", urls: [] },
        {
            id: unrankedId,
            label: "unranked",
            urls: [
                "https://oyster.ignimgs.com/mediawiki/apis.ign.com/super-smash-bros-switch/b/ba/SmashMarioThumb.jpg?width=325",
                "https://oyster.ignimgs.com/mediawiki/apis.ign.com/super-smash-bros-switch/3/3e/SmashDonkeyKongThumb.jpg?width=325",
                "https://oyster.ignimgs.com/mediawiki/apis.ign.com/super-smash-bros-switch/4/4c/SmashLinkThumb.jpg?width=325",
                "https://oyster.ignimgs.com/mediawiki/apis.ign.com/super-smash-bros-switch/f/f0/SmashSamusThumb.jpg?width=325",
                "https://oyster.ignimgs.com/mediawiki/apis.ign.com/super-smash-bros-switch/2/27/SmashDarkSamusThumb.jpg?width=325",
                "https://oyster.ignimgs.com/mediawiki/apis.ign.com/super-smash-bros-switch/5/5c/SmashYoshiThumb.jpg?width=325",
                "https://oyster.ignimgs.com/mediawiki/apis.ign.com/super-smash-bros-switch/a/a0/SmashKirbyThumb.jpg?width=325",
                "https://oyster.ignimgs.com/mediawiki/apis.ign.com/super-smash-bros-switch/4/42/SmashFoxThumb.jpg?width=325",
                "https://oyster.ignimgs.com/mediawiki/apis.ign.com/super-smash-bros-switch/e/ea/SmashPikachuThumb.jpg?width=325",
                "https://oyster.ignimgs.com/mediawiki/apis.ign.com/super-smash-bros-switch/0/0a/SmashLuigiThumb.jpg?width=325",
                "https://oyster.ignimgs.com/mediawiki/apis.ign.com/super-smash-bros-switch/9/94/SmashNessThumb.jpg?width=325",
                "https://oyster.ignimgs.com/mediawiki/apis.ign.com/super-smash-bros-switch/d/db/SmashFalconThumb.jpg?width=325",
                "https://oyster.ignimgs.com/mediawiki/apis.ign.com/super-smash-bros-switch/9/99/SmashJigglypuffThumb.jpg?width=325",
                "https://oyster.ignimgs.com/mediawiki/apis.ign.com/super-smash-bros-switch/7/7d/SmashPeachThumb.jpg?width=325",
                "https://oyster.ignimgs.com/mediawiki/apis.ign.com/super-smash-bros-switch/a/a2/SmashDaisyThumb.jpg?width=325",
                "https://oyster.ignimgs.com/mediawiki/apis.ign.com/super-smash-bros-switch/1/14/SmashBowserThumb.jpg?width=325",
                "https://oyster.ignimgs.com/mediawiki/apis.ign.com/super-smash-bros-switch/0/0d/SmashClimbersThumb.jpg?width=325",
                "https://oyster.ignimgs.com/mediawiki/apis.ign.com/super-smash-bros-switch/5/5c/SmashSheikThumb.jpg?width=325",
                "https://oyster.ignimgs.com/mediawiki/apis.ign.com/super-smash-bros-switch/9/9b/SmashZeldaThumb.jpg?width=325",
                "https://oyster.ignimgs.com/mediawiki/apis.ign.com/super-smash-bros-switch/8/84/SmashDrMarioThumb.jpg?width=325",
                "https://oyster.ignimgs.com/mediawiki/apis.ign.com/super-smash-bros-switch/2/29/SmashPichuThumb.jpg?width=325",
                "https://oyster.ignimgs.com/mediawiki/apis.ign.com/super-smash-bros-switch/a/a8/SmashFalcoThumb.jpg?width=325",
                "https://oyster.ignimgs.com/mediawiki/apis.ign.com/super-smash-bros-switch/7/7c/SmashMarthThumb.jpg?width=325",
                "https://oyster.ignimgs.com/mediawiki/apis.ign.com/super-smash-bros-switch/6/62/SmashLucinaThumb.jpg?width=325",
                "https://oyster.ignimgs.com/mediawiki/apis.ign.com/super-smash-bros-switch/7/73/SmashYoungLinkThumb.jpg?width=325",
                "https://oyster.ignimgs.com/mediawiki/apis.ign.com/super-smash-bros-switch/d/d9/SmashGanondorfThumb.jpg?width=325",
                "https://oyster.ignimgs.com/mediawiki/apis.ign.com/super-smash-bros-switch/e/e1/SmashMewtwoThumb.jpg?width=325",
                "https://oyster.ignimgs.com/mediawiki/apis.ign.com/super-smash-bros-switch/5/5d/SmashRoyThumb.jpg?width=325",
                "https://oyster.ignimgs.com/mediawiki/apis.ign.com/super-smash-bros-switch/7/71/SmashChromThumb.jpg?width=325",
                "https://oyster.ignimgs.com/mediawiki/apis.ign.com/super-smash-bros-switch/7/75/SmashGameWatchThumb.jpg?width=325",
                "https://oyster.ignimgs.com/mediawiki/apis.ign.com/super-smash-bros-switch/1/19/SmashMetaKnightThumb.jpg?width=325",
                "https://oyster.ignimgs.com/mediawiki/apis.ign.com/super-smash-bros-switch/b/b4/SmashPitThumb.jpg?width=325",
                "https://oyster.ignimgs.com/mediawiki/apis.ign.com/super-smash-bros-switch/d/dd/SmashDarkPitThumb.jpg?width=325",
                "https://oyster.ignimgs.com/mediawiki/apis.ign.com/super-smash-bros-switch/8/84/SmashZeroSuitThumb.jpg?width=325",
                "https://oyster.ignimgs.com/mediawiki/apis.ign.com/super-smash-bros-switch/f/f0/SmashWarioThumb.jpg?width=325",
                "https://oyster.ignimgs.com/mediawiki/apis.ign.com/super-smash-bros-switch/7/72/SmashSnakeThumb.jpg?width=325",
                "https://oyster.ignimgs.com/mediawiki/apis.ign.com/super-smash-bros-switch/6/62/SmashIkeThumb.jpg?width=325",
                "https://oyster.ignimgs.com/mediawiki/apis.ign.com/super-smash-bros-switch/5/57/SmashPokemonTrainerThumb.jpg?width=325",
                "https://oyster.ignimgs.com/mediawiki/apis.ign.com/super-smash-bros-switch/3/32/SmashDiddyThumb.jpg?width=325",
                "https://oyster.ignimgs.com/mediawiki/apis.ign.com/super-smash-bros-switch/b/b1/SmashLukasThumb.jpg?width=325",
                "https://oyster.ignimgs.com/mediawiki/apis.ign.com/super-smash-bros-switch/1/1f/SmashSonicThumb.jpg?width=325",
                "https://oyster.ignimgs.com/mediawiki/apis.ign.com/super-smash-bros-switch/7/7f/SmashDededeThumb.jpg?width=325",
                "https://oyster.ignimgs.com/mediawiki/apis.ign.com/super-smash-bros-switch/5/52/SmashOlimarThumb.jpg?width=325",
                "https://oyster.ignimgs.com/mediawiki/apis.ign.com/super-smash-bros-switch/3/3b/SmashLucarioThumb.jpg?width=325",
                "https://oyster.ignimgs.com/mediawiki/apis.ign.com/super-smash-bros-switch/4/4f/SmashRobThumb.jpg?width=325",
                "https://oyster.ignimgs.com/mediawiki/apis.ign.com/super-smash-bros-switch/6/69/SmashToonLinkThumb.jpg?width=325",
                "https://oyster.ignimgs.com/mediawiki/apis.ign.com/super-smash-bros-switch/0/0d/SmashWolfThumb.jpg?width=325",
                "https://oyster.ignimgs.com/mediawiki/apis.ign.com/super-smash-bros-switch/a/a5/SmashVillagerThumb.jpg?width=325",
                "https://oyster.ignimgs.com/mediawiki/apis.ign.com/super-smash-bros-switch/2/28/SmashMegaManThumb.jpg?width=325",
                "https://oyster.ignimgs.com/mediawiki/apis.ign.com/super-smash-bros-switch/9/91/SmashWiiFitThumb.jpg?width=325",
                "https://oyster.ignimgs.com/mediawiki/apis.ign.com/super-smash-bros-switch/9/9f/SmashRosalinaThumb.jpg?width=325",
                "https://oyster.ignimgs.com/mediawiki/apis.ign.com/super-smash-bros-switch/c/cc/SmashLittleMacThumb.jpg?width=325",
                "https://oyster.ignimgs.com/mediawiki/apis.ign.com/super-smash-bros-switch/b/b1/SmashGreninjaThumb.jpg?width=325",
                "https://oyster.ignimgs.com/mediawiki/apis.ign.com/super-smash-bros-switch/7/78/SmashMiiFighterThumb.jpg?width=325",
                "https://oyster.ignimgs.com/mediawiki/apis.ign.com/super-smash-bros-switch/5/5a/SmashPalutenaThumb.jpg?width=325",
                "https://oyster.ignimgs.com/mediawiki/apis.ign.com/super-smash-bros-switch/a/a9/SmashPacManThumb.jpg?width=325",
                "https://oyster.ignimgs.com/mediawiki/apis.ign.com/super-smash-bros-switch/9/92/SmashRobinThumb.jpg?width=325",
                "https://oyster.ignimgs.com/mediawiki/apis.ign.com/super-smash-bros-switch/4/49/SmashShulkThumb.jpg?width=325",
                "https://oyster.ignimgs.com/mediawiki/apis.ign.com/super-smash-bros-switch/f/fb/SmashBowserJrThumb.jpg?width=325",
                "https://oyster.ignimgs.com/mediawiki/apis.ign.com/super-smash-bros-switch/f/fb/SmashDuckHuntThumb.jpg?width=325",
                "https://oyster.ignimgs.com/mediawiki/apis.ign.com/super-smash-bros-switch/0/0b/SmashRyuThumb.jpg?width=325",
                "https://oyster.ignimgs.com/mediawiki/apis.ign.com/super-smash-bros-switch/6/65/Kenthumb.jpg?width=325",
                "https://oyster.ignimgs.com/mediawiki/apis.ign.com/super-smash-bros-switch/3/3d/SmashCloudThumb.jpg?width=325",
                "https://oyster.ignimgs.com/mediawiki/apis.ign.com/super-smash-bros-switch/4/44/SmashCorrinThumb.jpg?width=325",
                "https://oyster.ignimgs.com/mediawiki/apis.ign.com/super-smash-bros-switch/4/4f/SmashBayonettaThumb.jpg?width=325",
                "https://oyster.ignimgs.com/mediawiki/apis.ign.com/super-smash-bros-switch/6/62/SmashInklingThumb.jpg?width=325",
                "https://oyster.ignimgs.com/mediawiki/apis.ign.com/super-smash-bros-switch/3/3d/SmashRidleyThumb.jpg?width=325",
                "https://oyster.ignimgs.com/mediawiki/apis.ign.com/super-smash-bros-switch/c/c4/SmashSimonThumb.jpg?width=325",
                "https://oyster.ignimgs.com/mediawiki/apis.ign.com/super-smash-bros-switch/3/3e/SmashRichterThumb.jpg?width=325",
                "https://oyster.ignimgs.com/mediawiki/apis.ign.com/super-smash-bros-switch/4/43/SmashKingKRoolThumb.jpg?width=325",
                "https://oyster.ignimgs.com/mediawiki/apis.ign.com/super-smash-bros-switch/a/ae/IsabelleThumb.jpg?width=325",
                "https://oyster.ignimgs.com/mediawiki/apis.ign.com/super-smash-bros-switch/7/7b/IncineroarThumb.jpg?width=325",
                "https://oyster.ignimgs.com/mediawiki/apis.ign.com/super-smash-bros-switch/3/31/PiranhaThumb.jpg?width=325",
                "https://oyster.ignimgs.com/mediawiki/apis.ign.com/super-smash-bros-switch/5/5c/JokerThumb.jpg?width=325"
            ]
        }
    ]);

    return (
        <DragDropContext 
            onDragEnd={({ destination, source }) => {
                // Dropped outside the list.
                if (!destination) {
                    return;
                }
                setRows(reorderRows(rows, source, destination));
            }}
        >
            <React.Fragment>
                <button 
                    onClick={() => {
                        setRows([
                            {
                                id: generate(),
                                label: "",
                                urls: []
                            },
                            ...rows
                        ]);
                    }}
                >Add Row
                </button>
                {rows.map((row, index) => (
                    <AuthorList
                        onLabelChange={
                            (newText) => setRows(rows.map(
                                x => x.id === row.id ? 
                                {...row, label: newText} 
                                : x
                            ))
                        }
                        onUp={() => setRows(reorder(rows, index, index - 1))}
                        onDown={() => setRows(reorder(rows, index, index + 1))}
                        internalScroll
                        key={row.id}
                        listId={row.id}
                        listType="CARD"
                        row={row}
                    />
                ))}
            </React.Fragment>
        </DragDropContext>
    );
};

