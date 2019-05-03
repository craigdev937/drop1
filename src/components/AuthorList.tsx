import React from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";
import { Row } from "./types";

interface Props {
    row: Row;
    listId: string;
    listType?: string;
    internalScroll?: boolean;
    isCombineEnabled?: boolean;
};

export const AuthorList: React.FC<Props> = ({ listId, listType, row }) => {
    return (
        <Droppable
            droppableId={listId}
            type={listType}
            direction="horizontal"
            isCombineEnabled={false}
        >
        {dropProvided => (
            <main {...dropProvided.droppableProps}>
                <section 
                    style={{
                         display: "flex",
                         backgroundColor: "pink",
                         margin: 20,
                         minHeight: 70
                    }} 
                    ref={dropProvided.innerRef}
                >
                    {row.urls.map((url, index) => (
                        <Draggable 
                            key={url} 
                            draggableId={url} 
                            index={index}>
                            {dragProvided => (
                                <div
                                    {...dragProvided.dragHandleProps}
                                    {...dragProvided.draggableProps}
                                    ref={dragProvided.innerRef}
                                >
                                    <img
                                        style={{ width: 65 }}
                                        src={url}
                                    />
                                </div>
                            )}
                        </Draggable>
                    ))}
                    {dropProvided.placeholder}
                </section>
            </main>
        )}
        </Droppable>
    );
};


