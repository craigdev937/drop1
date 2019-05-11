import React from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";
import { Row } from "./types";

interface Props {
    row: Row;
    listId: string;
    listType?: string;
    internalScroll?: boolean;
    isCombineEnabled?: boolean;
    onUp: () => void;
    onDown: () => void;
    onLabelChange: (newText: string) => void;
};

export const AuthorList: React.FC<Props> = ({ 
    listId, listType, row, onUp, onDown, onLabelChange
}) => {
    return (
        <main  style={{ display: "flex", alignItems: "center" }}>
            <section>
                <aside>
                    <button onClick={onUp}>Up</button>
                </aside>
                <input value={row.label} onChange={event => onLabelChange(event.target.value)} />
                <aside>
                    <button onClick={onDown}>Down</button>
                </aside>
            </section>
            <Droppable
                droppableId={listId}
                type={listType}
                direction="horizontal"
                isCombineEnabled={false}
            >
            {dropProvided => (
                <section 
                    {...dropProvided.droppableProps}
                    style={{
                            flex: 1,
                            display: "flex",
                            backgroundColor: "pink",
                            margin: 20,
                            minHeight: 70,
                            overflowX: "auto"
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
            )}
            </Droppable>
        </main>
    );
};


