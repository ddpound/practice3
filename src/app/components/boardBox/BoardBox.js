import Link from "next/link";

const BoardBox = (board, idx) =>{
    const boxInBoard = board.board;
    return (
        <>
            <div className="board-warpper" key={board.idx}>
                <Link href={"http://localhost:3000/read/" + boxInBoard._id}> 
                    <div className="board-box">
                        <div className="board-box-header">
                            <h3>{boxInBoard.title}</h3>
                        </div>
                        <div className="board-box-body">
                            <p>{boxInBoard.content}</p>
                        </div>
                        <div className="board-box-footer">
                        </div>
                    </div>
                </Link>
            </div>
        </>
    );
}


export default BoardBox;