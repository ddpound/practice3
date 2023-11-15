import Link from "next/link";

export default async function read(){
    const res = await fetch("http://localhost:3000/test-board", { cache : 'no-store'});
    const board = await res.json();
    
    return(
    <>
    <h2>글목록</h2>
    <div className="board-page-body">
        {board.test_board.map((r, idx)=>{
        return (
        <div className="board-warpper"  key={idx}>
            <Link href={"http://localhost:3000/read/"+r._id}> 
                <div className="board-box">
                    <div className="board-box-header">
                        <h3>{r.title}</h3>
                    </div>
                    <div className="board-box-body">
                        <p>{r.content}</p>
                    </div>
                    <div className="board-box-footer">

                    </div>
                </div>
            </Link>
        </div>
        )
        })}
    </div>

    </>
    )
}