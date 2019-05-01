import React from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";

interface Props {
    colors: string[];
    listId: string;
    listType?: string;
    internalScroll?: boolean;
    isCombineEnabled?: boolean;
};

export const AuthorList: React.FC<Props> = ({ listId, listType, colors }) => {
    return (
        <Droppable
            droppableId={listId}
            type={listType}
            direction="horizontal"
            isCombineEnabled={false}
        >
        {dropProvided => (
            <main {...dropProvided.droppableProps}>
                <div>
                    <div>
                        <section style={{ display: "flex" }} ref={dropProvided.innerRef}>
                            {colors.map((color, index) => (
                                <Draggable 
                                    key={color} 
                                    draggableId={color} 
                                    index={index}>
                                    {dragProvided => (
                                        <div
                                            {...dragProvided.dragHandleProps}
                                            {...dragProvided.draggableProps}
                                            ref={dragProvided.innerRef}
                                        >
                                            <div 
                                                style={{ backgroundColor: color }}>
                                                {color}
                                            </div>
                                        </div>
                                    )}
                                </Draggable>
                            ))}
                            {dropProvided.placeholder}
                        </section>
                    </div>
                </div>
            </main>
        )}
        </Droppable>
    );
};


