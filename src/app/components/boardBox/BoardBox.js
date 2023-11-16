import Link from "next/link";

const BoardBox = ({board, index}) =>{
    return (
        <>
            <div className="board-warpper" key={index}>
                <Link href={"http://localhost:3000/read/" + board._id}> 
                    <div className="board-box">
                        <div className="board-box-header">
                            <h3>{board.title}</h3>
                        </div>
                        <div className="board-box-body">
                            <p>{board.content}</p>
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