"use client";

import { Info } from "./info";
import { Participants } from "./participants";
import { Toolbar } from "./toolbar";

interface CanvasProps{
    boardId:string;
}

export const Canvas = ({boardId}:CanvasProps) => {
    return (
        <main className="h-full w-full relative bg-neutral-100 touch-none">
            <Info boardId={""} />
            <Participants/>
            <Toolbar canvasState={undefined} setCanvasState={function (newState: CanvasState): void {
                throw new Error("Function not implemented.");
            } } undo={function (): void {
                throw new Error("Function not implemented.");
            } } redo={function (): void {
                throw new Error("Function not implemented.");
            } } canUndo={false} canRedo={false}/>
        </main>
    )
}

