export default async function read(props){
    const id = props.params.i
    const res = await fetch("http://localhost:3000/test-board/" + id, { cache : 'no-store'});
    const board = await res.json();
    console.log(board);
    return(
    <>
        <h4>{board.board.title}</h4>
        <p>{board.board.content}</p>
    </>
    )
}