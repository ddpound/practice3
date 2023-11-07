export default async function read(props){
    const res = await fetch("http://localhost:3000/test-board");
    const board = await res.json();
    return(
    <>
    {board.test_board.map((r, idx)=>{
       return (
       <div key={idx}>
        <h3>{r.title}</h3>
        <p>{r.content}</p>
       </div>
       )
    })}
        read 페이지입니다
        {props.params.i}
    </>
    )
    
}