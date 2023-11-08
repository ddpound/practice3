export default async function read(){
    const res = await fetch("http://localhost:3000/test-board", {next : {revalidate : 0} });
    const board = await res.json();
    console.log(board.test_board)
    return(
    <>
    <h2>글목록</h2>
    {board.test_board.map((r, idx)=>{
       return (
       <div key={idx}>
        <h3>{r.title}</h3>
        <p>{r.content}</p>
       </div>
       )
    })}
    </>
    )
    
}