import React from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { reorderColors } from "./reorder";
import { ColorMap } from "./types";
import { AuthorList } from "./AuthorList";

export const Home = () => {
    const [colorMap, setColors] = React.useState<ColorMap>({
        a: ["blue", "red", "yellow"],
        b: ["pink"],
        c: ["green", "tan"]
    });

    return (
        <DragDropContext 
            onDragEnd={({ destination, source }) => {
                // Dropped outside the list.
                if (!destination) {
                    return;
                }
                setColors(reorderColors(colorMap, source, destination));
            }}
        >
            <React.Fragment>
                {Object.entries(colorMap).map(([key, value]) => (
                    <AuthorList
                        internalScroll
                        key={key}
                        listId={key}
                        listType="CARD"
                        colors={value}
                    />
                ))}
            </React.Fragment>
        </DragDropContext>
    );
};

