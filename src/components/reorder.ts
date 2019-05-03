import { DraggableLocation } from "react-beautiful-dnd";
import { ColorMap, Row } from "./types";

// A little function to help us with reording the result.
export const reorder = (
    list: any[],
    startIndex: number,
    endIndex: number    
): any[] => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
};

export const reorderRows = (
    rows: Row[],
    source: DraggableLocation,
    destination: DraggableLocation
) => {
    return rows;
    // const current = [...colors[source.droppableId]];
    // const next = [...colors[destination.droppableId]];
    // const target = current[source.index];

    // // Moving to the same list.
    // if (source.droppableId === destination.droppableId) {
    //     const reordered = reorder(current, source.index, destination.index);
    //     return {
    //         ...colors,
    //         [source.droppableId]: reordered
    //     };
    // }

    // // Moving to a different list.
    // // Remove from the original list.
    // current.splice(source.index, 1);
    // // Insert into next.
    // next.splice(destination.index, 0, target);
    // return {
    //     ...colors,
    //     [source.droppableId]: current,
    //     [destination.droppableId]: next
    // };
};

