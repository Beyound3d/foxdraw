import { Room } from "@/components/room";
import { Canvas } from "./_components/canvas";

interface BoardIdPageProps {
    params: {
      boardId: string;
    };
  };

const BoardIdPage = ({params,}: BoardIdPageProps) => {
    return (
        <Room roomId={params.boardId} fallback={<div>Loading...</div>}>
            <Canvas boardId={params.boardId}/>
        </Room>
    )
}

export default BoardIdPage;