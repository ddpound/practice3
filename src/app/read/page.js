import BoardBox from "../components/boardBox/boardBox";

export default async function read(){
    const res = await fetch("http://localhost:3000/test-board", { cache : 'no-store'});
    const boards = await res.json();
    
    return(
        <>
            <h2>글목록</h2>
            <div className="board-page-body">
                {boards.test_board.map((board, idx)=>{
                return (
                    <BoardBox board={board} idx={idx} />
                )
                })}
            </div>
        </>
    )
}