export default async function read(){
    const res = await fetch("http://localhost:3000/test-board", { cache : 'no-store'});
    const board = await res.json();
    
    return(
    <>
    <h2>글목록</h2>
    {board.test_board.map((r, idx)=>{
       return (
       <div key={idx}>
        {r._id}
        <h3>{r.title}</h3>
        <p>{r.content}</p>
       </div>
       )
    })}
    </>
    )
    
}